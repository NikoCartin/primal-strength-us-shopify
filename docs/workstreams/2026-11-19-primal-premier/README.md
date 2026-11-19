# Primal Strength US: Development Summary

**Reporting date:** November 19, 2026  
**Lead Developer:** Nicolas Cartin Reyes  
**Scope:** Development completed to date, emphasizing cardio and Premier memberships, with a historical appendix.  
**Document status:** Completed development record; commercial launch remains gated.

## 1. Executive Summary

Primal Strength US has a prepared five-model Echelon cardio catalog, model-specific product information, responsive private previews, reconciled inventory, financing-information support, and a separate Primal Premier Membership app. Membership development includes three digital plans, an equipment-linked selector, automatic benefit functions, DEV cart safeguards, and a released server-side cart and checkout validation function.

These are distinct milestones, not a completed commercial launch. Approved cardio presentation support was deployed to the existing live theme, but equipment remains unpublished without its production cardio template assigned. Membership selector and cart protections remain exclusively in private DEV. All eight products, five equipment products and three membership plans, remain Draft and unpublished. No order, payment, financing application or customer-data entry occurred during this implementation and verification work.

First-month and annual shipping discounts are active and configuration-verified. Their combined behavior in an actual equipment-plus-membership checkout has not been demonstrated. Premier fulfillment, recurring billing, renewals and completed checkout are not verified. Commercial readiness requires resolved membership operations, fulfillment, authorized publication and controlled purchase-path testing.

**Checkout protection is now active.** Premier Membership Required was registered under the independent Primal app and enabled with blocking on runtime execution failure, as explicitly authorized. A fresh administrative read confirmed the rule ACTIVE, failure blocking true, both automatic discounts ACTIVE and all eight products still Draft. This setting may also stop ordinary-product checkout if the Function suffers a technical failure. No product publication, customer-data entry or purchase was required to register it. The registration and failure policy follow Shopify's documented validation controls. [1] [2] [3]

## 2. Cardio Catalog, Product Pages and Release Support

The catalog contains the Connect EX-Pro Commercial Bike, Connect EX-5s-22 Bike, Stride-9s Pro Commercial Treadmill, Stride-8s Smart Treadmill and Row-s Smart Rowing Machine. Existing records were reused rather than duplicated. November 19 verification confirmed equipment prices against corresponding official variants, resolving the earlier Stride-8s and Row-s price discrepancy.

Product-data work saved and verified 59 model-specific specification records, short descriptions, training-style and training-space indicators, and official manual links. The private layout renders these fields while omitting empty optional panels. Conflicting capacity ratings, uncertain dimensions and unverified freight weights were withheld rather than inferred.

Previews were refined with native gallery navigation, a white background, black selected-thumbnail treatment, familiar purchase-button styling and normal stock messaging. Review labels, numbered gallery controls and inventory commentary were removed. Private Draft purchase guards remain.

ChargeAfter information initially failed to appear because the inclusion condition excluded Echelon-branded equipment. This was corrected and informational rendering checked across all five models, including a verified Learn How interaction. This establishes information support, not gateway activation, financing eligibility or a transaction.

Seven scoped cardio-support files were deployed to the existing live theme and verified by readback, with backups and unrelated behavior preserved. The release includes the cardio template, specifications section, gallery treatment, financing support and optional stock messaging without a 24-hour dispatch promise. Public homepage and representative existing-product markup checks passed.

Black Friday Specials was verified as one manual collection containing exactly the five existing cardio products. It remains unpublished without sales-channel availability. Collection preparation did not create products or alter discount tiers.

### Inventory and fulfillment boundaries

The supplied inventory snapshot was reconciled against 949 Shopify variants. Among 161 matched source SKUs, five were updated and verified, 139 already matched, and 17 duplicate-SKU cases were held. Missing records were not treated as zero. The incomplete export omitted catalog categories; this was a bounded reconciliation, not a physical-stock audit or automatic synchronization service.

All five cardio stock previews passed desktop/mobile checks without a six-week message or invented dispatch promise. Status, equipment pricing and quote-template safeguards were preserved.

Native product media attachment awaits authorization for the proposed upload method. All five shipping-weight fields remain zero because certified packed weights are unavailable. Packaging, shipping profiles, fulfillment routing and the Stride-9s rack/screen handling caveat require confirmation before publication and rate testing.

