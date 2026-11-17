# Primal kettlebell: live-source and Lucky Orange analysis

Reviewed November 17, 2026. This is a read-only analysis of the current product data, fetched page documents and live Shopify theme source, compared with the seven-day Lucky Orange figures supplied by Nico. It is not a completed mobile interaction or checkout test, and no storefront changes or emails were sent.

## Executive conclusion

The supplied figures justify making this a mobile-first purchase-path investigation, but they do not prove that popups caused lost sales or that weight selection is broken. The strongest new engineering finding is a reproducible failure-recovery weakness in the current variant handler: Add to cart is disabled during a section request and stays disabled if that request rejects, in an isolated test of the pulled live methods ([live purchase handler](https://us.primalstrength.com/cdn/shop/t/12/assets/gaia-product-form.min.js?v=86210188156277758561790705934)).

Fresh direct-variant documents have internally consistent selected weight, price and cart-form variant ID for the tested 35 lb and 40 lb options, with the latter correctly marked Special Order ([35 lb page](https://us.primalstrength.com/products/primal-performance-series-cpu-kettlebell?variant=42455624548451), [40 lb page](https://us.primalstrength.com/products/primal-performance-series-cpu-kettlebell?variant=44421524193379)). This reduces the evidence for a general catalog/price-mapping failure, but does not verify in-page switching, successful cart additions, shipping rates or purchases.

## What the supplied Lucky Orange data actually establishes

The following numbers come from the user's report, not a newly opened Lucky Orange dashboard. Their date window was described as the last seven days; its exact start/end time, timezone, filters, session count and historical theme versions were not supplied.

| Metric | Supplied figure | Defensible interpretation |
|---|---:|---|
| All views / clicks | 1,041 / 4,975 | Recorded page activity, not unique people or orders. |
| Mobile views | 1,035, or 99.4% of views | Prioritize mobile. The six desktop views are too small a basis for device comparisons. |
| Mobile clicks | 4,941 | An interaction denominator, not a shopper denominator. |
| Scroll reach | 81.9% at 10%; 49.2% at 20%; 18.0% at 50% | Deeper content has limited exposure. Page-depth percentages do not identify the first viewport or establish exits. |
| Footer reach | Reported 0% | Check the heatmap's range, rounding and page-height normalization before interpreting literally. |
| Cookie Accept | 586 clicks | Consent is a major interaction category; this does not justify removing required consent. |
| Promotional/game controls | More than 400 clicks; Claim 180; Try Your Luck 129 | A meaningful category to inspect in recordings, not proof of revenue harm. |
| “9 lbs” summary / option badge | 385 / 236 clicks | The summary is a dropdown opener; these are not 621 unique shoppers choosing 9 lb. |
| Add to cart | 101 clicks | 2.04% of mobile clicks, or 9.76 clicks per 100 mobile views. Neither is an add-to-cart conversion rate. |
| Generic close/SVG elements | 337 clicks | Element-specific classification is needed; SVG clicks are not automatically overlay dismissals. |

The claimed 1,299 px “effective fold” is not a universal mobile viewport height. It should not become a hard-coded design threshold without the underlying heatmap definition and viewport measurements.

## Findings from the current storefront and source

### Purchase controls exist and tested direct-variant documents agree

- **Normal retail form:** The current product document includes a quantity input, hidden variant ID and Add to cart form, followed by Complete your setup and Request a Quote; it is not a quote-only product ([live product page](https://us.primalstrength.com/products/primal-performance-series-cpu-kettlebell)).
- **35 lb:** The fetched document selects 35 lbs, shows $174.00, submits variant `42455624548451`, and displays “In stock · Ships in 24 hours” ([35 lb page](https://us.primalstrength.com/products/primal-performance-series-cpu-kettlebell?variant=42455624548451)).
- **40 lb:** The fetched document selects 40 lbs, shows $202.00, submits variant `44421524193379`, and displays “Special Order” ([40 lb page](https://us.primalstrength.com/products/primal-performance-series-cpu-kettlebell?variant=44421524193379)).
- **Availability distinction:** All eleven variants are publicly marked available, but “available” is not equivalent to physical stock; the 40 lb page demonstrates why the distinction matters ([public product data](https://us.primalstrength.com/products/primal-performance-series-cpu-kettlebell.js), [40 lb page](https://us.primalstrength.com/products/primal-performance-series-cpu-kettlebell?variant=44421524193379)).

These are fresh fetched-document checks, not observations of a shopper tapping between weights. No cart was created and no order was placed during this review.

### Add to cart depends on a background section request recovering

The active `gaia-variant-radios` handler disables the purchase button at the start of `onVariantChange()`, updates price and form ID, and calls `renderProductInfo()`; that method restores button availability only in the resolved section-response path and has no rejection recovery ([live purchase handler](https://us.primalstrength.com/cdn/shop/t/12/assets/gaia-product-form.min.js?v=86210188156277758561790705934)). The constructor also schedules the variant-change routine on initialization, so this dependency is not limited to later weight changes ([live purchase handler](https://us.primalstrength.com/cdn/shop/t/12/assets/gaia-product-form.min.js?v=86210188156277758561790705934)).

A local Node test evaluated the exact pulled script with mocked DOM elements and a controlled fetch promise, keeping the actual `onVariantChange`, `renderProductInfo` and `toggleAddButton` methods while stubbing unrelated methods. It produced these results:

| Simulated section-request outcome | Result |
|---|---|
| Resolves normally | Button re-enabled. |
| Remains pending | Button remains disabled while the request is unresolved. |
| Rejects with a network error | Button remains disabled; rejection is unhandled. |

This confirms a code-level resilience defect, not its frequency among real visitors and not the explanation for the seven-day results. A dev-theme reproduction under throttled/interrupted mobile networking is the next validation step before any scoped fix.

### “9 lbs” click counts need reinterpretation

The current selector wraps the selected weight in a `<summary>` inside `<details>`, with individual radio options inside the dropdown, so opening it can generate a click associated with “9 lbs” without changing the variant ([live product document](https://us.primalstrength.com/products/primal-performance-series-cpu-kettlebell)). Consequently, 385 summary clicks cannot be described as 385 selections of the 9 lb variant, and comparing those clicks directly with 101 Add to cart clicks is not a conversion funnel.

Use recordings and explicit variant-change events to distinguish normal open/select behavior, repeated taps, unavailable choices, long waits and shopper indecision. Do not redesign the selector solely because it receives many clicks.

### Existing chat protection does not establish promotional-popup protection

The product document includes Alia's launcher, and the current overlay guard handles the HappyFox chat widget, cookie-preference access and checks against purchase/consent/cart interfaces ([live product document](https://us.primalstrength.com/products/primal-performance-series-cpu-kettlebell), [overlay guard](https://us.primalstrength.com/cdn/shop/t/12/assets/primal-overlay-guard.js?v=115171325925833646291794940775)). That script has no Alia-specific suppression logic, so its presence is not evidence that the gamified promotion no longer interrupts shoppers ([overlay guard](https://us.primalstrength.com/cdn/shop/t/12/assets/primal-overlay-guard.js?v=115171325925833646291794940775)).

The supplied promotional click counts make a first-visit mobile recording review worthwhile. The current popup's trigger, frequency, occupied screen area, overlap and causal impact were not measured in this run.

### Product information has a concrete mismatch

The description says the range starts at 10 lbs and assigns a handle diameter to 10 lbs, while the actual first purchasable option is 9 lbs; the handle-diameter list also does not cover every listed weight ([public product data](https://us.primalstrength.com/products/primal-performance-series-cpu-kettlebell.js)). Verify the correct technical specifications against approved product materials before correcting the copy; do not infer that each omitted weight shares another variant's diameter.

The 13 lb, 22 lb and 40 lb variants lack dedicated featured media, but the current handler explicitly exits its media-update routine when no featured media exists ([public product data](https://us.primalstrength.com/products/primal-performance-series-cpu-kettlebell.js), [live purchase handler](https://us.primalstrength.com/cdn/shop/t/12/assets/gaia-product-form.min.js?v=86210188156277758561790705934)). This is a possible image-clarity issue to inspect, not evidence that those options crash the purchase flow.

### Purchase hierarchy remains a hypothesis to validate visually

The source places the gallery before the product information, with a brief description and other blocks before the buy form; detailed information and reviews appear deeper in the document ([live product document](https://us.primalstrength.com/products/primal-performance-series-cpu-kettlebell)). Combined with the supplied shallow scroll reach, this supports checking whether selected weight, price, stock status and Add to cart remain easy to find, but it does not establish an obstructed button or a specific mobile pixel position.

Consider a compact selected-weight/price/purchase treatment only after measuring actual mobile layout and existing overlays. Any such proposal needs native Liquid/CSS/JavaScript, keyboard and screen-reader support, WCAG 2.2 review, and a preview before publication.

## Recommended sequence

- **First: validate request resilience.** Reproduce successful, slow and rejected section requests in a dev copy. If confirmed in the browser, prepare a narrowly scoped recovery change that preserves stock checks, variant ID/price synchronization, add-on behavior, error messaging and existing purchase paths.
- **Second: inspect recordings.** Sample mobile first visits, repeated selector interactions, Add to cart clicks without success, and cart/checkout exits. Record popup timing, selected weight, network errors and successful cart state rather than merely counting clicks.
- **Third: verify funnel measurement.** For the same window and device filter, reconcile unique product-view sessions, successful `/cart/add` responses, cart views, checkout starts and purchases with Shopify orders. A click is not a successful addition, and an analytics purchase count is not independently verified revenue.
- **Fourth: test promotional timing.** If recordings show interference, compare delayed/noninterruptive promotional treatment with the current configuration while retaining compliant consent. Measure successful additions and purchases, not simply fewer popup clicks.
- **Fifth: correct approved product facts.** Resolve the 9 lb/10 lb discrepancy and missing handle-diameter coverage from authoritative product specifications; review weight-specific imagery without replacing working gallery behavior unnecessarily.
- **Finally: evaluate layout changes.** Only after actual mobile measurements, decide whether purchase hierarchy or a compact sticky purchase control is needed. Do not undertake a broad redesign or change checkout/backend behavior on the evidence available.

## Coverage and limitations

- **Completed:** Public product data, current product document, two explicit variant documents, read-only scoped Shopify CLI theme pulls, source review and a local mocked failure-path test.
- **Not completed:** Rendered mobile taps, screenshots, live add-to-cart/checkout, shipping/tax checks, Lucky Orange session recordings, raw heatmaps, unique-session funnel reconciliation or field Core Web Vitals.
- **Browser operation that failed:** `browser_start({transport:"sandbox",url:"https://us.primalstrength.com/products/primal-performance-series-cpu-kettlebell",task_name:"Kettlebell audit"})` returned `startBrowser failed: Command exited with code 1 and error: asi-desktop command failed: Sandbox Chromium exited during startup`.
- **Checks after that failure:** The separate desktop status operation also reported Chromium startup failure; the user-local browser was unavailable. Public page fetches and traditional Shopify CLI theme reads succeeded, so this was not treated as a storefront outage or a platform-wide access restriction.
- **Lucky Orange access checked:** No matching tool or usable connector was found after service-name and session-recording/heatmap discovery. No authenticated Lucky Orange report was opened; supplied metrics remain user-provided.
- **Mutation scope:** No Shopify push, publication, product mutation, cart submission or email send. Any future production deployment remains Shopify CLI only, with preview, specific approval and scoped files.

## Engineering evidence

The audit read live theme `142304510051` on `primal-strength-us.myshopify.com` through traditional Shopify CLI. Local evidence includes the pulled source, public product snapshot, `variant-recovery-test.cjs` and its output `variant-recovery-results.json`; these are investigation artifacts, not storefront changes.

The tested purchase-script SHA-256 was `7d2a320fe8fc910fc1ba173b412caadb14f99f3550950dd96099035447a33438`. The test isolates a failure path with mocked dependencies and should not be represented as browser, mobile, checkout or production-conversion verification.
