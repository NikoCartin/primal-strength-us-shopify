> **SUPERSEDED SHEET-PRICING CORRECTION — November 20, 2026.** The entire original body below is preserved as dated history; its sheet authority, prices/comparisons, DEV-only status, pending commercial confirmation and QA interruptions are not the current record. The user selected official Echelon comparison authority. LIVE USD sale / compare-at / savings: Stride-8s \$2,195.99 / \$2,999.99 / \$804; EX-5s-22 BLACK \$999.99 / \$1,699.99 / \$700; Row-s \$799.99 / \$1,799.99 / \$1,000. Harrison resolved commercial confirmation: EX-Pro \$4,599.99 and Stride-9s Pro \$6,399.99 remain unchanged, compare-at null, no Black Friday label. All five equipment products and three plans remain excluded from extra tiers and threshold subtotal. Read the [current official-pricing and shipping addendum](Primal_Official_Echelon_Pricing_and_Stride8_Shipping_2026-11-20.md).
>
> **Backend release:** `primal-stride8-any-plan-shipping-20261120` (LIVE; released 2026-11-20 21:09:51 UTC). Nine-file theme copy is LIVE, with live desktop visual passes; backend release is LIVE; fresh checkout shipping-rate QA remains pending. Latest anonymous mobile PDP returned HTTP 200 with correct prices/copy and no overflow, but cart empty, zero checkout buttons and no checkout rates reached. No new mobile checkout pass is claimed; historical PDFs are unchanged.

# Primal Black Friday: verified sale prices and included savings

**Date:** November 20, 2026  
**Owner:** Nicolas Cartin Reyes  
**Store:** Primal Strength US  
**Status:** Verified retail prices and comparison prices are live. Savings-message changes are deployed to DEV only, awaiting direction on incomplete mobile QA.

## Correction to the earlier resolution

The earlier correction correctly excluded the five Echelon cardio products and three Premier plans from Primal's additional 10%/\$500 and 15%/\$1,500 Black Friday tiers. It preserved the then-current equipment prices but did not reconcile those prices and original-price labels against Harrison's Black Friday pricing sheet. The Stride-8s price of \$2,195.99 shown in the earlier report and email attachment is therefore historical, not the current Black Friday price.

Nico clarified that Harrison's equipment sale prices must remain, without the extra Primal tier discount, and that customers must clearly see their savings are already included. The verified public retail rows were applied to the existing native product variants. No duplicate products were created and no dealer pricing was used.

## Verified retail prices

