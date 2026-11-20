# SOP: Primal Cardio, Premier Memberships and Cart Releases

**Owner:** Nicolas Cartin Reyes  
**Store:** Primal Strength US  
**Version:** 1.2, November 20, 2026  
**Scope:** Validated product, theme, discount and cart work. Not a certification of recurring billing, access fulfillment, payment processing or freight operations.

## 1. Purpose and release boundaries

Use this procedure to reproduce the working Echelon cardio purchase presentation on Primal, maintain equipment-plus-membership relationships, validate benefits, and release focused cart improvements without overwriting unrelated production changes. The live theme is 142304510051. DEV Premier Cardio Test is 189874339939. A DEV theme is not a separate store: product publication, Functions, automatic discounts and checkout rules affect the merchant store, not just a theme.

The independent Primal Premier Membership app must retain its own identity and existing extension mappings. Never deploy a Primal adaptation through the Echelon source app. Never copy or publish credentials, app configuration, signed installation links, customer records or operational location data.

## 2. Working-version history

| Stage | Outcome | Boundary |
| --- | --- | --- |
| Draft catalog and private selector | Five equipment records and three digital plan records; populated specifications and approved previews | Drafts could not support a real public cart test |
| Independent custom app | First Month Free, Premier Free Shipping and Premier Membership Required Functions | No subscription or activation service was created |
| Controlled public testing | Equipment was temporarily UNLISTED; plans ACTIVE; test-only completion guard protected purchases | Unlisted does not mean private or non-purchasable |
| Responsive DEV cart | Compact Premier card, paired mutation protection, Clear your cart, one immediately visible mobile checkout | Tested DEV, not a production claim at that stage |
| Approved live release | All five equipment products ACTIVE/listed; native images; live cardio template; Black Friday row and cart fixes | Real purchases authorized, payment not submitted during QA |
| Live app version | `primal-premier-live-20261119` removes only the temporary completion prohibition | Mandatory-member validation and technical-failure blocking stay enabled |
| Approved pre-cart repair | Crisp native thumbnail, one mobile content scroller, visible actions, background scroll lock | Real iPhone Safari and embedded-browser gestures still need device validation |
| DEV route parity correction | Default cardio template now renders membership cards in the retained preview session too | Plain public URLs can still be affected by preview cookies |

## 3. Verify data before changing the storefront

**Retail pricing and message guard, November 20:** Use verified public USA retail BF price and Compare-at pairs from Harrison's file, not the internal dealer tab. Current verified pairs are Stride-8s $1,999.99/$2,249.99, EX-5s-22 $999.99/$1,299.99 and Row-s $799.99/$1,299.99. Only those three exact handles, with positive selling price and a higher comparison price, may show included Black Friday savings. Suppress labels for quote-only, zero-price, unrelated and Premier plan products. EX-Pro/Stride-9s Pro retain neutral tier exclusions until their public BF pairs are confirmed. Message deployment: DEV only, awaiting direction on blocked mobile/cart QA. Preserve interrupted QA as non-passing evidence. Read the [pricing correction](Primal_Black_Friday_Pricing_and_Included_Savings_2026-11-20.md).

Read back the exact equipment and plan records. Confirm statuses, Online Store publication, template suffix, approved prices/compare-at prices, SKU, inventory, native media and the ordered equipment metafield `custom.pdp_individual_product`. The three referenced plans must belong to Primal, be available, remain digital/non-shipping, and retain their base prices of $39.99, $399.99 and $699.99.

Keep the selector and optional product sections data-driven. Do not show an optional section with missing data. Do not show a price or a direct purchase action for a quote-template product. Do not invent freight weights, dimensions, gifts, apparel credits, subscriptions or fulfillment behavior. Native media belongs to the product and should be used for catalog cards, pre-cart, cart and checkout; a theme-only fallback is not proof that catalog media exists.

## 4. Back up and rebase the theme

Pull only the files affected by the planned change from the current live theme. Compare them against the tested DEV versions. Rebase intended changes onto the fresh live files rather than copying an old whole-theme snapshot. Preserve existing financing, quote-only behavior, homepage sections, settings, navigation and unrelated product templates.

For this release, the initial push contained 37 exact files, including one additional Echelon Black Friday homepage row. The pre-cart follow-up changed only `snippets/cart-notification.liquid`, `sections/cart-notification-product.liquid` and `assets/component-cart-notification.css`. Private backups and per-file readback evidence remain in the task workspace.

## 5. Test the theme before live release

Deploy the exact allowlist to DEV with `--only`, `--nodelete` and the existing theme ID. Shopify CLI can require `--force` when the local directory is intentionally a partial theme. It is not permission to upload unrelated files. Run JavaScript syntax checks and the relevant selector, cart, controller and Function regressions before a live push.

For pre-cart, test 320 x 568, 375 x 667, 390 x 844, 430 x 932 and 1440 x 1000. Confirm an actual equipment thumbnail, approximately 70 px visual width, correct aspect and sharp 70/140/210 px responsive image sources. Confirm the close control and View my cart are reachable. On mobile, use one content scroller and prevent gestures from scrolling the background when the overlay is open, including when recommendations have not yet loaded or all content fits. A once-per-page inline gesture guard contains vertical wheel/touch movement at the scroll boundaries while retaining taps, horizontal swipes and multi-touch zoom. Closing the overlay must restore normal page interaction.

