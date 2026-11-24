# SOP: Primal Cardio, Premier Memberships and Cart Releases

**Owner:** Nicolas Cartin Reyes, Lead Dev

**Store:** Primal Strength US  
**Version:** 1.3, November 20, 2026
**Scope:** Product, theme, discount and paired-cart safeguards; not certification of payment, recurring billing, provisioning or freight operations.
**Backend release:** `primal-stride8-any-plan-shipping-20261120` (LIVE; released 2026-11-20 21:09:51 UTC).

**Current status:** [November 23 technical handoff](STATUS_AND_HANDOFF_2026-11-23.md). Last technical verification was November 20; the November 23 local / November 24 UTC documentation update includes no fresh store tests or deployment. Readbacks and test results below refer to the November 20 release.

## 1. Current authority and release boundary

Use the [current official-pricing and shipping addendum](Primal_Official_Echelon_Pricing_and_Stride8_Shipping_2026-11-20.md), not temporary sheet comparisons or historical PDFs, for present status. The user selected official Echelon comparison authority. Current LIVE USD sale / compare-at / included savings are Stride-8s **\$2,195.99 / \$2,999.99 / \$804**, EX-5s-22 BLACK **\$999.99 / \$1,699.99 / \$700**, and Row-s **\$799.99 / \$1,799.99 / \$1,000**. Savings are already included, not another checkout discount.

Harrison's latest email resolved commercial confirmation: EX-Pro **\$4,599.99** and Stride-9s Pro **\$6,399.99** remain unchanged, compare-at null and no Black Friday label. Do not retain confirmation as pending or infer a sale from commercial pricing.

This SOP records the authorized current release. Future release procedures require authorization and must not be mistaken for completed results. Preserve historical Markdown bodies and dated PDFs; prepend current addenda to the consolidated record. Never publish private app configuration, secrets, vendor-internal dealer data, full sheets, checkout addresses or contact records.

## 2. Preserve catalog and purchase safeguards

The five equipment products and three plans remain ACTIVE/listed and real purchases enabled. Required equipment-plus-plan validation and technical-failure blocking remain active. Preserve exact product/variant identities, ordered `custom.pdp_individual_product` references, matched quantities and association properties. Do not copy Echelon's optional-membership policy into Primal.

Premier base prices remain \$39.99 Monthly, \$399.99 annual and \$699.99 two-year. Plans remain digital/non-shipping. First Month Free discounts one qualifying Monthly unit, not equipment or every additional unit. Do not invent renewal, provisioning, gifts or apparel-credit promises.

Quote-only products must display no price or direct purchase route; zero-priced products receive no sale claim. Optional sections omit missing data. Preserve SKU, inventory, native media, financing and stock behavior. Existing PDP description language suggesting optional membership is an explicit follow-up; do not change product bodies in this documentation task.

## 3. Tier policy and storefront copy

All five equipment products and three plans are excluded from additional Primal 10%/15% tiers and threshold subtotal. The prior hidden `primal-bf-tier-eligible` collection exclusion is LIVE and unchanged, using AND exclusions for Echelon Cardio and Echelon Premier. Only eligible product subtotals qualify toward \$500/\$1,500; preserve percentages, dates and approved combinations. Do not restore all-product eligibility without explicit approval.

Only the three verified sale models show sale/compare-at/included-savings labels. Commercial models receive neutral tier-exclusion copy, not Black Friday labels. Stride-8s alone shows “Shipping included with any Premier plan (contiguous US)” and Monthly “First Month Free + Free Shipping.” Other Monthly models show “First Month Free” only; annual/two-year shipping benefits remain preserved.

## 4. Theme scope and safe release procedure

LIVE theme is `142304510051`; DEV Premier Cardio Test is `189874339939`. DEV is not a separate store: catalog, Functions, automatic discounts and checkout rules are store-wide.

The nine-file pricing/copy update is already LIVE and in DEV parity, with fresh live pull byte-matched. Existing 110 offline checks and 31 targeted offer checks passed. Required pairing, purchase guards and JSON scripts remain unchanged. Actual My Browser desktop visual review passed on all three LIVE sale PDPs, not preview; saved two-item user cart was untouched.

For a separately authorized change, pull fresh affected live files, back up, and rebase only approved edits. Push an exact allowlist using scoped `--only`/`--nodelete` flags; use `--allow-live` only for authorized production work. Never publish a whole DEV theme or overwrite unrelated live work. Read back exact bytes; account explicitly for generated JSON formatting where relevant. Check actual theme/preview state rather than assuming a plain URL proves production.