Harrison shared the [Black Friday pricing workbook](https://docs.google.com/spreadsheets/d/170PsuYiUuVt4LyFooVwktbxgzuwwlWbT7HqoBGxu66s/edit) in his November 19 pricing email. The USA consumer tab identifies BF price as the Shopify selling price and Compare-at as the original-price display. The three exact-SKU retail matches are:

- [Stride-8s](https://us.primalstrength.com/products/echelon-stride-8s), SKU ECH-STRIDE-8s-22: **\$1,999.99**, original comparison **\$2,249.99**, equipment savings **\$250.00**. USA row 8. Selling price corrected from \$2,195.99.
- [EX-5s-22](https://us.primalstrength.com/products/echelon-connect-ex-5s-22), SKU ECH01-EX5s: **\$999.99**, original comparison **\$1,299.99**, equipment savings **\$300.00**. USA row 49. Selling price retained; comparison-price display corrected.
- [Row-s](https://us.primalstrength.com/products/echelon-row-s), SKU ECH-ROWs: **\$799.99**, original comparison **\$1,299.99**, equipment savings **\$500.00**. USA row 48. Selling price retained; comparison-price display corrected.

All three selling/compare-at pairs match the exact post-change Admin readback. The savings amounts are comparison-price differences, not an additional checkout discount. Taxes, membership charges and applicable delivery are separate.

## Two commercial prices remain unconfirmed

The workbook does not supply a public retail Black Friday price for EX-Pro or Stride-9s Pro. EX-Pro remains **\$4,599.99**, and Stride-9s Pro remains **\$6,399.99**. Their comparison prices remain empty. No sale percentage, original retail comparison or Black Friday savings claim has been invented for them. Nico instructed using Harrison's file and asking John, Lou and Harrison to confirm missing information. The entire USA tab was checked, including all 108 populated rows; public retail Black Friday prices for these two models remain absent. Confirmation was requested by email to Harrison, copying John and Lou, on November 20 at 20:41 UTC. Message ID 1a1fab15a3cdc134. Team reply is pending.

The internal USA Commercial Dealer tab is not a public retail price list and must never be copied to the storefront. Both commercial models remain excluded from Primal's extra tiers regardless of whether their retail sale prices are later confirmed.

## Customer-facing clarity

Eight narrowly scoped Liquid files were deployed to DEV Premier Cardio Test, theme 189874339939, not to the live theme. The actual desktop preview in My Browser shows \$1,999.99 beside \$2,249.99 struck through, “Black Friday price · Save \$250.00” and “Savings already included. Extra Primal 10%/15% offers excluded.” The font is inherited from the existing theme. Compact cart notes add one 12 px text line and do not change buttons, quantities, removal controls or purchase rules. Publication of these message changes is pending Nico's response to the QA limitation.

The intended presentation shows the sale price beside the original struck-through retail comparison for the three verified models, with a compact Black Friday savings-included note. A separate exclusion statement explains that extra Primal 10%/15% offers do not apply. Commercial models must receive only a neutral tier-exclusion statement, not an unsupported sale claim. Sale labels are restricted to the three verified product handles with positive selling prices and a higher comparison price. Quote-only products and Premier plan lines must not receive these sale labels.

## Acceptance and preserved protections

108 offline checks passed for Liquid syntax, unchanged section schemas, savings math, quote/zero-price/membership suppression, correct card-variant selection, neutral commercial-model exclusions and unchanged purchase controls. Exact Admin readback verified all three retail price/compare-at pairs, the two unchanged commercial prices and all three unchanged Premier base prices. Desktop DEV visual inspection passed in My Browser.

Two anonymous sandbox DEV navigation attempts timed out. A direct diagnostic then returned HTTP 429 with a Retry-After header. These interruptions are not passes, and no mobile/cart or new checkout-shipping acceptance claim is made. No further automated retries are running. The mobile/cart review and live message deployment remain pending; the existing user cart was not modified.

The existing automated tier-eligible collection continues to exclude Echelon Cardio and Echelon Premier. Only eligible Primal product subtotals qualify for the \$500/\$1,500 tiers. Discount percentages, dates, combination settings, required-member validation, technical-failure blocking, real-purchase permission, stock, SKUs, media and financing are unchanged by the retail-price correction.

Premier base prices remain \$39.99 Monthly, \$399.99 yearly and \$699.99 two-year. First Month Free and annual/two-year free-shipping configurations remain active. The earlier November 20 exclusion audit verified 15 equipment/plan carts, three EX-5s-22 checkout entries and two destination-specific free-shipping observations. Those remain dated evidence; they are not a new full audit of this subsequent price/message correction.

The earlier Primal-only and mixed-cart controls remain unverified because of QA connection limits and timeouts. No payment or order is submitted in this correction. Recurring billing, access provisioning, financing transaction acceptance, freight operations and real-device gesture validation remain separate open work.

## Documentation and rollback boundaries

This report supersedes the earlier Stride-8s \$2,195.99 purchasing example and any implied claim that all five models have verified public Black Friday sale prices. The tier-exclusion implementation remains correct. Previous reports, screenshots and the email sent at 20:20 UTC are retained as dated history, not silently rewritten as current proof.

The complete PDF places this correction before the prior exclusion report and November 19 development/SOP history. The existing GitHub workstream, established tracker rows and stable Drive PDF are updated in place after verification. Public-safe evidence excludes credentials, internal costs/dealer rates, customer contact/address data and payment fields.

Rollback must be narrow: restore only the affected theme files from the fresh live backup if needed. Do not restore all-product tier eligibility or the incorrect Stride-8s source price as routine cleanup. Any retail-price rollback requires approval against an identified public pricing source.
