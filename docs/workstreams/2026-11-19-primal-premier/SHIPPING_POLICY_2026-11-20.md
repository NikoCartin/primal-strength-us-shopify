# Primal Premier Shipping Policy: November 20, 2026

**Author:** Nicolas Cartin Reyes, Lead Dev

**Backend release:** `primal-stride8-any-plan-shipping-20261120` (LIVE; released 2026-11-20 21:09:51 UTC)  
**Scope:** Sanitized policy and local regression record, not a checkout-rate certification. See the [current pricing and shipping addendum](Primal_Official_Echelon_Pricing_and_Stride8_Shipping_2026-11-20.md).

**Current status:** [November 23 technical handoff](STATUS_AND_HANDOFF_2026-11-23.md). Last technical verification was November 20; the November 23 local / November 24 UTC documentation update includes no fresh store tests or deployment. Readbacks and test results below refer to the November 20 release.

## Approved policy and release distinction

Stride-8s shipping is included with any valid required Premier plan in the contiguous US. Its LIVE Monthly badge is “First Month Free + Free Shipping”; other models' Monthly badges remain “First Month Free” only. Annual and two-year shipping benefits are preserved. Membership remains required, and real purchases remain enabled with technical-failure blocking.

The previous audited shipping Function recognized annual/two-year eligibility only; a correctly paired Stride-8s Monthly fixture produced `operations: []`. The reviewed minimal patch is LIVE in the ORIGINAL independent Primal app as version `primal-stride8-any-plan-shipping-20261120`, created 2026-11-20 21:08:05 UTC and released 2026-11-20 21:09:51 UTC. Fresh CLI readback shows the version ACTIVE; the prior `primal-premier-live-20261119` version is inactive and retained as the reviewed rollback target. Live copy and local test results do not by themselves establish a fresh checkout shipping pass.

Fresh pre/post-release Admin readback confirmed the shipping automatic discount remained ACTIVE, with the same identity, function mapping, configuration and combination settings. Fully loaded My Browser App Home confirmed both benefits ACTIVE and required validation ACTIVE with blockOnFailure true. All original non-shipping source fingerprints were unchanged; no rates or profiles were edited.

## Monthly mixed-delivery-group boundary

The new Monthly exception requires the approved Stride-8s identity, a valid required-plan pair, matching quantities, valid offer references and valid associations. It is not general Monthly free shipping.

| Delivery-group contents | New Monthly exception |
| --- | --- |
| Nonempty group consisting exclusively of valid Stride-8s equipment lines | Eligible |
| Separate unrelated, other-model Monthly or quote-only group | Not eligible |
| Shared Stride-8s group with unrelated items, another Monthly model or quote items | Fail closed; no new exception |
| Empty, unmatched or invalid group/pair/configuration | Fail closed |

Shopify's shipping-discount target is a delivery group, not an item's proportional share of a shared rate. The conservative boundary prevents a Stride-8s exception from subsidizing unrelated shipping. Digital membership does not ordinarily add a shippable line. The original annual/two-year all-delivery-groups behavior is unchanged, with invalid pairing still rejected by the unchanged required-membership validator.

The Function discounts an offered shipping rate only. It does not create a missing rate, shipping profile or destination, or establish service coverage. An already-free store rate is not proof that the Function executed.

## Reviewed original-app regression results

| Suite | Passed | Evidence scope |
| --- | ---: | --- |
| Shipping Rust matrix | 108 | Production app |
| Official compiled-WASM shipping matrix | 108 | Production app |
| Required-membership validator | 577 | Unchanged validator |
| First Month Free | 30 | Unchanged benefit |
| App-home tests | 100 | Existing app-home behavior |

Coverage includes five models and three plans, quantities and split lines, missing or invalid pairing, wrong product/variant identities, malformed references/configuration, orphan companions, and separate/shared unrelated or quote groups. Original annual parsing, exclusion and all-groups expectations are retained. The production app build and release are confirmed; these tests do not close fresh checkout-rate QA.

## Acceptance still open

The first anonymous 390 × 844 attempt loaded the correct LIVE PDP but did not populate its cart. A post-release response-aware native test then passed Stride-8s + 30-Day add-to-cart (HTTP 200): equipment \$2,195.99, Monthly first month \$0, exactly one immediately visible mobile checkout action and no horizontal PDP/cart overflow. The checkout click timed out; testing stopped without a retry, shipping-rate observation, payment or order. This is a mobile PDP/cart pass for that pair, not a checkout/shipping pass. Earlier acceptance matrices remain historical only.

Remaining fresh multi-plan mobile/checkout acceptance; Stride-8s checks with all three plans against paid offered rates; other-model Monthly and annual/two-year controls; First Month Free and pairing rejection; and Primal-only/mixed-tier controls remain pending. Do not alter the user's retained cart for QA. Paid purchases, recurring billing, provisioning and broader freight/destination acceptance remain untested. Optional-membership wording in existing PDP descriptions remains a separate follow-up; product bodies are unchanged.

No private app configuration, secrets, vendor-internal pricing, full sheet, checkout address or contact data is included. This note authorizes no deployment or store change.
