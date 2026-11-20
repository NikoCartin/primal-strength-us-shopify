# Primal US: Official Echelon Pricing and Stride-8s Shipping Addendum

**Date:** November 20, 2026  
**Owner:** Nicolas Cartin Reyes  
**Status:** Pricing and theme presentation LIVE; backend release: `primal-stride8-any-plan-shipping-20261120` (LIVE; released 2026-11-20 21:09:51 UTC).

## Current pricing authority

The user explicitly selected official Echelon product comparisons as the current authority, superseding temporary sheet-based comparisons. The exact current LIVE USD sale, compare-at and savings values are:

| Equipment | Sale price | Compare-at | Included savings | Authority |
| --- | ---: | ---: | ---: | --- |
| Stride-8s | \$2,195.99 | \$2,999.99 | \$804 | [1] |
| EX-5s-22 BLACK | \$999.99 | \$1,699.99 | \$700 | [2] |
| Row-s | \$799.99 | \$1,799.99 | \$1,000 | [3] |

Savings are the difference between the displayed comparison and sale prices, not another checkout reduction. The temporary Stride-8s sale and sheet comparison values in earlier reports are superseded. Echelon is the comparison-price authority only; its membership policy does not replace Primal's required equipment-plus-plan policy.

Harrison's latest email resolved commercial-price confirmation. EX-Pro remains **\$4,599.99** and Stride-9s Pro remains **\$6,399.99**, each with compare-at **null** and **no Black Friday label**. Confirmation is not an outstanding dependency. No dealer pricing, internal costs or full pricing sheet is reproduced here.

## Tier exclusions and live presentation

All five equipment products and all three Premier plans remain excluded from Primal's additional 10% and 15% tiers and from the subtotal used to qualify for those tiers. The prior hidden tier-eligible collection exclusion is LIVE and unchanged. Eligible Primal products alone contribute toward the \$500 and \$1,500 thresholds; the equipment's stated savings are already included.

Nine narrowly scoped theme files are LIVE on theme `142304510051` and in parity with DEV `189874339939`. A fresh live pull byte-matched the approved files. The existing **110 offline checks** and **31 targeted offer checks** passed. Actual My Browser desktop inspection passed for all three sale PDPs on the live store, not a theme preview. The user's saved two-item cart was left untouched.

Stride-8s alone displays **“Shipping included with any Premier plan (contiguous US)”**. Its Monthly badge shows **“First Month Free + Free Shipping”**. Other models' Monthly badges show **“First Month Free”** only; annual and two-year free-shipping benefits remain preserved. Premier base prices remain \$39.99 Monthly, \$399.99 annual and \$699.99 two-year. First Month Free applies to one qualifying Monthly unit, not equipment or every additional unit.

Required pairing, purchase guards and JSON scripts are unchanged. Real purchases remain enabled; required-membership validation and technical-failure blocking remain active. Quote-only products have no displayed price or direct-buy route, and zero-priced products receive no sale claim. These are preserved safeguards, not new payment-completion evidence.

## Shipping backend: audited boundary and LIVE release

The audited previous shipping Function was annual/two-year only. A valid Stride-8s plus Monthly fixture returned `operations: []`, demonstrating that the old Function did not implement the newly displayed Monthly exception. A zero-dollar store rate would not independently prove that a shipping discount executed.

Parent verification on the ORIGINAL app passed 108 shipping Rust tests and 108 official CLI-built compiled-WASM shipping fixtures (function-runner 9.2.2), plus 577 unchanged required-membership validator tests, 30 unchanged First Month Free tests and 100 app-home tests. The build passed. These local results support the runtime change but are not checkout-rate acceptance.

The minimal patch is LIVE in the ORIGINAL independent Primal app as version `primal-stride8-any-plan-shipping-20261120`, created 2026-11-20 21:08:05 UTC and released 2026-11-20 21:09:51 UTC. Fresh CLI readback shows the version ACTIVE; the prior `primal-premier-live-20261119` version is inactive and retained as the reviewed rollback target. This release record does not claim that new checkout shipping rates have passed.

Fresh pre/post-release Admin readback confirmed the shipping automatic discount remained ACTIVE, with the same identity, function mapping, configuration and combination settings. Fully loaded My Browser App Home confirmed both benefits ACTIVE and required validation ACTIVE with blockOnFailure true. All original non-shipping source fingerprints were unchanged; no rates or profiles were edited.

The approved policy is Stride-8s with any valid required Premier plan. The new Monthly exception targets only nonempty delivery groups containing exclusively valid Stride-8s equipment lines. A shared group containing unrelated equipment, another Monthly model or a quote item fails closed for this exception; separate ineligible groups receive no exception. The original annual/two-year all-delivery-groups behavior is unchanged. The Function discounts an offered rate only: no shipping profiles, rates or destinations are created or expanded.

## QA limits and follow-ups

The first anonymous 390 × 844 attempt loaded the correct LIVE PDP but did not populate its cart. A post-release response-aware native test then passed Stride-8s + 30-Day add-to-cart (HTTP 200): equipment \$2,195.99, Monthly first month \$0, exactly one immediately visible mobile checkout action and no horizontal PDP/cart overflow. The checkout click timed out; testing stopped without a retry, shipping-rate observation, payment or order. This is a mobile PDP/cart pass for that pair, not a checkout/shipping pass.

Earlier 15-cart, three EX-5s-22 checkout-entry and two annual/two-year shipping observations remain historical evidence only. They do not validate the current corrected offer or Monthly exception. Remaining fresh multi-plan mobile/checkout acceptance, Stride-8s checkout checks for all three plans against paid offered rates, other-model Monthly controls, and Primal-only/mixed-tier controls remain pending.

Existing PDP description wording that suggests optional membership is a follow-up; product bodies were not changed. Paid purchases, recurring billing, access provisioning, financing transactions and broader freight/destination acceptance remain untested. Historical Markdown bodies and dated PDFs are retained. The current addendum precedes the historical consolidated record. Public documentation excludes private app configuration, credentials, checkout addresses and contact data.

## References

- [1] Official Echelon Stride-8s product comparison.
- [2] Official Echelon EX-5s-22 product comparison.
- [3] Official Echelon Row-s product comparison.

[1]: https://echelonfit.com/products/stride-8s
[2]: https://echelonfit.com/products/echelon-connect-ex-5s-22-bike-for-bundles
[3]: https://echelonfit.com/products/echelon-row-s-connected-rowing-machine-for-bundles
