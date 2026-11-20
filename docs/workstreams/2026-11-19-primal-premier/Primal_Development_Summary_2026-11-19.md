# Primal Strength US: Complete Development and Live Release Summary

**Current retail price correction, November 20:** Harrison's full USA file is the retail source. Stride-8s is $1,999.99 (compare-at $2,249.99), EX-5s-22 $999.99 (compare-at $1,299.99), and Row-s $799.99 (compare-at $1,299.99). The older Stride-8s $2,195.99 example is historical. EX-Pro and Stride-9s Pro have no verified retail BF pair in that file; no dealer pricing or invented sale label is used. Savings-message presentation is DEV only, awaiting direction on blocked mobile/cart QA. Missing public sale/compare-at prices were requested from Harrison, John and Lou. See the [current pricing correction](Primal_Black_Friday_Pricing_and_Included_Savings_2026-11-20.md).

**Reporting date:** November 19, 2026  
**Lead developer:** Nicolas Cartin Reyes  
**Current status:** Five Echelon cardio products, three Premier plans, tested cart fixes and the approved pre-cart repair are deployed live. Real purchases are enabled. This record does not claim a payment, order, subscription renewal or access activation was tested.

**November 20 correction:** The all-product Black Friday tier scope and stacked-discount observations in this November 19 record are historical. The five Echelon cardio products and three Premier plans are now excluded from the additional Primal tiers; only eligible product subtotals qualify. Item prices and Premier benefits are preserved. Read the [verified correction and evidence](Black_Friday_Echelon_Exclusion_Addendum_2026-11-20.md) for current policy. The complete PDF places that correction before this historical record.

## 1. Executive release summary

The approved release moved the five cardio products from UNLISTED to ACTIVE/listed and retained the three ACTIVE digital Premier plans. Each equipment product now has two approved native images and the live cardio template. The homepage has a dedicated Echelon Black Friday row, while existing promotion percentages, minimums, prices and inventory were preserved.

The independent Primal Premier Membership app remains installed with three Functions. The released `primal-premier-live-20261119` version removes only the temporary test-order completion block. Required equipment-plus-membership relationships and blocking on technical Function failure remain enabled. No Echelon app or source-store deployment was changed.

The public purchase matrix covers five equipment models times three plans. It verifies two cart lines, the Monthly free benefit, mobile cart action visibility and checkout entry. Independent membership removal is rejected for all three plans. Annual and two-year checkout tests at a public Missouri City, Texas address show Shipping FREE and the named Premier shipping discount alongside Black Friday. No payment or order was submitted.

## 2. Listed catalog and approved pricing

