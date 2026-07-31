# Primal Strength US - Shopify Theme Customizations

This repository contains the custom Liquid snippets, JavaScript, and email templates developed for the Primal Strength US Shopify storefront. These modifications resolve critical storefront bugs, adapt UK-specific features for the US market, and integrate third-party financing solutions.

## 🛠️ Key Fixes & Features

### 1. "Sold Out" Button & Inventory Fix
Resolved an issue where products were incorrectly displaying as "Sold Out" and preventing users from adding items to the cart, despite having inventory in the US distribution center.

**Files modified:**
- `snippets/buy-button.liquid`: Removed hardcoded `disabled` and "Out of stock" conditions so the button always reads "Add to Cart".
- `assets/gaia-product-form.min.js`: Updated the JavaScript validation to check `inventory_policy !== "continue"` to prevent the script from blocking the add-to-cart action.
- `snippets/card-badges.liquid`: Fixed a broken Liquid condition (`{%- if false -%}`) and restored the dynamic `{%- if card_product.available == false -%}` logic so the "Sold Out" badge only appears when genuinely out of stock.

**Root Cause Resolved:** 
Products were stocked in "USA - BNB DISTRIBUTIONS", but this location was not enabled for online fulfillment in Shopify Settings. Once enabled, the UI fixes ensured the storefront accurately reflected availability.

### 2. ChargeAfter Financing Integration
Implemented the ChargeAfter promotional widget to display dynamic monthly payment options (e.g., Bread Pay, Katapult) on product pages.

**Files added/modified:**
- `snippets/charge-after-widget.liquid`: New snippet containing the ChargeAfter SDK initialization script and API key. Included globally via `theme.liquid`.
- `snippets/financing-widget.liquid`: New snippet containing the `ca-promotional-widget` HTML structure, dynamically passing the product SKU and price to the ChargeAfter API.
- `snippets/finance.liquid`: Cleaned up the existing UK-centric finance block (removed Klarna and V12 references) and integrated the new US `financing-widget.liquid`.

### 3. Order Confirmation Email Template
Adapted the default Shopify order confirmation email to reflect Primal Strength US shipping policies and contact information.

**Files modified:**
- `templates/order-confirmation-email.html`: 
  - Updated dispatch times to 2–3 business days.
  - Added specific FedEx Ground (5–7 days) and FedEx Freight (10–14 days) expectations based on order weight (150 lbs threshold).
  - Updated customer service contact information to `support@echelonfit.com` and the Echelon support portal.

## 📁 Repository Structure

```
├── assets/
│   └── gaia-product-form.min.js      # JS form validation fixes
├── snippets/
│   ├── buy-button.liquid             # Add to cart button logic
│   ├── card-badges.liquid            # Dynamic sold out badges
│   ├── charge-after-widget.liquid    # ChargeAfter SDK init
│   └── financing-widget.liquid       # PDP promotional widget
├── templates/
│   └── order-confirmation-email.html # Customized email template
└── README.md
```

## 🚀 Deployment
These files should be copied directly into the corresponding directories of the active Shopify theme (`ux-project/Live`).

*Note: The ChargeAfter integration requires a valid merchant API key authorized for the `us.primalstrength.com` domain to render the promotional widget successfully.*
