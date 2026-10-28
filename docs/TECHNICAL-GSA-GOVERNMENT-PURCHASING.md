# Technical Architecture: GSA Government Purchasing Landing Page

**Author:** Nicolas Cartin Reyes, Lead Developer
**Store:** `primal-strength-us.myshopify.com`
**Storefront:** `us.primalstrength.com`
**Production page:** `https://us.primalstrength.com/pages/gsa`
**Production theme:** `primal-strength-us/ux-project - Live` (`142304510051`)

## Purpose

This implementation provides a dedicated Shopify page template for government purchasing information. The page separates contract details, purchase steps, contact actions, and the contract-holder disclaimer from catalog and checkout templates.

The rendered page is published at the `gsa` handle and uses the `gsa` template suffix. Its Shopify page body is intentionally empty because all presentation content is controlled by the theme template and section settings.

## Theme files

| Path | Responsibility |
|---|---|
| `sections/gsa-government-purchasing.liquid` | Renders the page layout, editable schema settings, purchase-step blocks, contact actions, responsive styles, and accessibility attributes. |
| `templates/page.gsa.json` | Assigns the GSA section, configures the three purchase steps, and supplies the page-specific contract URL and contact values. |

The two files are a deployment unit. Do not deploy one without the other.

## Shopify page record

The associated Shopify page requires the following configuration:

| Field | Value |
|---|---|
| Title | `Government Purchasing (GSA)` |
| Handle | `gsa` |
| Template suffix | `gsa` |
| Body | Empty |
| Visibility | Published |
| Navigation | No menu link is configured |

The page URL is generated from the handle: `/pages/gsa`.

## Rendering model

`page.gsa.json` creates a single section instance named `gsa`. The section has three content areas:

1. **Contract details**: reads the contract-holder, contract number, UEI, category, contract period, and external GSA Advantage URL from section settings.
2. **How to purchase**: renders ordered `step` blocks from the template JSON in `block_order` sequence.
3. **Government purchasing contact**: reads the contact name, title, email, phone, and address from section settings.

The section schema supplies default public contract context. The template JSON supplies the deployment-specific URL, contact details, and three ordered purchase steps. This keeps page-level configuration separate from Liquid markup.

## Responsive behavior

The layout uses a one-column grid by default. At `750px` and above, the contract-details card and purchase-steps card render in two columns. The contact card remains full width below the grid.

At mobile widths, the contract definition list changes from a two-column label/value grid to a single-column sequence. The contact actions use a wrapping flex container and each action maintains a minimum height of `44px`.

## Link and contact behavior

The GSA Advantage link is conditional on `terms_url` and uses:

```html
<a target="_blank" rel="noopener">
```

The contact actions are generated from configuration:

```liquid
mailto:{{ section.settings.contact_email }}
tel:{{ section.settings.contact_phone | remove: ' ' | remove: '(' | remove: ')' | remove: '-' }}
```

The email action includes a prefilled subject containing the GSA contract number. The phone action strips display formatting only for the `tel:` value and retains the formatted number in visible text.

## Configuration boundaries

- Keep the dedicated `gsa` page template independent of product, collection, cart, and checkout templates.
- Keep the GSA contract holder and availability disclaimer in the section settings. Do not introduce claims that all products are available through the contract.
- Preserve `target="_blank"` and `rel="noopener"` on the contract terms link.
- Do not add the page to storefront navigation unless navigation is separately approved.
- Do not replace the empty page body with duplicate HTML. Theme JSON and Liquid remain the source of rendered content.

## Deployment procedure

Validate and stage the two files in an unpublished development theme before production release.

```bash
shopify theme push \
  --store primal-strength-us.myshopify.com \
  --theme <unpublished-theme-id> \
  --only sections/gsa-government-purchasing.liquid \
  --only templates/page.gsa.json \
  --nodelete
```

After development QA, deploy the identical two-file package to the live theme:

```bash
shopify theme push \
  --store primal-strength-us.myshopify.com \
  --theme 142304510051 \
  --only sections/gsa-government-purchasing.liquid \
  --only templates/page.gsa.json \
  --nodelete \
  --allow-live
```

Create or update the Shopify page record separately. Confirm the page uses template suffix `gsa`, is published, and has no body content or navigation change.

## QA checklist

1. Load `https://us.primalstrength.com/pages/gsa` and confirm an HTTP 200 response.
2. Verify the public heading, contract details, purchase steps, contact information, and disclaimer.
3. Verify the GSA Advantage link uses the configured URL, opens in a new tab, and has `rel="noopener"`.
4. Verify the email action uses the configured mailto address and the phone action uses the configured telephone value.
5. Test desktop layout at a viewport of at least `1280px`: contract details and purchase steps must display as two columns.
6. Test mobile layout at approximately `390px`: the GSA section must display one card column with no section-level horizontal overflow or clipped content.
7. Confirm no storefront navigation link points to `/pages/gsa` unless explicitly required.
8. Pull the two live theme files and compare the section source plus normalized template JSON to the approved deployment package.

## Rollback

Keep a duplicate of the pre-release live theme until production QA is complete. To remove the public page without deleting source files, unpublish the Shopify page or change its template suffix only after confirming the intended fallback behavior.

Do not delete `templates/page.gsa.json` while a published page still uses the `gsa` template suffix. If a source rollback is required, restore the approved pre-release theme state and verify that the page record does not reference a missing template.

## Ownership

Nicolas Cartin Reyes, Lead Developer, owns the implementation, release decision, and future maintenance of this page template.