| Product | SKU | Base price | Stock snapshot | Status |
| --- | --- | ---: | ---: | --- |
| [Echelon Connect EX-Pro Commercial Bike](https://us.primalstrength.com/products/echelon-connect-ex-pro) | ECH01-EX-PRO-24 | $4,599.99 | 15 | ACTIVE, listed |
| [Echelon Connect EX-5s-22 Bike](https://us.primalstrength.com/products/echelon-connect-ex-5s-22) | ECH01-EX5s | $999.99 | 98 | ACTIVE, listed |
| [Echelon Stride-9s Pro Commercial Treadmill](https://us.primalstrength.com/products/echelon-stride-9s-pro) | JUSTSTRIDE-9s | $6,399.99 | 50 | ACTIVE, listed |
| [Echelon Stride-8s Smart Treadmill](https://us.primalstrength.com/products/echelon-stride-8s) | ECH-STRIDE-8s-22 | $2,195.99 | 347 | ACTIVE, listed |
| [Echelon Row-s Smart Rowing Machine](https://us.primalstrength.com/products/echelon-row-s) | ECH-ROWs | $799.99 | 552 | ACTIVE, listed |

The stock values above are the verified release snapshot, not a future availability promise. Native image count is two per equipment product. All five are available through Online Store and linked in the live campaign row. The existing Home Cardio association is retained.

| Digital plan | Base price | Confirmed rule |
| --- | ---: | --- |
| 30-Days / Monthly | $39.99 | Exactly one qualifying Monthly unit receives First Month Free |
| 1-Year Access | $399.99 | Eligible Premier free shipping |
| 2-Year Access | $699.99 | Eligible Premier free shipping |

Plans remain digital/non-shipping and do not have selling-plan groups. Customer-facing benefit text is populated without promises of automatic renewal, activation or unconfirmed apparel credit.

## 3. Dynamic PDP and membership behavior

The reusable cardio template renders equipment information, approved white-background gallery presentation, specifications/manual links and the selector using the equipment's ordered `custom.pdp_individual_product` references. Optional sections omit missing data. Native radios, full-card touch targets, keyboard selection and selected-plan status are retained. ChargeAfter information and quote-only restrictions were preserved.

The selector submits equipment and the chosen plan in one controlled request with matched quantities and private association properties. An uninitialized/missing selector, unavailable plan, invalid data or quote-only state blocks the purchase rather than falling back to equipment-only submission. Duplicate/uncertain-request handling does not blindly repeat an addition.

## 4. Live cart and pre-cart fixes

The full cart now uses compact approximately 72 px Premier media, bounded equipment thumbnails, wrapping text and responsive layout. Associated plan quantity is read-only and independent removal is unavailable. Removing equipment removes its related group. Clear your cart uses confirmation and result verification, preserves cancellation, and avoids pretending a failed clear succeeded. On mobile there is one visible sticky checkout action on the first screen, not duplicate desktop/mobile actions.

The approved pre-cart release uses a crisp 70 px native equipment thumbnail with 70/140/210 px responsive sources and containment. It replaces the two competing mobile scroll areas with one content region; close and View my cart stay outside it. View my cart remains reachable immediately. The final stylesheet and once-per-page inline vertical-gesture guard contain background scrolling while the mobile overlay is active, including when its content is too short to scroll. Horizontal swipes, taps and multi-touch zoom remain outside that vertical guard. Desktop visual order is retained.

**Preview-session issue reproduced and corrected:** Shopify retained the older DEV theme even on a URL without preview parameters. Its default cardio route lacked the selector. The DEV default route was brought into parity and the exact EX-5s-22 URL was verified in My Browser with all three membership cards. This was not evidence that the fresh-session live template lacked memberships. The SOP explains preview cookies and actual-theme verification.

## 5. Functions, discounts and safe commercial enablement

First Month Free discounts one eligible Monthly membership by 100% when paired with qualifying equipment, without zeroing the equipment. Monthly's base price remains $39.99. Additional Monthly units are not automatically free. Premier Free Shipping targets the local 1-Year and 2-Year plans; it does not turn Monthly into an annual-shipping-benefit plan.

Black Friday remains 10% at $500 and 15% at $1,500. The approved combinations permit Premier benefits alongside the existing campaign. The five equipment records were already within the all-product discount scope; this release made them listed/discoverable and added the specific campaign row. No percentages, minimums, dates, prices, stocks or shipping rate tables were changed in this release.

Premier Membership Required remains active with technical-failure blocking, as authorized. Invalid/missing membership, orphan plans, false associations and inconsistent quantities are rejected; empty/unrelated carts and valid grouped removal retain their intended behavior. Function failure can also block ordinary checkout, so the failure policy must be preserved and monitored rather than described as risk-free.

## 6. Final observed verification

| Model | Plan | Cart | Membership | Mobile cart | Checkout entry |
| --- | --- | --- | --- | --- | --- |
| Connect EX-Pro Bike | Monthly | Two matched lines | FREE | Pass | Pass |
| Connect EX-Pro Bike | 1-Year | Two matched lines | Paid plan | Pass | Pass |
| Connect EX-Pro Bike | 2-Year | Two matched lines | Paid plan | Pass | Pass |
| Connect EX-5s-22 Bike | Monthly | Two matched lines | FREE | Pass | Pass |
| Connect EX-5s-22 Bike | 1-Year | Two matched lines | Paid plan | Pass | Pass |
| Connect EX-5s-22 Bike | 2-Year | Two matched lines | Paid plan | Pass | Pass (targeted recheck) |
| Stride-9s Pro Treadmill | Monthly | Two matched lines | FREE | Pass | Pass |
| Stride-9s Pro Treadmill | 1-Year | Two matched lines | Paid plan | Pass | Pass |
| Stride-9s Pro Treadmill | 2-Year | Two matched lines | Paid plan | Pass | Pass |
| Stride-8s Treadmill | Monthly | Two matched lines | FREE | Pass | Pass |
| Stride-8s Treadmill | 1-Year | Two matched lines | Paid plan | Pass | Pass |
| Stride-8s Treadmill | 2-Year | Two matched lines | Paid plan | Pass | Pass |
| Row-s Rowing Machine | Monthly | Two matched lines | FREE | Pass | Pass |
| Row-s Rowing Machine | 1-Year | Two matched lines | Paid plan | Pass | Pass |
| Row-s Rowing Machine | 2-Year | Two matched lines | Paid plan | Pass | Pass |

**Public flow result: 15 of 15 combinations passed the scoped purchase/navigation checks.** One EX-5s-22 two-year visibility timeout was caused by the delayed first-visit Shopify consent banner; resolving the normal consent choice in a targeted recheck passed; the original result is retained. The original harness also used an incorrect lock selector and initially a hidden desktop checkout selector on mobile. Those diagnostic flags are retained, the actual mobile selector and native transition were corrected, and membership locking was independently verified with the real `data-primal-cart-state="locked"` marker and server rejection. These are not payment-completion tests.

**Independent protections:** Three of three plan-removal checks passed, including read-only/no-remove UI and rejection of direct removal with two valid lines remaining. All five public PDPs rendered three available plans and passed the measured mobile-width check. The homepage check found all five product links in the Echelon campaign row.

**Popup release:** Five of five DEV and five of five live phone/desktop checks passed at 320 x 568, 375 x 667, 390 x 844, 430 x 932 and 1440 x 1000. Thumbnail load/aspect, one mobile scroll region, immediate cart action, bounded dialog, close and background-scroll containment were checked. Real Safari/embedded-iPhone interaction remains a separate device check, not inferred from Chromium.

**Readback and regressions:** The initial 37 live theme files matched the scoped staging contents; JSON comparisons ignore only Shopify's generated formatting/header. The three-file popup release has its own exact readback. Function guard removal passed 577 of 577 Rust tests, a release WASM build, and 36 of 36 representative official-runner fixtures. Earlier integrated evidence remains recorded: 100 administrative tests, 215 selector tests, 42 cart tests, 479 original validation fixtures/official-build runtime scenarios, ten responsive PDP checks and two missing-JavaScript/asset fail-closed tests. Counts describe their specific suites, not one combined external checkout certification.

## 7. Address-based shipping findings

The live annual and two-year EX-5s-22 checkouts displayed Shipping FREE and PREMIER MEMBERSHIP FREE SHIPPING alongside the Black Friday discount. Tests used synthetic contact details and a verified public Missouri City, Texas address. No customer identity, payment data or submitted order is included in this report. The final Monthly shipping-rate label was not established, so that control is not a passed shipping test. These observations do not certify every destination, quantity, equipment model, carrier rate, tax calculation or freight profile.

## 8. Operational follow-ups, kept explicitly open

The user's launch authorization enabled real purchases; it did not create Premier provisioning or renewal services. Confirm the access-delivery owner/system, intended trial-to-paid handling, recurring billing/renewal, cancellation/refund rules and post-purchase fulfillment. No third gift or apparel-credit amount has been invented for the two-year plan.

Certified packed weights, packaging/dimensions, multi-carton/pallet data, freight profiles, negotiated carrier integration and destination acceptance remain logistics work. Payment processing, lender/financing transactions, purchase-event delivery and measured conversion impact remain untested. Broader quantities/mixed carts, every destination and real iPhone Safari/embedded browser gestures require further acceptance beyond this scoped release.

## 9. Complete historical workstream coverage

This section preserves the earlier development record, including topics outside today's release. Historical audit numbers belong to their dated source snapshots and are not a new whole-store certification.

**Catalog, pricing and quote-only controls.** Consumer pricing takes priority for overlapping Commercial/Consumer SKUs; wholesale pricing must not appear on the storefront. Earlier work verified 101 Commercial-template corrections and 44 May-price-list updates. The November 17 audit reviewed 944 variants, made 12 supported price/compare-at corrections across 11 products, and verified 475 matched variants. Its separate missing-pricing list contains 404 assigned SKUs absent from the provided PDF, including 137 zero-priced SKUs. All 132 active zero-priced variants in that audit were quote-only. Missing-price and component/bundle identity exceptions remain follow-ups rather than invented values. Quote templates must remain non-purchasable and must not display a price.

**Units, SKUs and inventory.** Historical kg-to-lb presentation work covered variant labels, product titles and descriptions while preserving SKU codes; its source hierarchy, conversion method and follow-up audits belong to the original unit-conversion SOP. The November 19 inventory reconciliation compared the supplied source with 949 Shopify variants: 161 matched source SKUs included five updated/verified records, 139 already matching and 17 duplicate-SKU cases held. Missing records were not treated as zero. Suppression of the six-week delivery message for in-stock products was implemented. None of these data operations is a physical-stock audit, location confirmation, automated sync or certification of packed freight weights.

**CRO, forms and analytics.** Earlier live work included variant-aware availability, quote safeguards, a 48 px mobile checkout action, subtotal updates, duplicate-consent removal and removal of unsolicited theme-triggered chat. The November 18 pre-cart release prioritized View my cart over recommendations and verified navigation, close and focus return. The current release adds the thumbnail/scroll fix and full-cart improvements. Formspree support, sales and quote-form work and Alia/Try Your Luck candidates remain recorded separately; a candidate or simulated test does not prove live lead/reward delivery. Meta browser/server pixel mapping, CAPI deduplication, purchase-event delivery and measured conversion improvement remain separate verification topics.

**Consumer and commercial financing.** ChargeAfter is the consumer informational financing flow; Ascentium is the approved commercial route. Recorded ChargeAfter work includes black Primal branding, appropriate text/link styling, eligible Echelon PDP inclusion, cart placement below checkout actions, discounted-subtotal presentation and Learn How interaction. Split Payment remains disabled. Information-widget rendering does not establish lender eligibility, gateway activation, a completed application or payment. Klarna account-level enablement did not establish US/USD checkout availability.

**Accessibility, GSA and reusable features.** October releases included semantic/keyboard and touch-target improvements, the Accessibility Statement and its footer link, with 18 scoped automated route/viewport checks showing no violations at that time. The fresh live cart diagnostic again showed the Accessibility link. Neither result is legal certification or exhaustive screen-reader/Safari acceptance. The GSA page was published with approved purchasing steps, disclaimer and responsive links, without an added menu link. Product eligibility and contract-holder context remain business matters. Reusable product-video fields, independent brand-logo links and optional sections remain part of the development record.

**Taxes, draft orders and historical invoices.** Earlier work corrected the US market to separate tax and used a non-purchasing Missouri City destination estimate. Product taxability, tax-exemption remediation, draft recalculation, registrations and historical included-tax reconciliation were documented in their dedicated records. Current membership QA does not claim a fresh full tax/registration or historical-order audit. No sensitive registration or customer data is included here.

**Black Friday and promotions.** The November 11 banner/homepage and shopping-link releases were verified by deployment/readback. November 19 preserved the approved 10% at $500 and 15% at $1,500 tiers, enabled the approved combination with Premier benefits, listed the five Echelon cardio products and added their dedicated homepage row. John's separate manual Black Friday Specials collection remains a distinct unpublished collection; the live campaign row and active all-product automatic discounts do not depend on its publication.

**Shipping, ShipDuo and logistics.** ShipDuo installation was confirmed, but negotiated FedEx account rates, packaging import/synchronization, multi-carton/pallet mapping, destination surcharges, mixed parcel/freight carts, the single 10% buffer, fallback behavior and the agreed 3,000 lb quote boundary require their own implementation/acceptance records. All five cardio shipping-weight fields still need certified packed weights; published product weights in specifications are not certified freight weights. No shipping policy, rate table or operational location data was changed by this release.

**Communications and monitoring.** Findings, pricing/missing-SKU handoffs, financing and freight coordination, and mobile cart before/after communications were documented in their dedicated workspaces. Existing reply monitoring remains separate from this release; no automatic follow-up email, customer message or self-email was sent as part of today's deployment.

## 10. Documentation and provenance

This summary supersedes the earlier all-Draft, DEV-only and test-completion-block status statements. The historical baseline and original receipts remain preserved. Twelve workstream reconciliations covered cardio, Premier app, purchase QA, responsive cart, pricing/quote, units/inventory, financing, taxes, CRO/forms/analytics, BFCM, accessibility/GSA and shipping/ShipDuo. New live release, native media, Black Friday merchandising, clear-cart/one-checkout, actual shipping observations, pre-cart approval and preview-route correction are included here.

The public GitHub workstream contains reviewed documentation, this summary/PDF, SOP, screenshots and sanitized receipts only. Private derivative app code/configuration, credentials, signed installation links, raw checkout exports, customer/warehouse identifiers and private rollback archives are excluded. The existing Google Drive Pipeline uses its established ten-column layout, preserves history and records live versus operationally pending states. Its existing summary PDF is updated in place.

### Useful links

- [Live EX-5s-22 PDP](https://us.primalstrength.com/products/echelon-connect-ex-5s-22)
- [Live cart](https://us.primalstrength.com/cart)
- [DEV interactive preview](https://us.primalstrength.com/products/echelon-connect-ex-5s-22?preview_theme_id=189874339939&view=echelon-cardio-test)
- [Primal GitHub](https://github.com/NikoCartin/primal-strength-us-shopify)
- [Existing project tracker](https://docs.google.com/spreadsheets/d/1G6y-j6zifFepKyy4PQ7irN9DoKcS_Nxto9_xKoEAyPU/edit?gid=493767023)
- [Shopify cart/checkout validation](https://shopify.dev/docs/api/functions/latest/cart-and-checkout-validation)
- [Automatic discount combinations](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBasicUpdate)
