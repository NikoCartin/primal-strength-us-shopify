# Primal Premier and Cardio: Status and Technical Handoff

**Author:** Nicolas Cartin Reyes, Lead Dev

**Documentation date:** November 23, 2026 local / November 24, 2026 UTC

**Last technical verification:** November 20, 2026

This current entry point separates release configuration, verified results and pending acceptance. This documentation-only update includes no fresh store tests or deployment. Production status is the November 20 verified state, not a November 23 retest. Older records remain dated history.

## 1. Release configuration

Five equipment products and three Premier plans were ACTIVE/listed, with real purchases enabled. Exact last-verified USD pricing:

| Equipment | Price | Compare-at | Included savings |
| --- | ---: | ---: | ---: |
| Stride-8s | $2,195.99 | $2,999.99 | $804 |
| EX-5s-22 BLACK | $999.99 | $1,699.99 | $700 |
| Row-s | $799.99 | $1,799.99 | $1,000 |
| EX-Pro | $4,599.99 | null | No Black Friday label |
| Stride-9s Pro | $6,399.99 | null | No Black Friday label |

Official Echelon comparisons supersede temporary sheet values. Savings are included, not another checkout reduction. Commercial-price confirmation is resolved; neither commercial model has a confirmed Black Friday offer. See [official report and sources](Primal_Official_Echelon_Pricing_and_Stride8_Shipping_2026-11-20.md#references) and [catalog readback](official-pricing-shipping-evidence/official-admin-readback.json).

Plans remain $39.99 Monthly, $399.99 annual and $699.99 two-year, digital/non-shipping. First Month Free applies to one qualifying Monthly unit only. Billing/renewal and provisioning are untested. Required pairing, matching quantities, offer references and associations remain mandatory. Validation was ACTIVE with `blockOnFailure: true`; a plan cannot be removed alone while its equipment remains.

All eight products remain excluded from extra Primal 10%/15% discounts and threshold subtotals. Hidden eligible collection `514488369251` excludes Echelon Cardio and Echelon Premier. Existing nodes `1566285529187` (10%, $500) and `1566285496419` (15%, $1,500) retain policy, dates and combinations. Only eligible Primal lines count toward thresholds.

## 2. Theme and backend implementation

LIVE `142304510051` and DEV `189874339939` matched exact approved bytes for nine files:

```text
sections/bf-product-row.liquid
sections/bf-tier-banner.liquid
sections/cart-notification-product.liquid
sections/main-cart-items.liquid
sections/main-product.liquid
snippets/card-product.liquid
snippets/cart-drawer.liquid
snippets/primal-bf-cardio-savings.liquid
snippets/primal-membership-selector.liquid
```

See [manifest](official-pricing-shipping-evidence/live-theme-manifest.json), [byte verification](official-pricing-shipping-evidence/live-theme-byte-verification.json), [implementation diff](official-pricing-shipping-evidence/theme-production.diff) and [savings renderer](official-pricing-shipping-evidence/primal-bf-cardio-savings.liquid). Compact cards, native thumbnails, Clear your cart, one immediate mobile checkout CTA, pairing safeguards and pre-cart scrolling/images were preserved. Quote-only products retain no price/direct purchase; zero-price products receive no sale claim. Financing, stock, JSON scripts and native media remain intact.

Production app ACTIVE version `primal-stride8-any-plan-shipping-20261120` was released November 20 at 21:09:51 UTC. Inactive `primal-premier-live-20261119` is the reviewed rollback. Only shipping production source changed. Validator, First Month Free, app-home, configuration, identity and extension mappings were preserved. Shipping discount configuration/combinations stayed unchanged; no profiles or rates were created.

Review [release receipt](official-pricing-shipping-evidence/shipping-live-release.json), [source scope](official-pricing-shipping-evidence/shipping-source-scope.json), [production patch](official-pricing-shipping-evidence/shipping-production.patch) and [tests](official-pricing-shipping-evidence/shipping-test-summary.json). Previous annual-only `operations: []` for valid Stride-8s Monthly is a baseline, not the active version's result.

## 3. Shipping boundary

Stride-8s with every valid required plan qualifies for included contiguous-US shipping. Monthly copy is “First Month Free + Free Shipping”; other Monthly models retain “First Month Free” only.

Monthly discounts only nonempty groups exclusively containing valid Stride-8s equipment. Separate unrelated, other-model Monthly or quote groups receive no exception; shared groups containing those items fail closed. Invalid pairs/configuration fail closed. Original annual/two-year all-groups behavior is unchanged. The Function discounts an offered rate only; it cannot create rates or coverage. An already-free rate does not prove execution. See [shipping policy](SHIPPING_POLICY_2026-11-20.md).

## 4. Verification and acceptance matrix

All results are November 20 evidence, not new passes.

| Verification | Result and boundary |
| --- | --- |
| Theme | 110 offline + 31 offer checks passed |
| Production shipping | 108 Rust + 108 official CLI-built WASM passed; function-runner 9.2.2 |
| Preserved components | Validator 577, First Month Free 30, app-home 100 passed |
| Live desktop | Three sale PDP checks passed; retained user cart untouched |
| Native 390 x 844 Monthly | Stride-8s add HTTP 200; equipment $2,195.99, first month $0; exactly one immediate checkout CTA; no PDP/cart horizontal overflow |
| Checkout/shipping | Click timed out; stopped without retry, fresh rates, payment or order; not passed |

The first mobile attempt did not populate its cart. The [native receipt](official-pricing-shipping-evidence/post-release-native-mobile-qa.json) records subsequent cart success but incomplete checkout; [release summary](official-pricing-shipping-evidence/current-release-summary.json) preserves the distinction. Earlier 15 carts, three EX-5s-22 checkout entries and two annual shipping observations are historical only.

## 5. Pending acceptance and dependencies

Pending: all-three-plan Stride-8s checkout against paid offered rates; other Monthly controls; annual/two-year regression; current invalid-pair/First Month Free checkout controls; Primal-only/mixed-tier thresholds; remaining multi-plan mobile/checkout; real-device Safari. Stale optional-membership PDP body copy needs separate correction; bodies were unchanged.

Paid purchase, billing/renewal, access provisioning, cancellation/refunds, apparel entitlements, financing, payment activation/transactions and freight/logistics/destination coverage remain open or untested. Enabled purchasing and local tests do not certify these dependencies. Follow the [release/rollback SOP](SOP_Premier_Cardio_Cart_Release.md) for authorized acceptance or changes.

## 6. Communications dependency status

**Readback: November 24, 2026, 02:02:36 UTC.** Corrected November 20 pricing reply was dispatched at 21:26 UTC to Harrison, copying John/Lou, signed Nico: "I've updated Primal to use the official Echelon sale and compare-at prices." Dispatch does not confirm delivery. Nine notifications:

| Conversation | UTC notification | Recipient | Status / retry |
| --- | --- | --- | --- |
| Release update | Nov 21 14:10:34 | Lou | Delay / 46h |
| Release update | Nov 22 15:21:58 | Lou | Delay / 21h |
| Release update | Nov 23 15:17:43 | John | Delay / 47h |
| Harrison pricing | Nov 21 21:16:38 | Harrison | Delay / 47h |
| Harrison pricing | Nov 21 21:49:50 | Lou | Delay / 46h |
| Harrison pricing | Nov 22 22:07:57 | Harrison | Delay / 22h |
| Harrison pricing | Nov 23 00:19:13 | Lou | Delay / 20h |
| Harrison pricing | Nov 23 22:05:48 | John | Delay / 47h |
| Harrison pricing | Nov 23 22:32:56 | Harrison | Failure / Message Not Delivered |

All report `Temporary System Problem`. Harrison's actual failure notification is in the pricing conversation, not correlated to a specific outbound reply. The separate release-update conversation has no human reply or final failure. Neither thread confirms John/Lou resolution or a fresh human reply after November 20 clarification. Retry durations are recorded as reported at each notice, not current countdowns; expiry proves neither delivery nor failure. IT/mail investigation and resend approval remain pending; no resend, new email or settings change occurred. See the [sanitized delivery-status receipt](COMMUNICATION_DELIVERY_STATUS_2026-11-23.json); scope is these two conversations, not a mailbox-wide audit.

## 7. Record continuity

[Current consolidated PDF](Primal_Development_Summary_2026-11-19.pdf): 27 pages, official addendum plus 24 historical pages. [Archived consolidation](archive/Primal_Complete_Development_As_Of_2026-11-20_2050UTC.pdf): 24 pages, unchanged. Preserve dated bodies/PDFs; [workstream index](README.md) links technical history. Public evidence excludes private configuration, secrets, contact records and dealer sheets.
