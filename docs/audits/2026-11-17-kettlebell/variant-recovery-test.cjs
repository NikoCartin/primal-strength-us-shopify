// Read-only test of the pulled live handler. No browser or network writes.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const crypto = require('node:crypto');
const path = require('node:path');
const sourcePath = process.argv[2] || path.join(__dirname, 'live-theme/assets/gaia-product-form.min.js');
const source = fs.readFileSync(sourcePath, 'utf8');
const settle = () => new Promise(resolve => setImmediate(resolve));

async function scenario(mode) {
  const registry = new Map();
  let disabled = false;
  let resolveFetch;
  let rejectFetch;
  const errors = [];
  const onUnhandled = error => errors.push(error.message);
  process.on('unhandledRejection', onUnhandled);
  const pending = new Promise((resolve, reject) => {
    resolveFetch = resolve;
    rejectFetch = reject;
  });
  const button = {
    setAttribute(name) { if (name === 'disabled') disabled = true; },
    removeAttribute(name) { if (name === 'disabled') disabled = false; },
    classList: { contains: () => false }
  };
  const label = { textContent: 'Add to cart' };
  const form = {
    querySelector(selector) {
      if (selector === '[name="add"]') return button;
      if (selector === '[name="add"] > span') return label;
      return null;
    }
  };
  const document = {
    addEventListener() {},
    getElementById: () => null,
    querySelector: () => null,
    querySelectorAll: selector => selector.startsWith('#product-form-') ? [form] : []
  };
  vm.runInNewContext(source, {
    HTMLElement: class {},
    customElements: {
      get: name => registry.get(name),
      define: (name, value) => registry.set(name, value)
    },
    document,
    window: { variantStrings: { addToCart: 'Add to cart', soldOut: 'Out of stock' } },
    DOMParser: class { parseFromString() { return { getElementById: () => null }; } },
    fetch: () => pending,
    console
  });
  const handler = Object.create(registry.get('gaia-variant-selects').prototype);
  handler.dataset = { url: '/products/primal-performance-series-cpu-kettlebell', section: 'test' };
  handler.currentVariant = { id: 42455624548451, available: true, sku: 'PSWD0550', price: 17400 };
  // Isolate the actual onVariantChange, renderProductInfo and toggleAddButton
  // methods. Other work is outside this narrowly scoped failure-path test.
  for (const name of [
    'updateOptions', 'updateMasterId', 'updatePickupAvailability', 'removeErrorMessage',
    'updateInventoryAndDelivery', 'updateTechSpecs', 'updateSku', 'updateBundleOptions',
    'updateMedia', 'updatePricing', 'updateURL', 'updateVariantInput', 'updateShareUrl',
    'setAvailableOptions', 'updateSaleBadge', 'updateBulkOrder', 'updateFinanceDisplay'
  ]) handler[name] = () => {};
  handler.onVariantChange();
  assert.equal(disabled, true, 'Variant changes immediately disable the add button');
  if (mode === 'success') resolveFetch({ text: async () => '' });
  if (mode === 'rejection') rejectFetch(new Error('Simulated section request network failure'));
  await settle();
  await settle();
  const result = { mode, disabledAfterSettling: disabled, unhandledErrors: errors.slice() };
  if (mode === 'success') assert.equal(disabled, false);
  else assert.equal(disabled, true);
  if (mode === 'rejection') assert.deepEqual(errors, ['Simulated section request network failure']);
  process.off('unhandledRejection', onUnhandled);
  return result;
}

(async () => {
  const results = [];
  for (const mode of ['success', 'pending', 'rejection']) results.push(await scenario(mode));
  console.log(JSON.stringify({
    testScope: 'Local mocked failure-path test of exact pulled live methods, not a live browser test',
    sourceSha256: crypto.createHash('sha256').update(source).digest('hex'),
    results
  }, null, 2));
})().catch(error => { console.error(error); process.exitCode = 1; });
