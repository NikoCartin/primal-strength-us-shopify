![Primal Strength](banner.jpg)

# Primal Strength US — Shopify Theme Customizations

**Live Store:** [us.primalstrength.com](https://us.primalstrength.com)

This repository contains the custom Liquid snippets, JavaScript assets, and email templates developed for the Primal Strength US Shopify storefront (`us.primalstrength.com`). These modifications resolve critical storefront bugs, adapt UK-specific features for the US market, and integrate third-party financing solutions.

---

## Key Fixes and Features

### 1. Storefront Availability and Add-to-Cart Fix

Resolved an issue where products were incorrectly displaying as "Sold Out" and preventing users from adding items to the cart, despite having inventory available in the US distribution center.

**Root Cause:** Products were stocked in the "USA - BNB DISTRIBUTIONS" location, which was not enabled for online order fulfillment in Shopify Settings. Once the location was enabled, the following code fixes ensured the storefront accurately reflected product availability.

**Files modified:**

| File | Change |
|------|--------|
| `snippets/buy-button.liquid` | Removed hardcoded `disabled` and "Out of stock" conditions so the button consistently renders "Add to Cart" |
| `assets/gaia-product-form.min.js` | Updated JavaScript validation to check `inventory_policy !== "continue"`, preventing the script from blocking the add-to-cart action |
| `snippets/card-badges.liquid` | Fixed a broken Liquid condition (`{%- if false -%}`) and restored the dynamic `{%- if card_product.available == false -%}` logic so the "Sold Out" badge only appears when a product is genuinely unavailable |

---

### 2. ChargeAfter Financing Integration

Implemented the ChargeAfter promotional widget to display dynamic monthly payment options on product detail pages, consistent with the integration used on `echelonfit.com`.

**Files added:**

| File | Description |
|------|-------------|
| `snippets/charge-after-widget.liquid` | Contains the ChargeAfter SDK initialization script. Included globally via `layout/theme.liquid` |
| `snippets/financing-widget.liquid` | Contains the `ca-promotional-widget` HTML structure, dynamically passing the product SKU and price to the ChargeAfter API |

**Note:** The ChargeAfter integration requires a valid merchant API key authorized for the `us.primalstrength.com` domain. The current API key is scoped to Echelon's merchant account and will not render on the Primal domain until a separate ChargeAfter merchant account is established.

The existing `snippets/finance.liquid` was also refactored to remove UK-specific references (Klarna, V12 Finance) and integrate the new US financing widget.

---

### 3. Dynamic Product Video Metafields

Added a reusable Product Video block to the default product template in the development theme. Each product can now use either a Shopify-hosted video upload or a YouTube/Vimeo URL without creating a product-specific template or hardcoded product condition.

The implementation uses these product metafields:

| Admin label | Namespace and key | Type |
|------|------|------|
| PDP Product Video | `custom.pdp_product_video` | `file_reference`, video files only |
| PDP Product Video Embed URL | `custom.pdp_product_video_embed` | `url` |

The uploaded Shopify-hosted video takes priority. When neither field contains valid media, the block is omitted completely. The implementation is deployed to the unpublished development theme `160888946787`; the live theme `142304510051` remains unchanged.

**Documentation:**

- [Technical architecture](docs/TECHNICAL-PRODUCT-VIDEO-METAFIELDS.md)
- [Product setup SOP](docs/SOP-PRODUCT-VIDEO-METAFIELDS.md)
- [Development, QA, and release SOP](docs/SOP-PRODUCT-VIDEO-QA-RELEASE.md)
- [Liquid renderer reference](snippets/product-video.liquid)

---

### 4. Split Echelon and PRIMAL Logo Links

The Primal header uses one combined inline SVG containing the Echelon and PRIMAL wordmarks. The implementation preserves that visual mark and adds two accessible anchor regions so each brand can be selected independently. The Echelon region opens `https://echelonfit.com/`, while the PRIMAL region remains on the Primal Strength US homepage through Shopify's `routes.root_url`.

The implementation is limited to `sections/header.liquid`. It branches only when `section.settings.logo_svg` is populated, keeps the existing image and text fallback behavior unchanged, and does not use JavaScript for navigation. The `49.7%` and `50.3%` regions are based on the current SVG divider geometry. The CSS includes explicit pointer-event and positioning protections for the theme's transparent-header behavior.

**Documentation:**

- [Technical architecture](docs/TECHNICAL-SPLIT-ECHELON-PRIMAL-LOGO-LINKS.md)
- [Deployment and rollback SOP](docs/SOP-SPLIT-ECHELON-PRIMAL-LOGO-LINKS.md)
- [PDF SOP reference](docs/SOP-SPLIT-ECHELON-PRIMAL-LOGO-LINKS.pdf)
- [Complete `header.liquid` source](sections/header.liquid)

---

### 5. Order Confirmation Email Template

Adapted the default Shopify order confirmation email to reflect Primal Strength US shipping policies and contact information.

**File modified:** `templates/order-confirmation-email.html`

Changes include:
- Updated dispatch time to 2–3 business days
- Added carrier-specific delivery expectations: FedEx Ground (5–7 business days) for orders under 150 lbs, and FedEx Freight (10–14 business days) for orders over 150 lbs
- Updated customer service contact to `cs@echelonfit.com` and the Echelon support portal (`support.echelonfit.com/new`)

---

## Repository Structure

```
├── assets/
│   └── gaia-product-form.min.js       # JavaScript form validation fix
├── sections/
│   └── header.liquid                  # Split Echelon and PRIMAL logo links
├── snippets/
│   ├── buy-button.liquid              # Add to Cart button logic
│   ├── card-badges.liquid             # Dynamic Sold Out badge
│   ├── charge-after-widget.liquid     # ChargeAfter SDK initialization
│   ├── financing-widget.liquid        # PDP promotional financing widget
│   └── product-video.liquid           # Dynamic hosted or YouTube/Vimeo product video
├── templates/
│   └── order-confirmation-email.html  # Customized order confirmation email
├── docs/
│   ├── TECHNICAL-SPLIT-ECHELON-PRIMAL-LOGO-LINKS.md
│   ├── SOP-SPLIT-ECHELON-PRIMAL-LOGO-LINKS.md
│   ├── TECHNICAL-PRODUCT-VIDEO-METAFIELDS.md
│   ├── SOP-PRODUCT-VIDEO-METAFIELDS.md
│   ├── SOP-PRODUCT-VIDEO-QA-RELEASE.md
│   ├── SOP-SPLIT-ECHELON-PRIMAL-LOGO-LINKS.pdf
│   └── CHANGELOG.md
├── banner.jpg
└── README.md
```

---

## Deployment

All files in this repository correspond directly to their respective paths in the active Shopify theme (`ux-project/Live`). Files should be copied into the matching directories within the Shopify theme code editor.