## 3. Premier Membership Implementation

Three digital plans were created in Primal and linked consistently to all five equipment products:

- **30-Days / Monthly:** $39.99 base price, with First Month Free on exactly one eligible Monthly unit per qualifying cart.
- **1-Year Access:** $399.99, with configured Free Shipping.
- **2-Year Access:** $699.99, with configured Free Shipping.

Monthly remains $39.99, not zero. Its function discounts one eligible membership unit by 100% and preserves equipment pricing; additional Monthly units are not automatically free. Annual and two-year shipping eligibility is independent of equipment discounts. Monthly is excluded from that membership shipping function. Primal's global free-shipping policy and rates were unchanged, so Monthly carts may still show zero shipping under the general policy.

Plans have official imagery, digital non-shipping variants, no artificial compare-at pricing and no selling-plan groups. Catalog creation and benefit configuration do not establish subscription billing or access activation.

The selector provides native radio controls, full-card touch targets, keyboard selection and dynamic pricing. It preserves ChargeAfter and prepares equipment plus the selected plan in one request with matched quantities. A private preview catalog snapshot handles Draft reference limitations; it does not authorize sales.

### Independent app and benefits

The separate Primal Premier Membership app was installed with custom single-store distribution, independent Primal configuration and an administrative home. Authorized source reuse informed the adaptation; the source Echelon app was not modified. The final release includes three Shopify Functions: first-month discount, annual shipping discount and required-membership validation.

The first two automatic discounts are active with configuration readback. Black Friday Cyber Monday, abbreviated BFCM, combination approval subsequently changed only product-discount combination permission on both existing Black Friday discounts. The 10% tier at a $500 minimum and 15% tier at a $1,500 minimum were preserved, alongside dates, scope and other combinations. The permission change is storewide; combined application with Draft equipment and memberships remains untested. [4]

The source flow's additional two-year benefit is apparel credit, not an assumed physical gift. Its Primal mapping, value, issuance and fulfillment are unconfirmed. No arbitrary item, credit amount or customer-facing promise was added.

## 4. Purchase Safeguards and Verified Quality

The DEV product-page action requires a valid, initialized selector. Missing assets, missing references, invalid data, quote-only states or Draft preview conditions block purchasing rather than submit equipment alone. Duplicate submission is prevented; rendering failure after a successful addition does not trigger another purchase request.

DEV cart behavior protects equipment-plan relationships. Associated memberships cannot be removed or edited independently. Equipment removal removes its related group together. Ambiguous quantity changes involving multiple plan choices are blocked. Updates use current cart data, exact line references and result verification; uncertain responses do not trigger repeat mutations. Ordinary cart handling, warranty callbacks, quote restrictions, the footer and ChargeAfter were preserved. Membership cart changes were not deployed to live.

Released server-side validation checks eligible equipment, allowed membership products and variants, references, associations and quantities. It rejects incomplete bundles, orphan memberships and false relationships while allowing empty carts, unrelated Primal products and valid grouped removals. The Checkout Rule is now registered and active; its full eligible equipment-plus-plan storefront and checkout matrix still requires authorized testing.

Latest integrated evidence records:

- **100 of 100 integrated administrative checks**, including 72 validation-controller scenarios, passed.
- **215 of 215 selector checks** and **42 of 42 cart checks** passed.
- **479 of 479 Rust validation scenarios** and **479 of 479 official-build WASM scenarios** passed using Shopify's official runner, not a JavaScript substitute.
- **10 of 10 desktop/mobile product-page checks** passed across five models.
- **2 of 2 real missing-JavaScript or missing-asset checks** passed with purchasing blocked and no purchase requests.
- **13 of 13 DEV file readback comparisons** matched the tested implementation.
- Ordinary anonymous cart addition, quantity adjustment and removal passed in DEV and live baseline, with financing information preserved. A fresh live-cart regression after rule activation also passed all three actions and retained ChargeAfter; the anonymous cart was cleared and checkout was not opened.

Local scenarios and synthetic equipment-variant fixtures verify logic, not purchases. Preview isolation of a blocking external script was a test measure, not a production change. Normal carts showed preexisting 15 px mobile document overflow in both live and DEV. Functional success does not mean this visual issue passed responsive QA.

