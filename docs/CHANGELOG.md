# Changelog

## 1.1.0, September 29, 2026

**Author:** Nicolas Cartin Reyes, Lead Developer

Added a reusable Product Video block for the default Primal Strength US product template in development theme `160888946787`. The block reads the product metafields `custom.pdp_product_video` and `custom.pdp_product_video_embed`, supports Shopify-hosted video files plus YouTube and Vimeo URLs, gives hosted video precedence, and hides itself when no valid media is assigned.

Added the technical architecture document, product setup SOP, development and QA release SOP, and the Liquid renderer reference. The live theme `142304510051` was not changed by this implementation.

## 1.0.0, September 23, 2026

**Author:** Nicolas Cartin Reyes, Lead Developer

Added the split-link implementation for the combined Echelon and PRIMAL header logo on Primal Strength US. The visible inline SVG remains unchanged. The Echelon region opens `https://echelonfit.com/`, and the PRIMAL region remains on the Primal Strength US homepage through Shopify's root route.

The release includes the complete `sections/header.liquid` source, the technical architecture document, the draft-theme testing and deployment SOP, and the PDF SOP reference. The implementation is scoped to one Shopify section and does not modify other storefront behavior.
