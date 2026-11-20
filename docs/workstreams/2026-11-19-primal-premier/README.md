# Primal Premier and Cardio: Current Record and Release History

> **CURRENT NOTICE — November 20, 2026:** The user-selected official Echelon comparisons supersede temporary sheet pricing. LIVE USD sale / compare-at / included savings: **Stride-8s \$2,195.99 / \$2,999.99 / \$804; EX-5s-22 BLACK \$999.99 / \$1,699.99 / \$700; Row-s \$799.99 / \$1,799.99 / \$1,000.** Harrison's latest email resolves commercial confirmation: EX-Pro \$4,599.99 and Stride-9s Pro \$6,399.99 remain unchanged, compare-at null, no Black Friday label. Read the [current official-pricing and shipping addendum](Primal_Official_Echelon_Pricing_and_Stride8_Shipping_2026-11-20.md), not the earlier sheet correction or PDFs, for present status.
>
> **BACKEND RELEASE:** `primal-stride8-any-plan-shipping-20261120` (LIVE; released 2026-11-20 21:09:51 UTC). The minimal shipping patch is LIVE in the ORIGINAL app as the ACTIVE version above; fresh checkout-rate acceptance remains pending.

**Lead developer:** Nicolas Cartin Reyes. Five equipment products and three Premier plans remain ACTIVE/listed, with real purchases enabled and required pairing/technical-failure blocking preserved. All eight products remain excluded from the additional Primal 10%/15% tiers and threshold subtotal; the prior hidden collection exclusion is LIVE and unchanged.

Nine scoped theme files are LIVE on `142304510051` and in parity with DEV `189874339939`; fresh live pull byte-matched. Existing 110 offline checks and 31 targeted offer checks passed. My Browser desktop visual review passed for all three sale PDPs on live, not preview; the saved two-item user cart was untouched.

Stride-8s alone shows “Shipping included with any Premier plan (contiguous US)” and Monthly “First Month Free + Free Shipping.” Other Monthly models show “First Month Free” only; annual/two-year benefits remain preserved. The [shipping policy](SHIPPING_POLICY_2026-11-20.md) documents the Monthly all-Stride delivery-group boundary, unchanged annual all-groups behavior and isolated regression results: shipping 108 Rust/108 official WASM, unchanged validator 577, First Month Free 30 and app-home 100.

The first anonymous 390 × 844 attempt loaded the correct LIVE PDP but did not populate its cart. A post-release response-aware native test then passed Stride-8s + 30-Day add-to-cart (HTTP 200): equipment \$2,195.99, Monthly first month \$0, exactly one immediately visible mobile checkout action and no horizontal PDP/cart overflow. The checkout click timed out; testing stopped without a retry, shipping-rate observation, payment or order. This is a mobile PDP/cart pass for that pair, not a checkout/shipping pass. Remaining multi-plan mobile/checkout acceptance, Stride-8s all-three-plan paid-rate checkout checks and Primal-only/mixed-tier controls remain pending. Earlier 15-cart/three EX-5s-22 checkout/two annual-shipping results are historical only. Paid purchase, recurring billing and provisioning remain untested; optional-membership PDP description wording is a follow-up, not a product-body change.

## Current documentation

- [Official pricing and Stride-8s shipping addendum](Primal_Official_Echelon_Pricing_and_Stride8_Shipping_2026-11-20.md)
- [Shipping policy, mixed groups and QA limits](SHIPPING_POLICY_2026-11-20.md)
- [Release and rollback SOP v1.3](SOP_Premier_Cardio_Cart_Release.md)
- [Current official addendum PDF, 3 pages](Primal_Official_Echelon_Pricing_and_Stride8_Shipping_2026-11-20.pdf)
- [Current consolidated PDF, 27 pages, existing filename retained](Primal_Development_Summary_2026-11-19.pdf)
- [Sanitized current release and QA evidence](official-pricing-shipping-evidence/current-release-summary.json)

## Preserved historical records

- [Complete development and live release summary](Primal_Complete_Development_Live_Release_2026-11-19.md)
- [Earlier development summary](Primal_Development_Summary_2026-11-19.md)
- [Tier-exclusion addendum](Black_Friday_Echelon_Exclusion_Addendum_2026-11-20.md)
- [Superseded sheet-pricing correction](Primal_Black_Friday_Pricing_and_Included_Savings_2026-11-20.md)
- [Earlier 24-page consolidation, 20:50 UTC](archive/Primal_Complete_Development_As_Of_2026-11-20_2050UTC.pdf)
- [Historical purchase matrix](Primal_Live_Purchase_Matrix.csv)
- [Historical sanitized verification receipt](Live_Release_Verification.json)

Historical Markdown bodies and dated PDFs are retained. The current consolidated PDF prepends the official addendum to all 24 earlier pages; the earlier consolidation is archived unchanged. Current documentation records actual deployed changes and separates the new mobile-cart pass from pending checkout-rate acceptance. Private app configuration, credentials and checkout/contact data are excluded.