Preserve compact membership cards, native thumbnails, Clear your cart, paired removal/quantity protection and the single visible mobile checkout action. Use fresh anonymous QA contexts, not the user's retained cart. For separately authorized pre-cart QA, check 320 × 568, 375 × 667, 390 × 844, 430 × 932 and desktop; verify one content scroller, reachable close/cart controls and background-scroll containment. Do not infer real-device Safari gestures from Chromium.

## 5. Backend shipping boundary and current status

The previous audited shipping Function was annual/two-year only; a valid Stride-8s Monthly fixture produced `operations: []`. Production-app verification passed 108 shipping Rust tests and 108 official CLI-built compiled-WASM shipping fixtures (function-runner 9.2.2), plus 577 unchanged required-membership validator tests, 30 unchanged First Month Free tests and 100 app-home tests. The build passed. These local results support the runtime change but are not checkout-rate acceptance.

The minimal patch is LIVE in the ORIGINAL independent Primal app as version `primal-stride8-any-plan-shipping-20261120`, created 2026-11-20 21:08:05 UTC and released 2026-11-20 21:09:51 UTC. Fresh CLI readback shows the version ACTIVE; the prior `primal-premier-live-20261119` version is inactive and retained as the reviewed rollback target. Preserve original app identity and extension mappings, validator, First Month Free and real-purchase/failure-blocking policy; never deploy the isolated test shell.

Fresh pre/post-release Admin readback confirmed the shipping automatic discount remained ACTIVE, with the same identity, function mapping, configuration and combination settings. Fully loaded My Browser App Home confirmed both benefits ACTIVE and required validation ACTIVE with blockOnFailure true. All original non-shipping source fingerprints were unchanged; no rates or profiles were edited.

Approved policy is Stride-8s with any valid required Premier plan. The new Monthly exception targets only nonempty delivery groups consisting entirely of valid Stride-8s equipment lines. Separate unrelated/other-model Monthly/quote groups are excluded; shared groups containing those items fail closed for the exception. The original annual/two-year all-groups behavior is unchanged. See the [shipping policy](SHIPPING_POLICY_2026-11-20.md). Discount an offered rate only; do not create profiles, missing rates or destinations.

For any future backend release, build/test the production app, verify compiled runtime, inspect the version and reject unintended extension/configuration changes before release. The current release record is the verified version above. A backend release alone does not close shipping checkout QA.

## 6. QA limits and remaining acceptance

The first anonymous 390 × 844 attempt loaded the correct LIVE PDP but did not populate its cart. A post-release response-aware native test then passed Stride-8s + 30-Day add-to-cart (HTTP 200): equipment \$2,195.99, Monthly first month \$0, exactly one immediately visible mobile checkout action and no horizontal PDP/cart overflow. The checkout click timed out; testing stopped without a retry, shipping-rate observation, payment or order. This is a mobile PDP/cart pass for that pair, not a checkout/shipping pass. Earlier acceptance matrices remain historical only.

Remaining fresh multi-plan mobile/checkout acceptance; Stride-8s all-three-plan checks against paid offered shipping rates; other-model Monthly controls; annual/two-year regression; First Month Free and invalid-pair rejection; and Primal-only/mixed-tier controls remain pending. Free store rates alone do not prove discount execution. When independently authorized, observe fully loaded shipping rates without submitting payment/orders, and keep failed/interrupted attempts as non-passing evidence.

Paid purchase, recurring billing, access provisioning, cancellation/refund operations, financing transactions, freight/destination coverage and real-device acceptance remain untested or open. Do not publish test addresses/contact fields or treat a single destination as universal coverage.

## 7. Documentation and rollback

Link the current addendum, shipping policy and this SOP from README/CHANGELOG. Prepend conspicuous superseded notices to earlier summaries and corrections without rewriting historical bodies. Preserve dated PDFs as history and update the consolidated PDF with the current addendum first. Maintain GitHub, the existing tracker and the stable Drive file without changing its link or sharing.

If separately authorized, rollback only affected theme files from their fresh backup and verify readback; do not incidentally change catalog/media or tier scope. A backend rollback must use an actually reviewed prior Primal version while preserving mappings and safety policy, with its result documented. State whether real purchases remain enabled. Do not replace pending QA with hypothetical success wording.
