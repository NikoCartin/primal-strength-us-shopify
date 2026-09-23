# Technical Architecture: Split Echelon and PRIMAL Logo Links

**Author:** Nicolas Cartin Reyes, Lead Developer
**Store:** `primal-strength-us.myshopify.com`
**Theme:** `ux-project/Live`, theme ID `142304510051`
**Source file:** `sections/header.liquid`

## Purpose

The Primal Strength US header displays the Echelon and PRIMAL wordmarks as one inline SVG. The implementation preserves that combined visual mark while making each brand independently clickable. The Echelon portion opens `https://echelonfit.com/`. The PRIMAL portion remains on the Primal Strength US homepage through Shopify's `routes.root_url` value.

The solution is deliberately limited to the header section. It does not redraw the SVG, create duplicate image assets, add a JavaScript navigation handler, or change any other header controls.

## Existing rendering model

The logo is not a raster image. The `header` section receives the combined SVG through `section.settings.logo_svg`, which is stored in `sections/header-group.json`. The SVG uses a `viewBox` of `0 0 3062 392` and contains the Echelon wordmark, a vertical divider, and the PRIMAL wordmark.

The section renders the logo once. The same markup is used across responsive layouts, while the existing theme CSS controls the desktop and mobile dimensions. Therefore, the implementation requires one source-file change rather than separate desktop, mobile top-bar, and mobile drawer edits.

## Divider geometry

The clickable boundary is derived from the SVG path instead of being estimated from a screenshot. The divider is the tallest and narrowest SVG subpath. Its bounding box is approximately:

- `xmin = 1509.0`
- `xmax = 1534.0`
- divider center `x = 1521.5`

Relative to the `3062` unit viewBox width, the link regions are:

```text
Echelon: 1521.5 / 3062 = 49.7%
PRIMAL:  (3062 - 1521.5) / 3062 = 50.3%
```

If the logo is redrawn or its proportions change, recalculate these values from the new SVG. Do not reuse the percentages by assumption.

## Markup strategy

The original section used one anchor around three possible logo branches: an image setting, an inline SVG setting, or a shop-name text fallback. Nested anchors would be invalid HTML, so the implementation branches at the top level:

1. When `section.settings.logo_svg` is populated, the section renders a positioned wrapper containing the existing SVG and two empty, transparent anchors.
2. When the SVG setting is empty, the original single-anchor image and text fallback behavior remains intact.

The split branch uses these destinations and labels:

| Region | Destination | Accessible label |
|---|---|---|
| Left logo region | `https://echelonfit.com/` | `Echelon home` |
| Right logo region | `{{ routes.root_url }}` | `Visit Primal Strength US` |

The anchors are real HTML links. They work without JavaScript and remain available to keyboard users.

## CSS requirements

The theme's compiled `header.css` can override positioning rules applied in the section. During validation, the wrapper rendered at the expected size while both empty anchors collapsed to `0 × 0`. The final implementation therefore marks positioning-critical declarations with `!important`.

The required declarations are `position`, `top`, `bottom`, `left`, `right`, `width`, `display`, `pointer-events`, and `z-index`. The `pointer-events` rule is independently required because the header uses the theme's `transparent-header` behavior, which disables pointer events on portions of the floating header.

The final CSS uses a `49.7%` left region and a `50.3%` right region. A `:focus-visible` outline makes both regions visible during keyboard navigation.

## Accessibility and regression boundaries

The split regions use descriptive labels and visible keyboard focus. The SVG remains the only visual logo content, so there is no duplicated visual mark or additional network asset. The implementation must not alter the menu, search, account, cart, localisation selector, mobile drawer behavior, header sizing, page navigation, checkout, or analytics.

The split wrapper must not be placed inside another anchor. A future maintainer must also avoid replacing the anchors with click handlers because normal links provide the required navigation and browser behavior.

## Files included in this repository

| File | Purpose |
|---|---|
| `sections/header.liquid` | Complete Shopify header section containing the implementation |
| `docs/TECHNICAL-SPLIT-ECHELON-PRIMAL-LOGO-LINKS.md` | Architecture, geometry, scope, and maintenance constraints |
| `docs/SOP-SPLIT-ECHELON-PRIMAL-LOGO-LINKS.md` | Draft testing, deployment, troubleshooting, and rollback procedure |
| `docs/SOP-SPLIT-ECHELON-PRIMAL-LOGO-LINKS.pdf` | PDF reference copy of the operating procedure |

## References

[1]: https://shopify.dev/docs/storefronts/themes/tools/cli "Shopify Theme CLI documentation"
[2]: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a "MDN anchor element reference"
[3]: https://developer.mozilla.org/en-US/docs/Web/CSS/position "MDN CSS position reference"
[4]: https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible "MDN :focus-visible reference"

The Shopify and MDN references define the theme deployment workflow, anchor semantics, positioning behavior, and keyboard focus behavior used by this implementation [1] [2] [3] [4].

## Ownership

Nicolas Cartin Reyes, Lead Developer, owns the implementation, release decision, and future maintenance of this change.
