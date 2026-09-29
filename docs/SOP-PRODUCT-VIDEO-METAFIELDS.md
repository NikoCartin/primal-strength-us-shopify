# SOP: Configure Dynamic Product Videos

**Author:** Nicolas Cartin Reyes, Lead Developer
**Version:** 1.0.0
**Store:** `primal-strength-us.myshopify.com`
**Audience:** Shopify developers and authorized product-content editors

## Objective

Use the existing default product template to show an optional product video without creating a new template or hardcoding a product-specific section. Each product can use either a Shopify-hosted upload or a YouTube/Vimeo link.

## Field selection

Use one of these fields on the product record:

| Requirement | Field | Input |
|---|---|---|
| Upload a video file to Shopify | **PDP Product Video** | Select a supported video file. |
| Embed a video hosted on YouTube or Vimeo | **PDP Product Video Embed URL** | Paste the full video URL. |

If both fields contain values, the uploaded Shopify-hosted video is displayed and the URL is ignored. This allows a hosted file to override an external link without deleting the link.

## Configure a product

1. Open the intended product in Shopify Admin.
2. Scroll to **Product metafields**.
3. To upload a file, use **PDP Product Video** and select the product video from the file picker.
4. To use an external video, use **PDP Product Video Embed URL** and paste the full YouTube or Vimeo URL.
5. Save the product.
6. Open the product in the development-theme preview.
7. Confirm the video appears in the product-information column below the existing product controls and accordions.

A marketing user does not need to edit Liquid, JSON templates, JavaScript, or CSS to assign a new video.

## Recommended URL format

Use the canonical public video URL, for example:

```text
https://www.youtube.com/watch?v=VIDEO_ID
https://youtu.be/VIDEO_ID
https://vimeo.com/VIDEO_ID
```

Do not paste an entire iframe element. Do not paste a playlist URL unless the renderer has been explicitly extended to support playlists.

## Empty-field behavior

Leave both fields empty when a product does not have a suitable video. The renderer then omits the block completely. It does not output an empty player, placeholder image, blank section, or generic fallback video.

This behavior is required for products that do not yet have approved media.

## Content requirements

Before assigning a video, confirm that:

- The video belongs to the product or its product family.
- The video is approved for the Primal Strength US storefront.
- The video is publicly viewable when using the external URL field.
- The thumbnail and title are appropriate for customer-facing use.
- The video does not expose internal, private, or unapproved information.
- The video URL is a single YouTube or Vimeo video URL.

## QA checklist

After saving a field, verify the following in the unpublished development preview:

- The product page loads without a Liquid error.
- The video block appears when a valid field is populated.
- The hosted upload displays controls and remains inside the product-information column.
- A YouTube or Vimeo URL renders inside the responsive player.
- The product title is used as the iframe title for accessibility.
- The video is not duplicated elsewhere on the product page.
- A product with both fields uses the hosted upload.
- A product with both fields empty has no empty video space.
- The block remains usable on desktop and mobile widths.
- The gallery, price, purchase controls, quote flow, financing widgets, and accordions remain unchanged.

## Troubleshooting

### The block does not appear

Confirm that the product was saved with the correct namespace and key. The supported fields are `custom.pdp_product_video` and `custom.pdp_product_video_embed`. Check that the product is being viewed through the development theme preview rather than the live theme.

### A URL does not render

Confirm that the URL is from YouTube or Vimeo and contains a video ID. Remove playlist parameters, tracking fragments, and copied iframe markup. If the URL is valid but still fails, record the URL format and test it in the renderer without changing the metafield contract.

### The wrong video appears

If both fields are populated, the Shopify-hosted upload takes precedence. Clear or replace the hosted file if the external URL should be used instead.

### A blank area remains

The Liquid condition should omit the entire block when no valid media exists. Check that the development theme contains the current `snippets/product-video.liquid` renderer and that the product JSON includes only one `product_video` block.

## Change control

Do not create a new product template for a new video. Do not add a product handle or SKU condition. If a new provider, video format, or placement is required, create a separate development task and update the technical architecture document before implementation.

## References

[1]: https://shopify.dev/docs/api/liquid/objects/metafield "Shopify Liquid metafield object reference"
[2]: https://shopify.dev/docs/api/liquid/objects/video "Shopify Liquid video object reference"
[3]: https://shopify.dev/docs/storefronts/themes/architecture/settings/dynamic-sources "Shopify dynamic sources in themes"

The supported fields and typed Liquid access follow Shopify's documented metafield, video, and dynamic-source behavior [1] [2] [3].

## Ownership

Nicolas Cartin Reyes, Lead Developer, owns this procedure and its future revisions.