For the full cart, maintain the previously tested 320 to 1920 px responsive range, a compact approximately 72 px Premier image, no horizontal overflow, read-only associated membership quantities, a visible Clear your cart action and exactly one visible checkout action. On mobile the actual sticky action is `.cart-mobile-checkout__button`; the desktop `.cart__checkout-button` is intentionally hidden.

## 6. Validate equipment-plus-plan purchasing

Use fresh anonymous contexts rather than the merchant's existing cart. For each of the five models, select Monthly, 1-Year and 2-Year in separate carts. Resolve the native cookie consent choice without granting marketing consent merely to test. Click the real Add to cart control, wait for the native notification or deliberate cart redirect to finish, then follow View my cart and the visible checkout control. Do not navigate away while the add or notification rendering is still pending.

Verify two lines with matched quantities, a preserved equipment base price, correct selected plan, no duplicate additions, a visible membership-required message, clear-cart functionality and checkout entry. Test independent membership removal through both the UI and a controlled cart mutation. The correct live lock marker is `data-primal-cart-state="locked"`: the quantity must be read-only and separate removal absent; the server must reject invalid removal and preserve the valid pair.

Keep failed and interrupted harness attempts as diagnostic evidence. Wrong selectors, premature navigation, an unresolved first-visit cookie banner and incomplete rate-loading results must not be mislabeled as storefront defects or silently converted into passes. A targeted recheck may supersede a specific timeout while retaining the original result and its scope.

## 7. Verify benefits without creating an order

Monthly has a $39.99 base price. First Month Free provides 100% off exactly one qualifying Monthly unit, not equipment and not every additional Monthly unit. The 1-Year and 2-Year plans are eligible for Premier free shipping. Existing Black Friday tiers remain 10% at $500 and 15% at $1,500, and must combine according to the approved policy. Do not claim the general shipping policy changed merely because the Premier discount is active.

**Current policy from November 20:** Both Primal tier discounts target `primal-bf-tier-eligible`, excluding the `Echelon Cardio` and `Echelon Premier` tags through AND rules. Excluded equipment and membership lines neither receive tiers nor contribute to tier minimums. Test eligible-only and mixed carts using eligible product subtotals, preserve equipment prices and Monthly/annual/two-year benefits, and retain any interrupted control checks as diagnostics. The [corrective addendum](Black_Friday_Echelon_Exclusion_Addendum_2026-11-20.md) distinguishes established results from pending controls. Do not restore all-product eligibility without explicit approval; doing so reintroduces the reported stacking.

If address-based rates are authorized, use synthetic contact details and a verified public non-personal test address. Observe the shipping line and named discount after rates load. Stop before payment or order submission. An annual or two-year result at one destination is not proof for every destination, quantity, carrier or freight profile. Do not infer a final Monthly shipping result while its rate label is incomplete.

## 8. Release the app and theme safely

Build the separate Primal app; retain existing Function UIDs and all three extensions. Upload a non-released version first and inspect it. Release the approved version without allowing extension removal. For commercial activation, remove only the temporary test-completion condition, not required-member validation or technical-failure blocking.

Push the exact theme allowlist to the live theme with `--only`, `--nodelete` and `--allow-live`. Never publish an entire DEV theme merely to release a few files. Update only the five authorized equipment statuses/template assignments and their approved native media. Verify channel publication separately from ACTIVE status. The Black Friday merchandise row references the exact five existing products without creating duplicates or changing discount percentages and thresholds.

## 9. Readback and public-session verification

Pull each deployed file back and compare exact bytes. For JSON templates, compare parsed JSON because Shopify can add a generated header or change indentation. Read back product statuses, native image counts, prices, stock and active discount settings. Recheck the actual public URLs in a fresh browser context with no preview parameters.

Also test the merchant's retained preview session. Shopify can persist a DEV theme selection even when a subsequent URL has no `preview_theme_id` parameter. Confirm the preview bar and actual theme rather than assuming the address bar proves the live theme. Exit preview to inspect production, and keep the DEV default route in parity so navigation from a preview does not hide memberships.

## 10. Documentation, rollout and rollback

Update the existing GitHub workstream README, complete development summary, CHANGELOG, this SOP, reviewed screenshots and sanitized verification receipts. Do not publish private derivative app source or configuration to the public repository. Update existing Drive tracker tasks in their established ten-column format; preserve prior comments, owners, dependencies, formatting and status validation. Replace the existing summary PDF in place so its Drive link stays stable. Verify the remote commit, tracker rows and PDF content after saving.

For a theme rollback, restore only affected files from the fresh pre-release backup with the same scoped push flags, then read back and retest. Do not overwrite an entire theme or remove native product media as an incidental rollback. If checkout safety requires a rollback, select a previously reviewed Primal app version while retaining Function mappings; obtain approval before changing product publication, purchase permission or the failure policy. State explicitly whether real purchases remain enabled.

Remaining operational follow-ups must stay open: Premier access provisioning, intended renewal/billing and cancellation/refund handling; two-year apparel-credit mapping before any promise; certified packaging/weights and negotiated freight validation; payment and financing transactions; analytics purchase-event delivery; real-device Safari/embedded browser acceptance. Local tests and checkout entry do not close these dependencies.
