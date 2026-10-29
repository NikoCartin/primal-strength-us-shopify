# Technical Record: ADA / WCAG 2.2 AA Theme Remediation

**Author:** Nicolas Cartin Reyes, Lead Developer
**Store:** `primal-strength-us.myshopify.com`
**Storefront:** `us.primalstrength.com`
**Production theme:** `primal-strength-us/ux-project - Live` (`142304510051`)
**Deployed:** October 29, 2026

## Purpose

Bring the key Primal Strength US storefront pages to 0 automated WCAG 2.2 AA violations, and add an accessibility options launcher like the one on the Echelon storefronts.

## Baseline issues and fixes

| WCAG rule | Where | Issue | Fix |
|---|---|---|---|
| frame-title (4.1.2) | All pages | HappyFox chat iframe had no `title` | `assets/accessibility-launcher.js` sets `title="Chat with Primal Strength support"` when the late-loading iframe appears |
| nested-interactive (4.1.2) | Home | Video poster button contained focusable children and had an empty label | `sections/image-with-text-new.liquid`: decorative poster content marked `aria-hidden`, label from image alt or section heading |
| nested-interactive (4.1.2) | Contact FAQ | `<details role="tab">` with focusable content and duplicate `id`s | `sections/faq.liquid`, `snippets/component-faq.liquid`: native details/summary, unique ids |
| target-size (2.5.8) | Contact | Phone and email links under 24px | `assets/component-image-with-text.css`: contact-link targets at least 24px |
| aria-required-children (1.3.1) | Collections | Sort dropdown `<details role="listbox">` contained a `summary` | `snippets/facets.liquid` |
| color-contrast (1.4.3) | Product pages | Compare-at price below 4.5:1 | `assets/main-product.css`: `.price-compare` set to `#595959` |
| target-size (2.5.8) | Product pages, mobile | 8px gallery pagination dots | `assets/global.css`: 8px dot with 8px padding gives a 24px target on mobile |
| Accessibility launcher | Site | No accessibility options button | `snippets/accessibility-launcher.liquid` and `assets/accessibility-launcher.js`, rendered once before `</body>` in `layout/theme.liquid`. `snippets/pagination.liquid` was also part of the approved release |

## Theme files (11)

1. `layout/theme.liquid`
2. `snippets/accessibility-launcher.liquid`
3. `assets/accessibility-launcher.js`
4. `sections/image-with-text-new.liquid`
5. `sections/faq.liquid`
6. `snippets/component-faq.liquid`
7. `snippets/facets.liquid`
8. `assets/global.css`
9. `assets/main-product.css`
10. `snippets/pagination.liquid`
11. `assets/component-image-with-text.css` (follow-up correction for the mobile Contact link target size)

**Repository note:** third-party identifiers in `layout/theme.liquid` are replaced with placeholders (`{{ META_PIXEL_ID }}`, `{{ BUGHERD_API_KEY }}`, `{{ HAPPYFOX_BOT_EMBED_TOKEN }}`). Restore the real values from the live theme before deploying this file. The other 10 files are byte-identical to production.

## Accessibility launcher

- Fixed to the right edge with an Echelon-style blue tab; the icon and "Accessibility" label are white on blue.
- Options: text size, high contrast, underline links, readable font and reduce motion, saved in `localStorage`.
- Keyboard: Enter or Space opens it, Escape closes it and returns focus to the launcher.
- It is a convenience for user preferences. It does not replace accessible theme code.

## Deployment

- Work was done on a development theme and approved before release.
- A full backup theme of live was created immediately before the release.
- The live push was limited to the approved files with `--only`, `--nodelete` and `--allow-live`. No other theme files were uploaded or deleted.
- After the push, each file was pulled back from live and matched the approved source byte for byte.

### Production SHA-256 (live theme, October 29, 2026)

```
f7ad56e3232e40d2ea46323e8ec6ed01489129ee16b65c493670e3f0f0274f14  layout/theme.liquid (live copy, before placeholder redaction)
a62e4effe7bc0c23befb7ae052ea6fe6741645bf7b91fe78e114aa93846b13d7  snippets/accessibility-launcher.liquid
45858d510cb910f82bfb8171a3263e202f368e52193ac19f36ad82d54b1788af  assets/accessibility-launcher.js
5656e0991e5785f430ae9c7984130b2da8231f1cc424e80047a626b085651d7a  sections/image-with-text-new.liquid
ec98578a231a7f7d15f263f8436550752e1fe772687c2361618280b24abcf4d9  sections/faq.liquid
ead62a3519dcf57382f680f2bbb34b6c83bb037b400d0713ead021fe39f36643  snippets/component-faq.liquid
fb612fd5fc22b29391d2beba96b3fe40cd94b9dac338376af3752b002a06bb56  snippets/facets.liquid
c444ba010dbad460ece6a9901b6381ebcda0010b12c71e959265051a9547fedd  assets/global.css
cfc6ac12c9dbea9b3111fcf490fa22feeab57f166c777a8837f85e03b4a1084d  assets/main-product.css
e1b9e3dec2f1defd9998d1004f92db3116a6ab8b829c31a321b08083473735dd  snippets/pagination.liquid
b6e501a6e5ae2c8608607feb8e50eab323c55764a0c15939973b253463cfae74  assets/component-image-with-text.css
```

## Live QA

- Tool: axe-core 4.10.3, tags `wcag2a`, `wcag2aa`, `wcag21a`, `wcag21aa`, `wcag22aa`.
- Viewports: desktop 1440 x 900 and mobile 390 x 844.
- Routes: homepage, New In collection, All collection, two product pages, cart, search, Contact and GSA.
- Result: 18 of 18 route and viewport checks with 0 violations.
- Contact mobile: phone link 124 x 26px, email link 124 x 25px.
- HappyFox iframe title verified in production.
- Full report: [QA-ADA-WCAG22-LIVE-DEPLOYMENT.pdf](QA-ADA-WCAG22-LIVE-DEPLOYMENT.pdf)

## Not included in this release

- The Shopify page "Accessibility Statement" is still an unpublished draft, so `/pages/accessibility-statement` returns 404.
- No footer link to the statement has been added.
- Both are Shopify Admin and navigation actions, not theme code.

## Rollback

Restore the 11 files from the pre-release backup theme with a scoped push (`--only <file> --nodelete --allow-live`), then pull back and verify.
