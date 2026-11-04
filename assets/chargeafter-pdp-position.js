(() => {
  const setup = () => {
    document.querySelectorAll('.product-details').forEach((details) => {
      const finance = details.querySelector('.finance-block .ca-promotional-widget');
      const financeBlock = finance?.closest('.product-blocks-boxed');
      const productForm = details.querySelector('gaia-product-form');
      if (!financeBlock || !productForm || financeBlock.parentElement !== details) return;
      // Only act when the theme editor puts financing before the product form.
      if (!(financeBlock.compareDocumentPosition(productForm) & Node.DOCUMENT_POSITION_FOLLOWING)) return;
      const positionPaymentOptions = () => {
        const paymentOptions = details.querySelector('.spp2__widget_deposit');
        if (!paymentOptions || financeBlock.nextElementSibling === paymentOptions) return;
        // Move the existing app node, retaining its controls and event handlers.
        financeBlock.after(paymentOptions);
      };
      positionPaymentOptions();
      const observer = new MutationObserver(positionPaymentOptions);
      observer.observe(details, { childList: true, subtree: true });
    });
  };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setup, { once: true });
  } else {
    setup();
  }
})();
