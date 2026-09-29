# Technical Architecture: Dynamic Product Video Metafields

**Author:** Nicolas Cartin Reyes, Lead Developer
**Store:** `primal-strength-us.myshopify.com`
**Storefront:** `us.primalstrength.com`
**Development theme:** `DEV Split Echelon Primal Logo Links - Live Copy` (`160888946787`)
**Production theme:** `primal-strength-us/ux-project - Live` (`142304510051`)

## Purpose

The Primal Strength US default product template now supports one optional product video block that is controlled by product-level metafields. The same product template can be reused across active and future SKUs without hardcoded product handles, SKUs, titles, or video URLs.

The block is rendered inside the existing product-information column. It uses the same product block flow as the title, pricing, purchase controls, quote request, payment information, and product accordions. It does not create a separate product template or a product-specific hardcoded section.

The block is deployed to both the unpublished development theme and the live theme. The live release was limited to the three Product Video implementation files, and the unrelated live theme files were preserved.

## Data contract

Two product metafields provide two supported input methods:

| Admin label | Namespace and key | Shopify type | Purpose |
|---|---|---|---|
| PDP Product Video | `custom.pdp_product_video` | `file_reference` restricted to `Video` | Upload a Shopify-hosted video file from the product record. |
| PDP Product Video Embed URL | `custom.pdp_product_video_embed` | `url` | Store a YouTube or Vimeo URL for an externally hosted video. |

The Shopify-hosted video has priority. If `custom.pdp_product_video` contains a valid video, the embed URL is ignored. If the hosted video is blank, the renderer evaluates `custom.pdp_product_video_embed`. If both values are blank or the URL is not a supported YouTube or Vimeo URL, the entire block is omitted.

The definitions were created with these descriptions:

- `custom.pdp_product_video`: Optional Shopify-hosted video displayed in the product information column. Leave blank to hide the video block.
- `custom.pdp_product_video_embed`: Optional YouTube or Vimeo URL displayed when no Shopify-hosted PDP Product Video is assigned.

## Rendering flow

The existing `main-product` section handles the block type `product_video` in its product-information loop. The product JSON template includes one `product_video` block after the existing product-information accordions. The block settings provide an optional heading and caption, while the product metafields provide the media.

The renderer is `snippets/product-video.liquid`. Its responsibilities are intentionally narrow:

1. Read the two product metafields.
2. Detect YouTube and Vimeo URL formats.
3. Extract the external video ID without relying on a product handle or SKU.
4. Render a Shopify-hosted video with the theme's existing video snippet when a hosted video is assigned.
5. Render a responsive iframe for a supported YouTube or Vimeo URL when no hosted video is assigned.
6. Render nothing when no valid video input exists.

The block uses the current theme's product block classes and design tokens. The external video wrapper maintains a responsive 16:9 aspect ratio, and the iframe includes a descriptive title based on the current product title.

## Supported external URL formats

YouTube URLs supported by the parser include standard watch URLs, shortened `youtu.be` URLs, Shorts URLs, and existing `/embed/` URLs. Vimeo URLs support standard Vimeo URLs and `/video/` URLs. Query strings, fragments, and trailing path segments are removed before the iframe URL is built.

The renderer does not accept arbitrary iframe HTML. Marketing only needs to provide the video URL in the URL metafield.

## Product template placement

The block is placed in the existing right-hand product-information column, below the current purchase and accordion content. This placement corresponds to the product-page area identified for the new content and keeps the primary gallery and purchase controls unchanged.

The product JSON template contains the following block configuration:

```json
"pdp_video": {
  "type": "product_video",
  "settings": {
    "heading": "See it in action",
    "caption": ""
  }
}
```

The section schema exposes the block to the theme editor with a single-instance limit. The media remains product-specific through the metafields, so a new SKU can use the same block without creating a new template.

## Code contract

The core Liquid contract is equivalent to the following:

```liquid
{% liquid
  assign product_video = product.metafields.custom.pdp_product_video.value
  assign embed_url = product.metafields.custom.pdp_product_video_embed.value | strip
%}

{% if product_video != blank %}
  {% render 'video', video: product_video, width: 900, preload: false, controls: true %}
{% elsif embed_url != blank %}
  {%- comment -%}
    Parse a supported YouTube or Vimeo URL, then render a responsive iframe.
  {%- endcomment -%}
{% endif %}
```

The full implementation is maintained in the repository at [`snippets/product-video.liquid`](../snippets/product-video.liquid).

## Extension rules

Future changes must preserve the following boundaries:

- Keep the two metafield keys stable after content is assigned to products.
- Do not hardcode product handles, SKUs, or product titles in the renderer.
- Do not add a generic fallback video when a product has no assigned media.
- Do not move the block into the global layout or create a second product form.
- Do not submit product data or checkout actions from the renderer.
- Keep the hosted video precedence over the external URL.
- Preserve the existing theme video snippet and product-block classes when changing the presentation.
- Validate the change in an unpublished theme before any production deployment.

## Current release status

The metafield definitions exist in the Primal Shopify store. The Product Video block and renderer are deployed to development theme `160888946787` and live theme `142304510051`.

The live deployment included only:

```text
snippets/product-video.liquid
sections/main-product.liquid
templates/product.json
```

The live files were verified against the approved deployment package. A complete pre-release theme pull was compared after deployment with zero unrelated missing or changed files. Future partial pushes must use `--nodelete`.

## References

[1]: https://shopify.dev/docs/api/liquid/objects/metafield "Shopify Liquid metafield object reference"
[2]: https://shopify.dev/docs/api/liquid/objects/video "Shopify Liquid video object reference"
[3]: https://shopify.dev/docs/storefronts/themes/architecture/settings/dynamic-sources "Shopify dynamic sources in themes"
[4]: https://shopify.dev/docs/storefronts/themes/tools/theme-check "Shopify Theme Check documentation"

Shopify's metafield, video, dynamic-source, and Theme Check references define the typed data access and validation model used by this implementation [1] [2] [3] [4].

## Ownership

Nicolas Cartin Reyes, Lead Developer, owns the implementation, release decision, and future maintenance of this change.
