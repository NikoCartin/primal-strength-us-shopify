# Changelog

## 1.2.0, September 29, 2026

**Author:** Nicolas Cartin Reyes, Lead Developer

Released the Product Video block to the live Primal Strength US theme `142304510051` after restoring the complete pre-release theme snapshot and verifying the final state. The live release contained only `snippets/product-video.liquid`, `sections/main-product.liquid`, and `templates/product.json`.

The deployment used `--nodelete`. A complete post-release pull confirmed that all three approved files matched the deployment package and that no unrelated live files were missing or changed. The product-content workflow is now documented: saving a product video metafield updates the PDP without another theme deployment.

## 1.1.0, September 29, 2026

**Author:** Nicolas Cartin Reyes, Lead Developer

Added a reusable Product Video block for the default Primal Strength US product template in development theme `160888946787`. The block reads the product metafields `custom.pdp_product_video` and `custom.pdp_product_video_embed`, supports Shopify-hosted video files plus YouTube and Vimeo URLs, gives hosted video precedence, and hides itself when no valid media is assigned.

Added the technical architecture document, product setup SOP, development and QA release SOP, and the Liquid renderer reference. At this stage, the live theme `142304510051` had not yet received the Product Video implementation.

## 1.0.0, September 23, 2026

**Author:** Nicolas Cartin Reyes, Lead Developer

Added the split-link implementation for the combined Echelon and PRIMAL header logo on Primal Strength US. The visible inline SVG remains unchanged. The Echelon region opens `https://echelonfit.com/`, and the PRIMAL region remains on the Primal Strength US homepage through Shopify's root route.

The release includes the complete `sections/header.liquid` source, the technical architecture document, the draft-theme testing and deployment SOP, and the PDF SOP reference. The implementation is scoped to one Shopify section and does not modify other storefront behavior.