## 5. Launch Gates and Publication Handoff

Before sales, designate the membership-operations owner and system, and document access delivery, Monthly trial handling, billing, cancellation, refunds and intended renewal. The Checkout Rule activation gate has been completed. Resolve apparel-credit operations before advertising that benefit.

Obtain publication and media-upload authorization, certified shipping data and fulfillment mappings. Conduct eligible, authorized controlled tests of all three equipment-plan combinations, multi-unit behavior, grouped removal, discounts, shipping and checkout progression. Drafts must not be published solely to bypass testing limitations. Payment completion, purchase-event delivery, recurring billing and financing-gateway activation remain separate verification gates.

This public-safe development record is prepared for the [Primal GitHub repository](https://github.com/NikoCartin/primal-strength-us-shopify) and the existing [project task tracker](https://docs.google.com/spreadsheets/d/1G6y-j6zifFepKyy4PQ7irN9DoKcS_Nxto9_xKoEAyPU/edit?gid=493767023). GitHub receives documentation only because the repository is public. Private derivative app source, configuration identifiers, signed preview links, credentials, operational identities and customer data are excluded. Private source and rollback evidence remain separate.

## Appendix: Previously Documented Primal Improvements

**Catalog and pricing.** Earlier work verified 101 Commercial-template corrections and 44 May-price-list updates. The November 17 audit reviewed 944 variants and applied 12 price/compare-at corrections across 11 products, with readback and unrelated fields preserved. It identified 404 assigned SKUs absent from the supplied PDF, including 137 zero-priced SKUs needing authoritative prices. All 132 active zero-priced variants in that audit were quote-only. Missing prices and a component-versus-bundle identity exception were not invented or overwritten.

**Cart and CRO.** Published improvements include a 48 px sticky mobile checkout action, native subtotal updates, two additional quote-template protections, variant-aware availability, removal of duplicate consent UI and removal of unsolicited theme-triggered chat opening. The November 18 popup release moved View my cart ahead of recommendations and verified visibility, scrolling, navigation, closing and focus return at four mobile sizes plus desktop. Image sharpness remains a separate follow-up. Forms/CTA and Try Your Luck improvements have a verified unpublished release candidate, not a documented live release. Lead delivery and analytics reconciliation remain unverified.

**ChargeAfter.** Live cart work added informational financing based on discounted merchandise totals, verified Learn How, repositioned the widget below checkout actions and removed unnecessary mobile spacing. It preserved quote restrictions without changing gateways or submitting applications. Split Payment remains disabled by merchant confirmation.

**Accessibility, GSA and reusable features.** October 29 releases included keyboard and semantic improvements, touch-target corrections, the published Accessibility Statement and verified footer link. The initial scoped live scan completed 18 route/viewport checks with zero automated violations; later reports retain separate global findings. This is not legal certification. GSA government purchasing was published with configurable content, disclaimer, purchase steps and verified responsive links, without added navigation. Earlier features include reusable product-video fields, independent brand-logo links and availability/purchase safeguards.

**BFCM, taxes and shipping.** The November 11 campaign release and corrected shopping links were deployment-verified; pre-release desktop/mobile links passed, while fresh post-release visual checks remained incomplete. Historical tax work corrected the US market to separate tax and passed a non-purchasing destination estimate. Draft-order, registration and historical-tax reconciliation were tracked separately; this membership release does not claim a fresh completion audit of those records. ShipDuo installation was confirmed, but account-specific rates, packaging, carrier mapping and draft-quote behavior were not verified. Historical records are not a new audit or current commercial-readiness certification.

## References

- [Shopify cart and checkout validation][1]
- [Validation registration and failure blocking][2]
- [Validation status and updates][3]
- [Automatic discount combination updates][4]

[1]: https://shopify.dev/docs/api/functions/latest/cart-and-checkout-validation "Shopify cart and checkout validation"
[2]: https://shopify.dev/docs/api/admin-graphql/latest/mutations/validationCreate "Validation registration and failure blocking"
[3]: https://shopify.dev/docs/api/admin-graphql/latest/mutations/validationUpdate "Validation status and updates"
[4]: https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountAutomaticBasicUpdate "Automatic discount combination updates"
