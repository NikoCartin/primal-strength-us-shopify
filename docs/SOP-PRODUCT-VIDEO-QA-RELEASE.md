# SOP: Product Video Development, QA, and Release

**Author:** Nicolas Cartin Reyes, Lead Developer
**Version:** 1.2.0
**Store:** `primal-strength-us.myshopify.com`
**Live theme:** `142304510051`
**Development theme:** `160888946787`

## Objective

This procedure defines how to maintain and release the reusable Product Video block without changing unrelated storefront code. All implementation and validation work must begin in an unpublished theme.

## Scope

The implementation is limited to the following Product Video files and the product metafield definitions:

```text
snippets/product-video.liquid
sections/main-product.liquid
templates/product.json
templates/product.quote.json
```

During development, the change must not modify the live theme, checkout, order data, product pricing, inventory, collections, navigation, global layout, or unrelated product blocks. A live release is allowed only after explicit approval and must remain limited to the four scoped Product Video files.

## Development workflow

1. Pull the current development theme before editing.
2. Confirm that the development theme is unpublished and that the live theme ID remains unchanged.
3. Review the current `main-product` block loop, Product JSON block order, and `product-video` renderer.
4. Make the smallest change that satisfies the requirement.
5. Keep product content in metafields rather than adding product-specific conditions.
6. Run static validation and Theme Check.
7. Push only the affected Product Video files to the development theme.
8. Test the storefront preview on desktop and mobile.
9. Record the result in the release notes.
10. Request explicit approval before any live-theme deployment.
11. Keep a complete pre-release pull of the live theme for rollback and comparison.

## Safe deployment commands

Push only the implementation files to the development theme:

```bash
shopify theme push \
  --store primal-strength-us.myshopify.com \
  --theme 160888946787 \
  --path /path/to/theme-copy \
  --only snippets/product-video.liquid \
  --only sections/main-product.liquid \
  --only templates/product.json \
  --only templates/product.quote.json
```

Use the current Shopify CLI syntax supported by the installed version. If the CLI requires a single `--only` list, pass the three paths using that version's documented format.

Never add the live-theme flag to a development deployment. The production theme is `142304510051` and must remain untouched until approval.

## Safe live deployment

After approval, keep the deployment package limited to these four files:

```text
snippets/product-video.liquid
sections/main-product.liquid
templates/product.json
templates/product.quote.json
```

Create a complete backup of the live theme before deploying. Then push the small package with `--nodelete`:

```bash
shopify theme pull \
  --store primal-strength-us.myshopify.com \
  --theme 142304510051 \
  --path /path/to/live-backup

shopify theme push \
  --store primal-strength-us.myshopify.com \
  --theme 142304510051 \
  --path /path/to/product-video-deploy \
  --nodelete
```

The CLI may warn that the small package is not a complete theme directory. Continue only after checking that the package contains exactly the four approved files. The `--nodelete` flag is mandatory for a partial package because it prevents unrelated live files from being removed.

After the push, pull the live theme again and compare hashes for the four files. Confirm that all other files in the pre-release backup still exist and remain unchanged.

Once the code is live, content editors do not need to deploy the theme for each new video. They only need to save the product metafield described in the Product Video metafield SOP.

## Static checks

At minimum, run:

```bash
shopify theme check --path /path/to/complete-theme-copy --fail-level error
```

The Theme Check copy must contain the complete theme so that Liquid dependencies, snippets, settings, and section schema are available. Do not treat a partial directory as a complete Theme Check result.

Review the output for:

- Liquid syntax errors.
- Invalid section schema JSON.
- Missing snippet references.
- Invalid filters or object access.
- Unescaped product titles or URLs.
- Duplicate or unreachable block logic.

## Browser QA

Use a product with no video first. Confirm that the block is absent and that no blank space remains. Then use a test product with the external URL field populated and confirm the iframe appears. If testing an uploaded video, use a Shopify-hosted video assigned through the `file_reference` field.

Run the following matrix:

| Test | Desktop | Mobile |
|---|---:|---:|
| No video fields | Pass | Pass |
| YouTube URL | Pass | Pass |
| Vimeo URL | Pass | Pass |
| Shopify-hosted video | Pass | Pass |
| Both fields populated | Hosted video wins | Hosted video wins |
| Invalid or unsupported URL | Block hidden | Block hidden |
| Existing add-to-cart and quote controls | Unchanged | Unchanged |
| Existing gallery and accordions | Unchanged | Unchanged |

Also check keyboard focus, iframe title, responsive aspect ratio, lazy loading, and console errors attributable to the Product Video implementation.

## Release acceptance criteria

Do not release the change until all of the following are true:

- The field definitions exist with the expected namespace, key, type, and descriptions.
- The hosted upload field accepts video files only.
- The URL field accepts the approved YouTube or Vimeo URL format.
- The hosted video takes precedence when both inputs are populated.
- Products with no valid media render no video block.
- No product handle, SKU, or product-specific URL is hardcoded in Liquid.
- The Default product and Quote templates remain reusable across products.
- Theme Check reports no Product Video errors.
- Desktop and mobile previews pass.
- Only the approved Product Video files changed in the development theme.
- Live theme `142304510051` contains the approved Product Video implementation.
- No unrelated live files were removed or changed.

## Rollback

If the development preview shows a regression, restore the previous versions of the affected scoped files in the development theme. Push only those files, then repeat the no-video and existing-product smoke tests. Do not roll back unrelated theme files.

If a live release is later approved and causes a regression, restore the pre-release copies of the affected scoped files to the live theme. Record the rollback date, reason, theme ID, and verification result.

## Release record

For every release, record:

- Date and author.
- Store and theme IDs.
- Files changed.
- Metafield definitions changed, if any.
- Test product handles used for QA.
- Desktop and mobile results.
- Theme Check result.
- Reviewer or approver.
- Whether live deployment was approved.

## References

[1]: https://shopify.dev/docs/storefronts/themes/tools/cli "Shopify Theme CLI documentation"
[2]: https://shopify.dev/docs/storefronts/themes/tools/theme-check "Shopify Theme Check documentation"
[3]: https://shopify.dev/docs/api/liquid/objects/metafield "Shopify Liquid metafield object reference"
[4]: https://shopify.dev/docs/storefronts/themes/architecture/settings/dynamic-sources "Shopify dynamic sources in themes"

The deployment, validation, and typed metafield procedures follow Shopify's CLI, Theme Check, Liquid, and dynamic-source documentation [1] [2] [3] [4].

## Ownership

Nicolas Cartin Reyes, Lead Developer, owns this release procedure and the implementation it governs.
