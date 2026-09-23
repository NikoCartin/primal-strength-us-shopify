# SOP: Split Echelon and PRIMAL Logo Links

**Author:** Nicolas Cartin Reyes, Lead Developer
**Version:** 1.0.0
**Store:** `primal-strength-us.myshopify.com`
**Production theme:** `ux-project/Live`, theme ID `142304510051`

## Objective

This procedure explains how to maintain, test, deploy, and roll back the split-link behavior for the combined Echelon and PRIMAL header logo. The visible logo must remain one unchanged combined SVG. The Echelon region must open `https://echelonfit.com/`, and the PRIMAL region must remain on the Primal Strength US homepage.

## Scope

The implementation is limited to `sections/header.liquid`. It does not change the logo asset, menu, search, account, cart, localisation selector, mobile drawer, product templates, checkout, analytics, or financing integrations.

The source file is included in this repository at `sections/header.liquid`. The technical explanation is in [TECHNICAL-SPLIT-ECHELON-PRIMAL-LOGO-LINKS.md](TECHNICAL-SPLIT-ECHELON-PRIMAL-LOGO-LINKS.md).

## Before editing

Confirm that the intended store is `primal-strength-us.myshopify.com`. Confirm the published theme ID with Shopify Admin or the CLI. Do not assume that the documented ID is still published if the store has changed themes.

Duplicate the published theme before testing. Use the duplicate for all source changes and browser validation. Do not edit the live theme until the draft passes the checks below.

## Implementation rules

The SVG branch must render a wrapper containing the existing SVG and two transparent anchors. The wrapper must not be placed inside another anchor. The image and text fallback branches must retain the original single-anchor behavior.

The Echelon anchor must use `https://echelonfit.com/` and `aria-label="Echelon home"`. The PRIMAL anchor must use `{{ routes.root_url }}` and `aria-label="Visit Primal Strength US"`.

The split percentages are `49.7%` for Echelon and `50.3%` for PRIMAL. These values are based on the current SVG divider position and must be recalculated if the SVG changes.

Do not remove the `!important` declarations from the positioning rules without first confirming that the external `header.css` no longer resets the anchors. The `pointer-events: auto !important` declaration is also required for the theme's transparent-header behavior.

## Draft-theme deployment

Use the current published theme as the source and push only the header section to the unpublished duplicate:

```bash
shopify theme push \
  --store primal-strength-us.myshopify.com \
  --theme DRAFT_THEME_ID \
  --only sections/header.liquid
```

Open the draft preview using the duplicate theme ID:

```text
https://us.primalstrength.com/?preview_theme_id=DRAFT_THEME_ID
```

The theme editor is not a sufficient click test because it intercepts preview navigation. Test the storefront preview itself in a private browser window.

## Acceptance checks

The combined logo must look visually unchanged. Clicking the left Echelon region must open `https://echelonfit.com/`. Clicking the right PRIMAL region must stay on the Primal Strength US homepage. Both regions must work on desktop and mobile.

Use keyboard navigation and confirm that each region receives a visible focus outline. Confirm that the main menu, search, account, cart, localisation selector, mobile drawer, and header sizing remain unchanged. Confirm that the rendered markup contains no nested anchors and no duplicate visual logo.

## Required browser diagnostic

Before sign-off, run this read-only diagnostic in the storefront browser console:

```javascript
const echelon = document.querySelector('.header-logo__brand-link--echelon');
const primal = document.querySelector('.header-logo__brand-link--primal');

console.log('Echelon link rect:', echelon?.getBoundingClientRect());
console.log('Primal link rect:', primal?.getBoundingClientRect());
```

Both anchors must have non-zero width and height. If either anchor is `0 × 0`, do not deploy. Re-check the `position`, `top`, `bottom`, `left`, `right`, `width`, `display`, `pointer-events`, and `z-index` declarations.

If both rectangles are non-zero but clicks still fail, inspect the element at the center of each region with `document.elementFromPoint(x, y)`. A different element above the anchor indicates a stacking or pointer-events conflict. Verify that the wrapper and anchors retain `pointer-events: auto !important` and that the anchors retain a suitable `z-index`.

## Production deployment

Deploy only after the draft passes all checks. Upload only the one modified section and use the explicit live-theme flag:

```bash
shopify theme push \
  --store primal-strength-us.myshopify.com \
  --theme 142304510051 \
  --only sections/header.liquid \
  --allow-live
```

After deployment, open `https://us.primalstrength.com/` in a private browser window and repeat the desktop and mobile checks. Confirm that the public page uses the intended theme and that the two link destinations are correct.

## Rollback

If unrelated header behavior changes, restore the pre-deployment `sections/header.liquid` from the previous theme version and push only that file to the same theme. Do not roll back unrelated theme files.

If only the external Echelon destination is under review, restore the previous single-home-link branch or remove only the Echelon anchor after a separate change review. Keep the PRIMAL home link and the combined SVG intact.

## Change record

Record the date, store, theme ID, source file, reviewer, draft theme ID, browser results, and console rectangle results in the release notes or pull request. If the SVG changes, record the new divider geometry and updated percentages.

## References

[1]: https://shopify.dev/docs/storefronts/themes/tools/cli "Shopify Theme CLI documentation"
[2]: https://shopify.dev/docs/storefronts/themes/tools/theme-check "Shopify Theme Check documentation"
[3]: https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible "MDN :focus-visible reference"

Use the Shopify CLI and Theme Check references for deployment and static validation [1] [2]. Use the MDN focus reference when reviewing keyboard accessibility [3].
