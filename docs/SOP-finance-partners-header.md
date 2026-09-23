# SOP: Finance Partners Integration in Primal Strength US

**Version:** 1.0
**Date:** September 2, 2026
**Author:** Nicolas Cartin Reyes, Lead Developer
**Store:** [us.primalstrength.com](https://us.primalstrength.com)
**Theme:** `primal-strength-us/ux-project - Live` (`142304510051`)

## 1. Objective

This procedure documents the installation of the Finance Partners script in the global header of the Primal Strength US storefront. Finance Partners provided the script for use on both the Echelon and Primal Strength websites, with landing-page presentation handled according to each corresponding website.

> The existing financing tab was not modified. This change is limited to loading the Finance Partners integration script in the global theme header.

## 2. Implemented Change

The updated theme file is:

```text
layout/theme.liquid
```

The following element was added inside the `<head>` element, immediately after the existing global scripts:

```html
<script type="text/javascript" src="https://integration.financepartners.com/ascstart.js?acv=92914413-cfea-4160-87af-e38b55aaf816" id="acapital"></script>
```

Placing the script in `layout/theme.liquid` makes it available in the global theme layout rather than requiring separate insertion into individual page templates. Shopify documents that layout files define the overall HTML structure of a theme and that `theme.liquid` is the primary storefront layout [1].

## 3. Scope and Security Controls

The modification was intentionally limited to one theme file and one script element. No product templates, forms, snippets, styles, financing-tab content, pricing content, or Klaviyo integrations were changed.

The Theme Access credential was used temporarily for deployment and removed after verification. No credentials, tokens, or secrets were added to the repository.

| Item | Result |
|---|---|
| Modified file | `layout/theme.liquid` |
| Finance Partners scripts added | 1 |
| Script ID | `acapital` |
| Existing financing tab | Unchanged |
| Forms and Klaviyo | Unchanged |
| Credentials committed to the repository | None |

## 4. Pre-Deployment Validation

Before publishing, the complete Finance Partners script URL was confirmed to appear exactly once in the local file, and the script element was confirmed to be inside `<head>`. The deployment was restricted to `layout/theme.liquid`, preventing unrelated theme files from being uploaded.

## 5. Post-Deployment Verification

The public [Primal Strength US storefront](https://us.primalstrength.com) was requested after deployment. The verification confirmed the following:

| Test | Result |
|---|---:|
| Script URL present in public HTML | Yes |
| Script located inside `<head>` | Yes |
| Script URL occurrences | 1 |
| `acapital` ID occurrences | 1 |
| Live theme updated | Yes |

These checks confirm that the Finance Partners script is loaded once in the public storefront header.

## 6. Rollback Procedure

If Finance Partners requests removal of the integration, delete the script element shown in Section 2 from `layout/theme.liquid` and deploy only that file to the live theme. Then request the public storefront HTML and confirm that the Finance Partners URL and the `acapital` ID no longer appear.

Do not remove or modify the existing financing tab as part of this rollback unless the site owner submits a separate request.

## 7. Future Maintenance

If Finance Partners provides a replacement URL, a new `acv` value, or a new identifier, change only the relevant attributes in the integration element, confirm that exactly one occurrence remains, and repeat the public verification described in Section 5. Any change to the financing tab, copy, pricing, or financing user experience requires a separate request and validation.

## References

[1]: https://shopify.dev/docs/storefronts/themes/architecture/layouts "Shopify Developer Documentation — Layouts"

[2]: https://integration.financepartners.com/ascstart.js?acv=92914413-cfea-4160-87af-e38b55aaf816 "Finance Partners — Integration Script URL"
