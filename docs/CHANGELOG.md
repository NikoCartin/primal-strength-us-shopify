# Changelog

## 1.7.2, October 29, 2026

Added `Accessibility` to the live `ux-footer-menu` under Legal, immediately after CCPA Privacy Policy, linked to `/pages/accessibility-statement`. Desktop and 390px mobile verification confirmed the footer link renders, is keyboard focusable, and opens the published statement page. The separate mobile footer-width remediation remains unpublished.

## 1.7.1, October 29, 2026

Published the Accessibility Statement page at /pages/accessibility-statement with `templates/page.accessibility-statement.json` and `sections/main-accessibility-statement.liquid`. Live axe-core 4.10.3 QA: 0 violations on desktop and mobile. The footer Legal link was added in 1.7.2.

## 1.7.0, October 29, 2026

**Author:** Nicolas Cartin Reyes, Lead Developer

Released the ADA / WCAG 2.2 AA remediation to live theme `142304510051`. The scoped push contained 10 approved files, followed by `assets/component-image-with-text.css` to raise the mobile Contact phone and email link targets to at least 24px. A full backup theme was created first, and every file was pulled back and matched the approved source.

Adds the accessibility options launcher and fixes the HappyFox iframe title, nested interactive controls (video poster, Contact FAQ), sort dropdown roles, compare-at price contrast, and gallery and Contact target sizes. Live axe-core 4.10.3 QA: 0 violations on 18 of 18 route and viewport checks. The accessibility statement page and footer link remain unpublished. Third-party identifiers in `layout/theme.liquid` are redacted in this repository.

## 1.6.0, October 27, 2026

**Author:** Nicolas Cartin Reyes, Lead Developer

Added a dedicated GSA Government Purchasing landing page for the Primal Strength US storefront. The release contains `sections/gsa-government-purchasing.liquid` and `templates/page.gsa.json`, plus technical architecture and deployment documentation.

The section renders configurable contract details, three ordered purchase steps, GSA Advantage contract terms, and contact actions. The associated Shopify page is published at `/pages/gsa` with an empty page body and the `gsa` template suffix. The page was intentionally not added to storefront navigation.

The production push was limited to the two approved theme files using `--only`, `--nodelete`, and `--allow-live`. Desktop and mobile QA confirmed the approved public content, external-link attributes, email and phone actions, responsive two-column desktop behavior, and single-column mobile behavior. No unrelated theme files or navigation settings were changed.

## 1.5.0, September 29, 2026

**Author:** Nicolas Cartin Reyes, Lead Developer

Added a Quote-template-only visual divider between the variant selector and the Request a Quote panel. The selector receives the scoped `variant-selector-labels--quote` class only when `product.template_suffix == 'quote'`; `assets/main-product.css` applies the existing border and spacing tokens without changing default product pages.

The change was deployed with `--nodelete` to development theme `160888946787` and live theme `142304510051`. Because the development theme had drifted from live, its existing Quote-only `snippets/buy-button.liquid` guard was also synchronized there for accurate QA; live already contained that guard and was not replaced. QA used the active, multivariant **V2 Modular Half Rack** product. The selector changed variants, the Request a Quote modal opened, the product-details panel contained no add-to-cart form, and the layout was checked at desktop and mobile widths. No product data, template JSON, or unrelated live theme files were changed.

## 1.4.0, September 29, 2026

**Author:** Nicolas Cartin Reyes, Lead Developer

Refreshed the repository README with the most relevant production developments, including dynamic Product Video support for Default and Quote templates, quote-only commerce protection, collection merchandising priority, inventory and Add to Cart reliability, financing integrations, and split Echelon/PRIMAL logo navigation. The README now distinguishes theme-code changes from Shopify Admin configuration changes.

## 1.3.0, September 29, 2026

**Author:** Nicolas Cartin Reyes, Lead Developer

Added the same Product Video block to `templates/product.quote.json` in development theme `160888946787` and live theme `142304510051`. The Quote template reuses the existing `main-product` renderer and the same two product metafields. The block is appended after the existing quote and accordion content, so the quote request flow remains unchanged.

The live change was limited to the Quote template file and was deployed with `--nodelete`. Post-release verification confirmed that the live file matched the approved package and that no unrelated theme files were removed or changed.

## 1.2.0, September 29, 2026

**Author:** Nicolas Cartin Reyes, Lead Developer

Released the Product Video block to the live Primal Strength US theme `142304510051` after restoring the complete pre-release theme snapshot and verifying the final state. The live release contained only `snippets/product-video.liquid`, `sections/main-product.liquid`, and `templates/product.json`.

The deployment used `--nodelete`. A complete post-release pull confirmed that all approved base implementation files matched the deployment package and that no unrelated live files were missing or changed. The product-content workflow is now documented: saving a product video metafield updates the PDP without another theme deployment.

## 1.1.0, September 29, 2026

**Author:** Nicolas Cartin Reyes, Lead Developer

Added a reusable Product Video block for the default Primal Strength US product template in development theme `160888946787`. The block reads the product metafields `custom.pdp_product_video` and `custom.pdp_product_video_embed`, supports Shopify-hosted video files plus YouTube and Vimeo URLs, gives hosted video precedence, and hides itself when no valid media is assigned.

Added the technical architecture document, product setup SOP, development and QA release SOP, and the Liquid renderer reference. At this stage, the live theme `142304510051` had not yet received the Product Video implementation.

## 1.0.0, September 23, 2026

**Author:** Nicolas Cartin Reyes, Lead Developer

Added the split-link implementation for the combined Echelon and PRIMAL header logo on Primal Strength US. The visible inline SVG remains unchanged. The Echelon region opens `https://echelonfit.com/`, and the PRIMAL region remains on the Primal Strength US homepage through Shopify's root route.

The release includes the complete `sections/header.liquid` source, the technical architecture document, the draft-theme testing and deployment SOP, and the PDF SOP reference. The implementation is scoped to one Shopify section and does not modify other storefront behavior.
