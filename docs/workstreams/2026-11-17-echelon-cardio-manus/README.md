# Echelon cardio on Primal US: Manus implementation handoff

Prepared for Nico on November 17, 2026. This is a research and implementation brief, not a deployment authorization or a claim that the products have been added.

## Instructions to Manus

Add the five approved Echelon cardio models to Primal US as native Shopify products with native Primal cart and checkout. Use this handoff as the content and asset starting point, check current records before creating duplicates, prepare the changes privately, and return desktop/mobile previews to Nico before publishing anything.

- **Destination:** [Primal Strength US](https://us.primalstrength.com/), Shopify store `primal-strength-us.myshopify.com`.
- **Source:** [Echelon Fit US](https://echelonfit.com/), regular new-equipment product records listed here, not certified-open-box, partner, or Black Friday duplicate records.
- **Approved selection:** Connect EX-Pro, Connect EX-5s-22, Stride-9s Pro, Stride-8s, and Row-s.
- **Approved commerce:** Same equipment prices as echelonfit.com; customers buy on Primal, not an outbound purchase redirect.
- **Approved placement:** Cardio navigation and collection. Reuse an appropriate existing Cardio destination rather than adding a duplicate.
- **Publication gate:** Stop after private preparation and previews. Nico's explicit sign-off is required before live changes.

## Lou's request and confirmed decisions

The latest reminder is Lou's November 17, 2026 email, subject “cardio items”: “can you add echelon cardio items we discussed adding to primal.” Nico replied “Working on it, will get those added. Thanks,” in that thread.

The original October 29 email, subject “cardio on the primal site,” says:

> on primal site Lets put.
>
> Ex Pro bike, and the Ex5s
> 9 and 8 tread
> 5s rower

Nico clarified the exact model names, same-price versus Primal pricing, native Primal checkout versus an outbound link, and a new Cardio menu/collection. Lou answered on November 3:

> yes.  Same prices.   Yes buy on primal site.   Yes Cardio menu is fine

Treat the clarified five-model list as approved; do not substitute a Row-4s-10, Row-7s, EX-8s bike, used product, or a different treadmill. Do not re-open these four answered scope questions.

Email provenance for internal lookup: latest thread `1a1eb414c8ba8393`; original request `1a188382c4499bef`; clarification thread `1a18906e00d0c2f7`; Lou's approval message `1a1a29f328f198eb`. These are message identifiers, not fabricated public URLs; no attachments were returned with the relevant messages.

## Current Primal state and reuse rules

Primal's homepage already exposes Cardio-related destinations, including `/collections/home-cardio`, `/collections/hiit-cardio`, and `/collections/commercial-cardio`; the existing home-cardio destination is titled “Cardio” and currently lists HIIT Cardio Package and Elliptical Trainer. Preserve these products and existing navigation relationships when adding the Echelon range. ([Primal homepage](https://us.primalstrength.com/), [existing Cardio collection](https://us.primalstrength.com/collections/home-cardio))

The public Shopify catalog returned 250 products on page 1, 26 on page 2, and none on page 3, with no match for Echelon, Stride, Row-s, EX-5 or EX-Pro in titles, handles, or SKUs. This is a public-catalog duplicate check only, not proof that no draft, archived, unpublished, or differently named records exist. ([Primal catalog page 1](https://us.primalstrength.com/products.json?limit=250&page=1), [page 2](https://us.primalstrength.com/products.json?limit=250&page=2), [page 3](https://us.primalstrength.com/products.json?limit=250&page=3))

- **Admin duplicate check:** Search all product statuses by exact SKU and barcode before creation, and record destination IDs. If a matching product exists, update only the approved fields on that record.
- **Collection reuse:** Recommended implementation is to use the existing Cardio collection as the primary landing, adding the five models without dropping its current items. This reuse choice is a recommendation, not an additional decision quoted from Lou.
- **Discount interaction:** Primal currently advertises automatic 10% off orders of $500+ and 15% off orders of $1,500+; verify whether the new Echelon items are eligible before launch because the resulting checkout prices may no longer match Echelon. Do not change discount eligibility globally or assume Lou approved extra stacking. ([Primal homepage](https://us.primalstrength.com/))
- **Shipping claims:** Do not inherit the site's general “in-stock items ship within 24 hours” wording for Echelon equipment without operations confirmation. ([Primal homepage](https://us.primalstrength.com/))

## Product and price import map

All prices below are USD equipment-only snapshots retrieved November 17, 2026. Refresh the exact source variant immediately before preview approval and again before launch; these are not permanent prices or membership-inclusive totals.

| Approved model | Exact source SKU | Barcode | Equipment price | Source compare-at | Public availability |
|---|---|---|---|---|---|
| [Connect EX-Pro](https://echelonfit.com/products/echelon-ex-pro) | `ECH01-EX-PRO-24` ([Echelon product data](https://echelonfit.com/products/echelon-ex-pro.js)) | `813061025864` ([Echelon product data](https://echelonfit.com/products/echelon-ex-pro.js)) | $4,599.99 ([Echelon product data](https://echelonfit.com/products/echelon-ex-pro.js)) | 0 in source; leave destination compare-at blank ([Echelon product data](https://echelonfit.com/products/echelon-ex-pro.js)) | Available ([Echelon product data](https://echelonfit.com/products/echelon-ex-pro.js)) |
| [Connect EX-5s-22](https://echelonfit.com/products/echelon-smart-connect-bike-ex5s-w-free-membership) | `ECH01-EX5s` ([Echelon product data](https://echelonfit.com/products/echelon-smart-connect-bike-ex5s-w-free-membership.js)) | `813061025024` ([Echelon product data](https://echelonfit.com/products/echelon-smart-connect-bike-ex5s-w-free-membership.js)) | $999.99 ([Echelon product data](https://echelonfit.com/products/echelon-smart-connect-bike-ex5s-w-free-membership.js)) | $1,699.99 ([Echelon product data](https://echelonfit.com/products/echelon-smart-connect-bike-ex5s-w-free-membership.js)) | Available ([Echelon product data](https://echelonfit.com/products/echelon-smart-connect-bike-ex5s-w-free-membership.js)) |
| [Echelon Stride-9s Pro](https://echelonfit.com/products/echelon-stride-9s-pro) | `JUSTSTRIDE-9s` ([Echelon product data](https://echelonfit.com/products/echelon-stride-9s-pro.js)) | `810091989234` ([Echelon product data](https://echelonfit.com/products/echelon-stride-9s-pro.js)) | $6,399.99 ([Echelon product data](https://echelonfit.com/products/echelon-stride-9s-pro.js)) | 0 in source; leave destination compare-at blank ([Echelon product data](https://echelonfit.com/products/echelon-stride-9s-pro.js)) | Available ([Echelon product data](https://echelonfit.com/products/echelon-stride-9s-pro.js)) |
| [Echelon Stride-8s™ Commercial Smart Treadmill](https://echelonfit.com/products/stride-8s) | `ECH-STRIDE-8s-22` ([Echelon product data](https://echelonfit.com/products/stride-8s.js)) | `810091987230` ([Echelon product data](https://echelonfit.com/products/stride-8s.js)) | $2,195.99 ([Echelon product data](https://echelonfit.com/products/stride-8s.js)) | $2,999.99 ([Echelon product data](https://echelonfit.com/products/stride-8s.js)) | Available ([Echelon product data](https://echelonfit.com/products/stride-8s.js)) |
| [Echelon Row-s Smart Rowing Machine](https://echelonfit.com/products/echelon-row-s-connected-rowing-machine-for-bundles) | `ECH-ROWs` ([Echelon product data](https://echelonfit.com/products/echelon-row-s-connected-rowing-machine-for-bundles.js)) | `813061025840` ([Echelon product data](https://echelonfit.com/products/echelon-row-s-connected-rowing-machine-for-bundles.js)) | $799.99 ([Echelon product data](https://echelonfit.com/products/echelon-row-s-connected-rowing-machine-for-bundles.js)) | $1,799.99 ([Echelon product data](https://echelonfit.com/products/echelon-row-s-connected-rowing-machine-for-bundles.js)) | Available ([Echelon product data](https://echelonfit.com/products/echelon-row-s-connected-rowing-machine-for-bundles.js)) |

Each source record currently has one “Default Title” variant, requires shipping, is taxable, and returns `requires_selling_plan: false`. This last flag is not proof that Echelon's theme has no membership requirement; source theme purchase rules and Shopify selling-plan state must be evaluated separately. ([Echelon product data](https://echelonfit.com/products/echelon-ex-pro.js), [Echelon product data](https://echelonfit.com/products/echelon-smart-connect-bike-ex5s-w-free-membership.js), [Echelon product data](https://echelonfit.com/products/echelon-stride-9s-pro.js), [Echelon product data](https://echelonfit.com/products/stride-8s.js), [Echelon product data](https://echelonfit.com/products/echelon-row-s-connected-rowing-machine-for-bundles.js))

| Model | Source product ID | Source variant ID | Source variant weight, grams | Proposed destination handle |
|---|---|---|---|---|
| Connect EX-Pro | `6252267471047` ([Echelon product data](https://echelonfit.com/products/echelon-ex-pro.js)) | `39512803213511` ([Echelon product data](https://echelonfit.com/products/echelon-ex-pro.js)) | 80,000 ([Echelon product data](https://echelonfit.com/products/echelon-ex-pro.js)) | `echelon-connect-ex-pro` |
| Connect EX-5s-22 | `4570702741586` ([Echelon product data](https://echelonfit.com/products/echelon-smart-connect-bike-ex5s-w-free-membership.js)) | `32181176238162` ([Echelon product data](https://echelonfit.com/products/echelon-smart-connect-bike-ex5s-w-free-membership.js)) | 58,513 ([Echelon product data](https://echelonfit.com/products/echelon-smart-connect-bike-ex5s-w-free-membership.js)) | `echelon-connect-ex-5s-22` |
| Echelon Stride-9s Pro | `7859801686215` ([Echelon product data](https://echelonfit.com/products/echelon-stride-9s-pro.js)) | `43641502040263` ([Echelon product data](https://echelonfit.com/products/echelon-stride-9s-pro.js)) | 162,840 ([Echelon product data](https://echelonfit.com/products/echelon-stride-9s-pro.js)) | `echelon-stride-9s-pro` |
| Echelon Stride-8s™ Commercial Smart Treadmill | `7828425474247` ([Echelon product data](https://echelonfit.com/products/stride-8s.js)) | `43558812614855` ([Echelon product data](https://echelonfit.com/products/stride-8s.js)) | 82,554 ([Echelon product data](https://echelonfit.com/products/stride-8s.js)) | `echelon-stride-8s` |
| Echelon Row-s Smart Rowing Machine | `7712960774343` ([Echelon product data](https://echelonfit.com/products/echelon-row-s-connected-rowing-machine-for-bundles.js)) | `43286590587079` ([Echelon product data](https://echelonfit.com/products/echelon-row-s-connected-rowing-machine-for-bundles.js)) | 60,700 ([Echelon product data](https://echelonfit.com/products/echelon-row-s-connected-rowing-machine-for-bundles.js)) | `echelon-row-s` |

Destination handles are proposals and must be checked for conflicts. Source Shopify IDs must never be used as Primal product, variant, media, inventory, location, or selling-plan IDs.

Variant weight is recorded for provenance, not certified as net machine weight or packaged freight weight. Do not overwrite a validated Primal shipping weight with a source value just because it exists, and do not display the variant weight as the machine's net weight.

## Product content packs

The proposed descriptions below are adapted from verified product features, not additional approved promotions. Use them as clean PDP copy, retaining Echelon product branding within Primal's native design.

### Connect EX-Pro

**Proposed product title:** Echelon Connect EX-Pro Commercial Bike

**Proposed description:** Built for demanding training environments, the Echelon Connect EX-Pro combines commercial-grade construction with a 24-inch HD touchscreen that flips 180 degrees for off-bike workouts. Quick-adjust seating and handlebars, bullhorn handlebars with elbow rests, dual-sided SPD pedals, and magnetic resistance help riders find a comfortable, controlled training setup. Connected classes are available through Echelon's content platform, subject to the applicable access plan. ([Echelon product page](https://echelonfit.com/products/echelon-ex-pro))

| Field | Verified source value |
|---|---|
| Positioning | Heavy-use gyms, health clubs, wellness centers and other high-traffic fitness environments ([Echelon product page](https://echelonfit.com/products/echelon-ex-pro)) |
| Display | 24-inch HD touchscreen; 180-degree flip rotation ([Echelon product page](https://echelonfit.com/products/echelon-ex-pro)) |
| Resistance system | Magnetic coil resistance system ([Echelon product page](https://echelonfit.com/products/echelon-ex-pro)) |
| Seat and handlebars | Quick-adjust; bullhorn handlebars with elbow rests ([Echelon product page](https://echelonfit.com/products/echelon-ex-pro)) |
| Pedals | Dual-sided SPD pedals ([Echelon product page](https://echelonfit.com/products/echelon-ex-pro)) |
| Other hardware | Power ports and heavy-duty crank ([Echelon product page](https://echelonfit.com/products/echelon-ex-pro)) |

- **Supplemental commercial features:** 32 electromagnetic resistance levels, ratchet levers for four seat/handlebar adjustments, front transport wheels, rear mobility handle, and competition-style seat are listed on Echelon's commercial page. Verify the supplied production revision before using these as import specifications. ([Echelon Commercial EX-Pro](https://echeloncommercial.com/products/ex-pro-bike))
- **Materials:** The retail description says “durable, commercial-grade materials” but does not state frame alloy, wall gauge, coatings, upholstery composition or recycled content; those fields are n.a., not “steel” by assumption. ([Echelon product page](https://echelonfit.com/products/echelon-ex-pro))
- **Unconfirmed specifications:** Overall dimensions, footprint, net weight, maximum user weight, input electrical specification, packaged dimensions and packaged weight are n.a. in the fetched retail/commercial pages; verify against the exact supplier record/manual before publishing.
- **Source conflict:** The commercial page's introductory text says 22-inch display while its feature list and retail PDP say 24-inch; use the retail SKU's 24-inch display only after matching the actual supplied unit. The commercial page also displays “up to 5 years parts and labor” and “2 years all parts / 2 years labor,” so no commercial warranty promise should be imported without confirmation. ([Echelon Commercial EX-Pro](https://echeloncommercial.com/products/ex-pro-bike), [Echelon product page](https://echelonfit.com/products/echelon-ex-pro))
- **Accessories:** Do not imply weights, mat, shoes, assembly or a membership are included unless the destination offer explicitly includes them.

### Connect EX-5s-22

**Proposed product title:** Echelon Connect EX-5s-22 Bike

**Proposed description:** Bring connected cycling into your training space with a 22-inch HD touchscreen and 32 resistance levels. The Echelon Connect EX-5s-22 features a vented competition-style seat, height and depth adjustment at the seat and handlebars, and dual-sided SPD-compatible pedals with adjustable toe cages. The screen flips for off-bike workouts, while front transport wheels help reposition the bike between sessions. ([Echelon product page](https://echelonfit.com/products/echelon-smart-connect-bike-ex5s-w-free-membership))

| Field | Verified source value |
|---|---|
| Product dimensions | 58 in L × 21.5 in W × 61 in H (147.3 × 54.6 × 154.9 cm) ([Echelon product page](https://echelonfit.com/products/echelon-smart-connect-bike-ex5s-w-free-membership)) |
| Footprint | 58 in L × 21.5 in W ([Echelon product page](https://echelonfit.com/products/echelon-smart-connect-bike-ex5s-w-free-membership)) |
| Published product weight | 124 lb (56 kg); distinct from the source variant weight ([Echelon product page](https://echelonfit.com/products/echelon-smart-connect-bike-ex5s-w-free-membership)) |
| Maximum user weight | 300 lb (136 kg) ([Echelon product page](https://echelonfit.com/products/echelon-smart-connect-bike-ex5s-w-free-membership)) |
| Console | 22-inch (56 cm) Class HD touchscreen ([Echelon product page](https://echelonfit.com/products/echelon-smart-connect-bike-ex5s-w-free-membership)) |
| Resistance | 32 resistance levels ([Echelon product page](https://echelonfit.com/products/echelon-smart-connect-bike-ex5s-w-free-membership)) |
| Connectivity | Bluetooth connection to Echelon Fit App ([Echelon product page](https://echelonfit.com/products/echelon-smart-connect-bike-ex5s-w-free-membership)) |
| Adjustability | Seat and handlebars: height and depth, up/down and fore/aft ([Echelon product page](https://echelonfit.com/products/echelon-smart-connect-bike-ex5s-w-free-membership)) |
| Transportation | Easy-move wheels on front ([Echelon product page](https://echelonfit.com/products/echelon-smart-connect-bike-ex5s-w-free-membership)) |
| Safety | Emergency stop braking system ([Echelon product page](https://echelonfit.com/products/echelon-smart-connect-bike-ex5s-w-free-membership)) |
| Seat | Vented competition-style seat ([Echelon product page](https://echelonfit.com/products/echelon-smart-connect-bike-ex5s-w-free-membership)) |
| Handlebars | Elevated bullhorn handlebars with elbow rests ([Echelon product page](https://echelonfit.com/products/echelon-smart-connect-bike-ex5s-w-free-membership)) |
| Pedals | Dual-sided SPD-compatible clips and adjustable toe cages ([Echelon product page](https://echelonfit.com/products/echelon-smart-connect-bike-ex5s-w-free-membership)) |
| Bottle storage | Two large bottle holders below handlebars ([Echelon product page](https://echelonfit.com/products/echelon-smart-connect-bike-ex5s-w-free-membership)) |
| Dumbbell storage | Source says holds up to 2 lb (0.9 kg) dumbbells; weights not confirmed included ([Echelon product page](https://echelonfit.com/products/echelon-smart-connect-bike-ex5s-w-free-membership)) |

- **Materials and electrical:** Frame composition, upholstery, input rating, packed weight and packed dimensions are n.a. in the fetched PDP. Use the linked manual and supplier specification rather than filling generic material values.
- **Gallery warning:** Source positions 2–7 are labeled Mossy Oak Country DNA/`ECH01-EX5s-MOC`, despite this product having the regular `ECH01-EX5s` variant. Exclude those images from the standard-black Primal listing unless the actual stock and variant are explicitly confirmed to be Mossy Oak. ([Echelon product data](https://echelonfit.com/products/echelon-smart-connect-bike-ex5s-w-free-membership.js))
- **Offer warning:** The source mentions 2025 upgrades and “only available here”; do not reproduce exclusivity wording on Primal or promise a free soundbar, remote, dumbbells, mat, or membership without an explicit bundle definition. ([Echelon product page](https://echelonfit.com/products/echelon-smart-connect-bike-ex5s-w-free-membership))
- **Optional accessories, not included equipment:** The source lists a bike mat, air seat cover and 2 lb dumbbells as separate accessories. ([Echelon product page](https://echelonfit.com/products/echelon-smart-connect-bike-ex5s-w-free-membership))

### Stride-9s Pro

**Proposed product title:** Echelon Stride-9s Pro Commercial Treadmill

**Proposed description:** The Echelon Stride-9s Pro pairs a 22-inch Class 1200p HD touchscreen with a 4.0 CHP motor and a spacious 22 × 61-inch quad-cushioned running deck. Quick speed and incline buttons, integrated handlebar pulse sensors, and Bluetooth connectivity for audio and heart-rate monitors support varied training sessions. A pull-out lanyard and emergency-stop safety key provide dedicated stop controls. ([Echelon product page](https://echelonfit.com/products/echelon-stride-9s-pro))

| Field | Verified source value |
|---|---|
| Console | 22-inch Class 1200p HD touchscreen ([Echelon product page](https://echelonfit.com/products/echelon-stride-9s-pro)) |
| Motor | 4.0 CHP; do not relabel as peak horsepower ([Echelon product page](https://echelonfit.com/products/echelon-stride-9s-pro)) |
| Running surface | 22 × 61 inches; quad-cushioned deck ([Echelon product page](https://echelonfit.com/products/echelon-stride-9s-pro)) |
| Incline | 15 levels; this is not a verified 15% incline ([Echelon product page](https://echelonfit.com/products/echelon-stride-9s-pro)) |
| Speed wording on retail PDP | 15 speed levels; not by itself a measurement in mph ([Echelon product page](https://echelonfit.com/products/echelon-stride-9s-pro)) |
| Controls | Quick speed and incline buttons on console ([Echelon product page](https://echelonfit.com/products/echelon-stride-9s-pro)) |
| Sensors | Handlebar-integrated pulse sensors ([Echelon product page](https://echelonfit.com/products/echelon-stride-9s-pro)) |
| Connectivity | Internet connectivity; Bluetooth for audio and heart-rate monitors ([Echelon product page](https://echelonfit.com/products/echelon-stride-9s-pro)) |
| Safety | Pull-out lanyard; emergency-stop safety key ([Echelon product page](https://echelonfit.com/products/echelon-stride-9s-pro)) |
| Retail PDP maximum user weight | 400 lb; conflicts with current manual, see hold below ([Echelon product page](https://echelonfit.com/products/echelon-stride-9s-pro)) |

- **Manual dimensions and speed:** The linked manual's printed page 8 lists assembly size 6.9 × 2.9 × 5.2 feet, running area 22 × 61 inches, speed 0.5–15 mph, and incline 0–15 levels. Preserve those units; do not turn the incline-level count into a percentage. ([Stride-9s Pro manual, printed page 8](https://hf-files-oregon.s3.amazonaws.com/hdpechelonfit_kb_attachments/2026/11-03/68c208d7-4cff-4e88-88ae-681051cf76ce/Stride-9sPro_NewAssembly.pdf))
- **Safety-critical conflict:** The same manual gives maximum user weight as 395 lb (180 kg), while the retail PDP says 400 lb. Do not publish 400 lb on Primal until the actual unit's rating is reconciled; retain the safer manual limit in the private specification notes and get model-specific confirmation. ([Stride-9s Pro manual, printed pages 5 and 8](https://hf-files-oregon.s3.amazonaws.com/hdpechelonfit_kb_attachments/2026/11-03/68c208d7-4cff-4e88-88ae-681051cf76ce/Stride-9sPro_NewAssembly.pdf), [Echelon product page](https://echelonfit.com/products/echelon-stride-9s-pro))
- **Electrical:** The manual recommends a 120 V, 20 A dedicated circuit; present this as a recommendation, not an independently verified motor input label. ([Stride-9s Pro manual, printed page 6](https://hf-files-oregon.s3.amazonaws.com/hdpechelonfit_kb_attachments/2026/11-03/68c208d7-4cff-4e88-88ae-681051cf76ce/Stride-9sPro_NewAssembly.pdf))
- **Unconfirmed fields:** Net weight, verified packed freight weight/dimensions, material composition, and a Primal-applicable commercial warranty are n.a. Do not display the 162,840 g variant field as a certified net equipment weight.
- **Assembly:** The manual describes a multi-step assembly and activation process; do not apply the Stride-8s “under 5 minutes” claim to this model. ([Stride-9s Pro manual](https://hf-files-oregon.s3.amazonaws.com/hdpechelonfit_kb_attachments/2026/11-03/68c208d7-4cff-4e88-88ae-681051cf76ce/Stride-9sPro_NewAssembly.pdf))

### Stride-8s

**Proposed product title:** Echelon Stride-8s Smart Treadmill

**Proposed description:** Train on a 20 × 60-inch open-front running deck with DuroFlex Quad Cushioned Suspension, powered by a quiet brushless DC motor rated at 6.0 HP peak. A 22-inch HD touchscreen, trackball speed and incline controls, built-in cooling fan, wireless charging pad and dynamic LED lighting support a connected training experience. The screen tilts, swivels and rotates for off-equipment workouts. ([Echelon product page](https://echelonfit.com/products/stride-8s), [Echelon product data](https://echelonfit.com/products/stride-8s.js))

| Field | Verified source value |
|---|---|
| Positioning | 2026 light-commercial treadmill for home, boutique studios and high-use spaces; commercial-use warranty remains a separate confirmation ([Echelon product page](https://echelonfit.com/products/stride-8s)) |
| Product dimensions | 67 in L × 33.1 in W × 63 in H (170.2 × 84 × 160 cm) ([Echelon product page](https://echelonfit.com/products/stride-8s)) |
| Footprint | 67 × 33.1 inches ([Echelon product page](https://echelonfit.com/products/stride-8s)) |
| Motor | 6.0 HP peak; quiet brushless DC per product description, not 6.0 continuous HP ([Echelon product page](https://echelonfit.com/products/stride-8s)) |
| Maximum speed | 12 mph (19.3 km/h) on the rendered product specification ([Echelon product page](https://echelonfit.com/products/stride-8s)) |
| Incline | 12 power-incline levels; 12.5% ([Echelon product page](https://echelonfit.com/products/stride-8s)) |
| Running surface | 20 × 60 inches (51 × 152 cm) ([Echelon product page](https://echelonfit.com/products/stride-8s)) |
| Deck suspension | DuroFlex Quad Cushioned Suspension ([Echelon product page](https://echelonfit.com/products/stride-8s)) |
| Current PDP maximum user weight | 400 lb (181 kg); verify revision and manual before import ([Echelon product page](https://echelonfit.com/products/stride-8s)) |
| Console | 22-inch (56 cm) Class HD touchscreen ([Echelon product page](https://echelonfit.com/products/stride-8s)) |
| Screen movement | Tilts, swivels and rotates 180 degrees ([Echelon product page](https://echelonfit.com/products/stride-8s)) |
| Controls | Trackball speed, incline and volume; speed increments of 0.1 or 1 mph ([Echelon product page](https://echelonfit.com/products/stride-8s)) |
| Sensors | Two pulse heart-rate sensors on interior handlebars ([Echelon product page](https://echelonfit.com/products/stride-8s)) |
| Connectivity | Bluetooth connection to Echelon Fit App ([Echelon product page](https://echelonfit.com/products/stride-8s)) |
| Safety | Pull-out lanyard and magnetic emergency stop ([Echelon product page](https://echelonfit.com/products/stride-8s)) |
| Wireless charging | 10-watt wireless charging pad ([Echelon product page](https://echelonfit.com/products/stride-8s)) |
| Convenience | Built-in cooling fan and washable drink/accessory tray ([Echelon product page](https://echelonfit.com/products/stride-8s)) |
| Lighting | Side-rail LEDs; description offers color, music and heart-rate responses ([Echelon product page](https://echelonfit.com/products/stride-8s)) |
| Storage | Disassembly of two screws to fold flat; not an automatic-fold claim ([Echelon product page](https://echelonfit.com/products/stride-8s)) |
| Assembly claim | Minimal assembly / under-five-minute setup claim on source; verify destination fulfillment package ([Echelon product page](https://echelonfit.com/products/stride-8s)) |

- **Membership behavior:** The current rendered PDP explicitly says no membership is required, with freestyle mode and built-in programs available, and Premier optional for connected content. Do not accidentally introduce a mandatory Premier selection on this model. ([Echelon product page](https://echelonfit.com/products/stride-8s))
- **Warranty conflict:** The rendered PDP gives lifetime drive motor, 10-year frame, 2-year parts/touchscreen, and 1-year labor for eligible purchases on or after November 4, 2026; active Premier extends parts, touchscreen and labor to 5 years total. The product JSON description still says 10-year frame, 5-year motor and 1-year parts/labor plus four additional years with Premier, so do not copy that description verbatim. Confirm the actual manufacturer policy and its applicability to Primal and commercial use before displaying a warranty. ([Echelon product page](https://echelonfit.com/products/stride-8s), [Echelon product data](https://echelonfit.com/products/stride-8s.js))
- **Delivery/trial conflict:** The rendered PDP offers free contiguous-US delivery without membership and a 60-day home trial with free pickup/no freight or restocking fees, whereas the JSON description still requires a 1- or 2-year membership for free delivery and states $299.99 delivery with a monthly plan. Those source offers are not automatically approved for Primal; confirm fulfillment and return liability before copying them. ([Echelon product page](https://echelonfit.com/products/stride-8s), [Echelon product data](https://echelonfit.com/products/stride-8s.js))
- **Historical/spec consistency:** Other Echelon collection text has shown 300 lb and 12.5 mph; do not substitute category snippets for this exact current model or silently resolve a safety-critical discrepancy. Confirm the supplied revision against the manual. ([Echelon treadmill collection](https://echelonfit.com/collections/stride), [Echelon product page](https://echelonfit.com/products/stride-8s))
- **Materials and weight:** Exact frame composition, electrical input label, verified net weight and packaged freight dimensions/weight are n.a. in the fetched PDP; the source variant's 82,554 g is not certified here as net or gross machine weight.
- **Media caution:** Several current gallery entries carry certified-open-box filenames/alt text; confirm they depict identical new equipment and contain no open-box promotional overlays before use. ([Echelon product data](https://echelonfit.com/products/stride-8s.js))
- **Visually verified graphic conflict:** Gallery image 2 visibly states “300 LBS. Max. Weight Limit” and “220.4 LBS. Product Weight,” despite the current rendered PDP's 400 lb user limit. Exclude this specification graphic pending model-revision reconciliation; do not merely remove the warning text and imply the underlying specification conflict is solved. ([Source specification graphic](https://cdn.shopify.com/s/files/1/2422/9487/files/stride-8s-certified-open-box-ech-stride-8s-22-9782835.png?v=1786399516), [Echelon product page](https://echelonfit.com/products/stride-8s))

### Row-s

**Proposed product title:** Echelon Row-s Smart Rowing Machine

**Proposed description:** The Echelon Row-s combines a 22-inch HD touchscreen with 32 levels of magnetic resistance and handlebar-mounted resistance controls. Its ergonomic seat and adjustable foot platforms support a comfortable rowing setup, while an upright-folding design reduces storage space between workouts. Bluetooth connectivity connects the rower with Echelon's training platform, subject to the applicable content access plan. ([Echelon product page](https://echelonfit.com/products/echelon-row-s-connected-rowing-machine-for-bundles))

| Field | Verified source value |
|---|---|
| Product dimensions | 85 in L × 24 in W × 45 in H (216 × 61 × 114.3 cm) ([Echelon product page](https://echelonfit.com/products/echelon-row-s-connected-rowing-machine-for-bundles)) |
| Footprint | 85 × 24 inches ([Echelon product page](https://echelonfit.com/products/echelon-row-s-connected-rowing-machine-for-bundles)) |
| Published product weight | 108 lb (49 kg); different from the 60,700 g variant field ([Echelon product page](https://echelonfit.com/products/echelon-row-s-connected-rowing-machine-for-bundles)) |
| Maximum user weight | 350 lb (159 kg) ([Echelon product page](https://echelonfit.com/products/echelon-row-s-connected-rowing-machine-for-bundles)) |
| Console | 22-inch (56 cm) Class HD touchscreen with 90-degree swivel ([Echelon product page](https://echelonfit.com/products/echelon-row-s-connected-rowing-machine-for-bundles)) |
| Resistance | 32 electronic magnetic-resistance levels with handlebar controls ([Echelon product page](https://echelonfit.com/products/echelon-row-s-connected-rowing-machine-for-bundles)) |
| Connectivity | Bluetooth connection to Echelon Fit App ([Echelon product page](https://echelonfit.com/products/echelon-row-s-connected-rowing-machine-for-bundles)) |
| Power | 110 V AC; power switch on front frame ([Echelon product page](https://echelonfit.com/products/echelon-row-s-connected-rowing-machine-for-bundles)) |
| Seat height | 18 inches (46 cm) ([Echelon product page](https://echelonfit.com/products/echelon-row-s-connected-rowing-machine-for-bundles)) |
| Rail angle | 1.7 degrees ([Echelon product page](https://echelonfit.com/products/echelon-row-s-connected-rowing-machine-for-bundles)) |
| Storage | Foldable design; upright folding ([Echelon product page](https://echelonfit.com/products/echelon-row-s-connected-rowing-machine-for-bundles)) |
| Foot platforms | Adjustable platforms with secure straps; exact source wording is ambiguous, see below ([Echelon product page](https://echelonfit.com/products/echelon-row-s-connected-rowing-machine-for-bundles)) |
| Ergonomics | Seat design supporting hip and spine alignment; handlebar resistance controller ([Echelon product page](https://echelonfit.com/products/echelon-row-s-connected-rowing-machine-for-bundles)) |

- **Folded dimensions needing cleanup:** The source writes “48 in L × 24 in W × 69 in L,” with the last dimension mislabeled. Likely orientation must not be silently invented; confirm the manual's length/width/height labels before publishing the folded dimensions. ([Echelon product page](https://echelonfit.com/products/echelon-row-s-connected-rowing-machine-for-bundles))
- **Foot-platform typo:** Source says “6' Platform Adjustments”; this is ambiguous and should not be published as six feet or six positions without verification. ([Echelon product page](https://echelonfit.com/products/echelon-row-s-connected-rowing-machine-for-bundles))
- **Materials and logistics:** Frame composition, exact packaged dimensions/weight and a reconciled net weight are n.a.; verify against the exact fulfillment SKU.
- **Accessories:** The source describes immersive sound but that alone does not establish that an external soundbar is included. Do not auto-add or hide a paid soundbar, mat, earbuds or other accessory in the Primal cart. ([Echelon product page](https://echelonfit.com/products/echelon-row-s-connected-rowing-machine-for-bundles))
- **Copy cleanup:** The JSON body contains an empty `<img>` fragment and empty lists; do not import raw HTML without cleanup. Avoid unsupported comparative superlatives, percentage-of-muscles claims and copied review badges in the new description. ([Echelon product data](https://echelonfit.com/products/echelon-row-s-connected-rowing-machine-for-bundles.js))
- **Media caution:** Source gallery position 6 is labeled certified-open-box; verify actual image content before including it in a new-equipment gallery. ([Echelon product data](https://echelonfit.com/products/echelon-row-s-connected-rowing-machine-for-bundles.js))

## Manuals and supporting documents

These are official support-page attachment links, not invented file paths. Manual availability does not establish that an older document exactly matches today's supplied hardware revision; use the SKU, rating label and supplier confirmation to settle discrepancies.

| Model | Official support page | Original manual attachment |
|---|---|---|
| Connect EX-Pro | [Connect EX-Pro support/manual page](https://support.echelonfit.com/kb/article/153-connect-ex-pro-bike-manual/) | [Download official PDF](https://hf-files-oregon.s3.amazonaws.com/hdpechelonfit_kb_attachments/2025/07-21/8e6177f1-0a97-4491-91dc-18861d515be0/EXPRO_IM_Trilingual_LR.pdf) |
| Connect EX-5s-22 | [Connect EX-5s-22 support/manual page](https://support.echelonfit.com/kb/article/158-connect-ex-5s-22-manual/) | [Download official PDF](https://hf-files-oregon.s3.amazonaws.com/hdpechelonfit_kb_attachments/2025/07-21/083f6423-b96a-49dc-96ce-e69e87b367f9/EX5s22_Manual.pdf) |
| Stride-9s Pro | [Stride-9s Pro support/manual page](https://support.echelonfit.com/kb/article/88-stride-9s-pro/?section_id=46) | [Download official PDF](https://hf-files-oregon.s3.amazonaws.com/hdpechelonfit_kb_attachments/2026/11-03/68c208d7-4cff-4e88-88ae-681051cf76ce/Stride-9sPro_NewAssembly.pdf) |
| Stride-8s | [Stride-8s support/manual page](https://support.echelonfit.com/kb/article/87-stride-8s-manual/) | [Download official PDF](https://cdn.reflectgateway.com/pdfs/ed8dace7-3928-4f9e-8055-f10a601b0ccc.pdf) |
| Row-s | [Row-s support/manual page](https://support.echelonfit.com/kb/article/80-row-s/) | [Download official PDF](https://cdn.reflectgateway.com/pdfs/6a7c0fac-d7e3-4171-9bf8-ab8a40cebe2b.pdf) |

The EX-Pro manual PDF was retrieved but does not yield usable searchable text in the available extraction; no missing specifications have been guessed from it. The Stride-9s Pro PDF was retrieved and its printed specification/safety pages were checked; the other manual attachments were identified on official support pages but their full contents were not independently reviewed in this handoff.

## Images and video instructions

The appendix contains every image returned by the five selected product-data endpoints, with original URLs, dimensions, source alt text and a proposed usage status. Asset roles are editorial recommendations; filenames and alt text alone are not a substitute for visually checking product color, model revision, accessories and overlaid claims.

- **Hero imagery:** Prefer a real in-use photograph of the exact supplied product where a suitable asset exists. If none is verified, use a clean accurate packshot rather than generated hardware or a different model; provide the preview for approval.
- **Collection cards:** Use consistent, uncropped product presentation with genuine transparency where appropriate. Do not replace the Primal brand system with Echelon's entire theme.
- **Alt text:** Replace irrelevant “Echelon Fit US” store suffixes, wrong-model/open-box labels and empty source alt text with short, accurate descriptions after visual inspection. Do not assert an angle, setting, accessory or color that is not visible.
- **Resolution:** Keep original assets for import; let Shopify generate responsive image derivatives. Do not upscale small images to hero sizes.
- **Product media:** Use Shopify-native image/video handling, responsive widths, explicit dimensions and appropriate lazy loading. Do not lazy-load the initial LCP image; do lazy-load below-the-fold media.
- **Video screening:** The links below were extracted from page HTML, not all verified as product-specific demonstrations. Review the actual footage/audio, poster, rights, on-screen promotions and captions before import; the same shared clip appears on multiple products.
- **Production method:** Shopify CLI remains the required production media workflow. Do not switch to a connector, browser upload or separate API workflow without Nico explicitly naming that alternative.

| Page | Candidate original video | Screening instruction |
|---|---|---|
| Connect EX-5s-22 | [Original MP4 candidate](https://echelonfit.com/cdn/shop/videos/c/vp/4ea8516713714f3f8a5da2b99e21d17a/4ea8516713714f3f8a5da2b99e21d17a.HD-720p-1.6Mbps-16410937.mp4?v=0) | Product-page candidate; verify content, current hardware and claims before use. |
| Connect EX-5s-22 | [Original MP4 candidate](https://echelonfit.com/cdn/shop/videos/c/vp/2a9cef354f854979ae4ff08b1d8fd788/2a9cef354f854979ae4ff08b1d8fd788.HD-1080p-3.3Mbps-47106180.mp4?v=0) | Shared clip across multiple PDPs; do not label as a model demonstration without viewing. |
| Echelon Stride-8s™ Commercial Smart Treadmill | [Original MP4 candidate](https://echelonfit.com/cdn/shop/videos/c/vp/31529e00b4794a60a410d45d3d82c860/31529e00b4794a60a410d45d3d82c860.HD-1080p-4.8Mbps-39649536.mp4?v=0) | Product-page candidate; verify content, current hardware and claims before use. |
| Echelon Stride-8s™ Commercial Smart Treadmill | [Original MP4 candidate](https://echelonfit.com/cdn/shop/videos/c/vp/2a9cef354f854979ae4ff08b1d8fd788/2a9cef354f854979ae4ff08b1d8fd788.HD-1080p-3.3Mbps-47106180.mp4?v=0) | Shared clip across multiple PDPs; do not label as a model demonstration without viewing. |
| Echelon Stride-8s™ Commercial Smart Treadmill | [Original MP4 candidate](https://cdn.shopify.com/videos/c/o/v/1a9c2759c380430dbcc78b2468d416e6.mp4) | Product-page candidate; verify content, current hardware and claims before use. |
| Echelon Row-s Smart Rowing Machine | [Original MP4 candidate](https://echelonfit.com/cdn/shop/videos/c/vp/0c79046976ca4dbd86d7c0e4e93080e7/0c79046976ca4dbd86d7c0e4e93080e7.HD-720p-1.6Mbps-28792720.mp4?v=0) | Product-page candidate; verify content, current hardware and claims before use. |
| Echelon Row-s Smart Rowing Machine | [Original MP4 candidate](https://echelonfit.com/cdn/shop/videos/c/vp/2a9cef354f854979ae4ff08b1d8fd788/2a9cef354f854979ae4ff08b1d8fd788.HD-1080p-3.3Mbps-47106180.mp4?v=0) | Shared clip across multiple PDPs; do not label as a model demonstration without viewing. |

No product-specific video candidate was found in the inspected EX-Pro or Stride-9s Pro page HTML. Do not invent a YouTube demonstration or substitute footage of another model.

## Shopify implementation requirements

### Safe private preparation

- **Baseline:** Read the current live Primal theme and repository history, and create a fresh backup/private development copy before theme changes. Do not build on an old preview simply because its name looks relevant.
- **Theme identity:** Read-only Shopify CLI inspection on November 17 returned live theme ID `142304510051`, named `primal-strength-us/ux-project - Live`. Re-read the role immediately before any future operation; this ID is a snapshot, not a permanent deployment target.
- **Draft content:** Product and navigation records are store-level data, not isolated by a theme backup. Keep products unlisted/draft and do not update the live menu or live collection membership merely to obtain a preview.
- **Preview route:** If ordinary draft status prevents a realistic storefront preview, explain the exact limitation and request a specifically scoped private-preview approach rather than publishing the products without sign-off.
- **Native development:** Use existing Primal templates and native Liquid, HTML, CSS and JavaScript. No React build, standalone replacement storefront, or unnecessary global redesign.
- **Scope:** Add only the approved range and necessary collection/menu/template fields. Preserve all existing strength products, forms, quotes, navigation, customer login, analytics and cart behavior.

### Product, fulfillment and membership setup

- **Catalog fields:** Vendor Echelon; appropriate native product types for exercise bike, treadmill and rowing machine; exact model title/SKU/barcode from the map; one default variant unless actual destination stock warrants approved options.
- **Purchase template:** Select the existing native purchasable product template appropriate for these models, not a quote-only template. Preserve all unrelated quote-only products and their Request a Quote behavior.
- **Structured fields:** Use existing metafield definitions for specifications, dimensions, manuals and warranty where available. Do not invent namespaces that duplicate the current theme's data model.
- **Price behavior:** Match current equipment prices from the selected regular source records. Leave compare-at blank for EX-Pro and Stride-9s Pro rather than showing a $0 strike-through or a negative saving.
- **Stock:** Confirm destination inventory location, quantity, replenishment source and fulfillment ownership. Public source availability is not an inventory allocation or evidence of physical Primal stock; never enable overselling merely to make the button purchasable.
- **SKU integrations:** Preserve exact manufacturer SKUs for routing where required, but verify whether existing ERP/3PL rules need a channel-specific mapping. Record both source and destination IDs and never copy inventory item IDs.
- **Shipping:** Obtain packaged weight/dimensions and the correct freight profile, zones, carrier/service and delivery estimate. Test combined strength + cardio carts; do not modify existing freight/ShipX/ShipStation or other integrations globally.
- **Membership:** Confirm the intended Primal offer for EX-Pro, EX-5s-22, Stride-9s Pro and Row-s. Their source purchase UI may select/require Premier even though the variants do not require a selling plan; do not copy cross-store membership IDs or bypass a required purchase rule.
- **Stride-8s exception:** Retain the source's explicit equipment-only/optional-membership behavior unless a different Primal offer is approved. Do not apply one blanket membership rule to all five models.
- **Subscription plumbing:** If Premier is sold on Primal, verify native destination subscription products, selling plans, customer entitlements, billing and renewals before offering them. A link or line-item property is not a functioning subscription.
- **Existing members:** Define and test how existing Echelon members buying on Primal avoid an unintended duplicate membership, without weakening any actual eligibility requirement.
- **Gifts/accessories:** No hidden soundbar, automatic HRM, voucher, paid add-on or free accessory unless explicitly part of the approved Primal offer.
- **Tax and publication:** Validate destination tax settings, markets and Online Store publication. Publishing to Google, Meta or other channels is separate from preparing five PDPs; do not expand channel publication without review.
- **Policies:** Link to the correct Primal return, delivery, warranty and support information, with manufacturer-specific coverage accurately explained. Do not send buyers to Echelon checkout to complete the purchase.

### Navigation, collection and PDP presentation

- **Navigation:** Reuse the existing Cardio destination when it serves the approved goal; preserve current items and unrelated links. Keep bikes/treadmills/rower groupings optional and avoid building unnecessary empty collections.
- **Collection cards:** Accurate model image, equipment price and availability; membership-aware action if needed. Do not allow grid quick-add to bypass a required plan or use unavailable variants.
- **Collection copy proposal:** “ECHELON CARDIO” as the hero, with supporting copy “Explore connected bikes, treadmills and rowing equipment from Echelon, available to buy through Primal.”
- **PDP order:** Product media and clear title/price/purchase controls first, followed by key features, exact specifications, dimensions/storage, membership information where relevant, delivery/assembly, warranty/returns and manuals.
- **Reviews:** Only display authentic product-specific reviews via an authorized mapping/integration. Do not copy star counts or ratings from another model or make up new Primal review totals.
- **Financing:** Retain Primal's existing eligible payment methods and provider disclosures. Do not copy Echelon-specific APR, monthly payment, lender branding, installment terms or approvals into Primal.
- **Brand/accessibility:** Preserve Primal typography, colors and components; hero titles ALL CAPS and other headings sentence case. Meet WCAG 2.2 AA for contrast, keyboard access, focus, labels, errors, dialogs and touch controls.

## Decisions still needed before sale, not before drafting

Lou has already answered selection, same-price, on-site checkout and Cardio placement. The remaining points are operational or contradictory-source checks; prepare the content and previews now while tracking these explicitly.

| Item | Required resolution | Recommended owner |
|---|---|---|
| Membership on four non-Stride-8s models | Equipment-only vs required subscription; native destination entitlements and existing-member handling | Nico + Echelon membership/commerce owner |
| Fulfillment and stock | Warehouse, stock allocation, exact SKU/revision, freight profile and promised lead time | Operations/fulfillment |
| Commercial use | Which units are approved for commercial usage and exact commercial warranty | Product/support |
| Stride-9s capacity | Retail 400 lb versus manual 395 lb | Product/support |
| Stride-8s specs and policies | Supplied revision, capacity/speed, applicable warranty, trial, shipping liability | Product/support + operations |
| Materials and freight measurements | Actual frame/material specifications and net/packaged weight/dimensions | Product supplier/operations |
| Discount stacking | Whether Primal automatic thresholds apply to Echelon; final checkout price parity | Lou/commerce owner |
| Media anomalies | Standard-black EX-5s gallery and open-box-labeled assets | Nico/marketing |
| Final publication | Review private preview and explicitly authorize scoped live changes | Nico |

## QA acceptance checklist

- [ ] Exactly five intended models are represented once; no duplicate SKU, wrong rower, EX-8s substitution, open-box condition or Mossy Oak variant.
- [ ] Source price/compare-at and destination price are refreshed and recorded with timestamp before launch.
- [ ] Manufacturer labels/manuals settle safety-critical maximum user weight, speed and electrical discrepancies.
- [ ] All published physical material/specification claims have exact evidence; n.a. fields are omitted rather than invented.
- [ ] Each PDP uses the correct image set, meaningful alt text, native media and a product-specific manual link.
- [ ] Native Primal add-to-cart, cart drawer/page, quantity edits, removal, discounts and checkout work for each model.
- [ ] Collection quick-add, search results, recommendations and accelerated checkout do not bypass required membership selection.
- [ ] Optional-membership Stride-8s can be purchased without a Premier plan; existing-member cases do not create unintended subscriptions.
- [ ] No undisclosed paid accessory, unwanted soundbar, duplicate subscription or unsupported free gift appears in the cart.
- [ ] Freight rates/eligibility are tested with valid representative delivery addresses and mixed cardio/strength carts.
- [ ] Sold-out variants cannot be purchased unless actual approved preorder/oversell rules exist; lead times are truthful.
- [ ] Manufacturer warranty and Primal policy links agree with the exact offer; no unsupported free-return or commercial-use promise.
- [ ] Mobile widths 320/375/390/768 and desktop 1024/1440 are checked for overflow, media fit, menu function and purchase-control access.
- [ ] Keyboard navigation, visible focus, screen-reader names, errors, modal behavior and contrast pass targeted WCAG 2.2 AA checks.
- [ ] Existing strength PDPs, forms/quote flow, login, navigation, analytics and payment methods are regression-tested.
- [ ] Analytics use actual destination item IDs/SKUs; no duplicated purchase events or copied cross-store identifiers.
- [ ] Desktop and mobile screenshots plus usable preview links are provided to Nico in the same review.
- [ ] GitHub and the task tracker distinguish research/handoff complete from implementation, QA and publication still pending.
- [ ] No live publication occurs until Nico signs off on the exact scope.

## Deployment and rollback guardrails

Use Shopify CLI, the exact store domain, the verified destination theme ID and an explicit allowlist for any authorized theme push. Follow the existing workflow using `--only` and `--nodelete`; do not publish a whole theme or revive retired preview tools.

A theme rollback does not undo product, menu, collection, inventory or subscription changes. Capture before-state exports for every catalog/navigation object separately, create a scoped deployment manifest and record how each store-level change will be reversed before launch.

If a CLI command fails, report the exact command and full error, check documented repo workflow/history, then try the known-good method. Do not infer a platform-wide restriction or switch production tools without explicit authorization.

### Read-only access results from this research

The theme-list command succeeded; the independent store-query command did not have stored app authentication. This is a failure of that specific Admin query path, not a failure of theme CLI or a general inability to use Shopify.

```sh
TMPDIR=/dev/shm shopify theme list \
  --store primal-strength-us.myshopify.com --no-color --json
```

Result: current live theme `142304510051` was returned. No theme changes were made.

```sh
TMPDIR=/dev/shm shopify store execute \
  --store primal-strength-us.myshopify.com \
  --query 'query { shop { name myshopifyDomain } products(first:50, query:"vendor:Echelon OR title:Echelon OR sku:ECH01-EX-PRO-24 OR sku:ECH01-EX5s OR sku:JUSTSTRIDE-9s OR sku:ECH-STRIDE-8s-22 OR sku:ECH-ROWs") { nodes { id title handle status variants(first:10) { nodes { id sku price } } } } }' \
  --no-color --json
```

Exact error: `No stored app authentication found for primal-strength-us.myshopify.com.`

Checks performed: CLI command help, the documented CLI deployment workflow, the successful traditional theme-list command on the same store, and paginated public product reads. Draft/archived Admin catalog records remain unverified; complete that duplicate check through the established CLI authorization workflow before creating products. No connector or alternate production method was used.

## Required Manus return package

- **Preview:** Private desktop/mobile PDP and Cardio collection links, screenshots and a clear review request.
- **Catalog manifest:** Created/updated destination handles, IDs, SKUs, prices, publication status, collection membership and navigation delta.
- **Evidence:** Source values refreshed with timestamps, spec discrepancy resolutions, media selections and policy approvals.
- **Commerce verification:** Per-model cart/checkout tests, membership/entitlement proof, stock/freight evidence and mixed-cart results.
- **Change manifest:** Exact theme files, store-level data changes and rollback steps; no unrelated changes.
- **Documentation:** GitHub workstream/commit references and tracker status. Mark unpublished work as unpublished.

## Original image asset manifest

There are 43 image records across the five selected source records. Links retain the original CDN version query string; they are research assets, not proof that the content has passed visual approval.

### Connect EX-Pro image assets

Catalog provenance: [Echelon product data](https://echelonfit.com/products/echelon-ex-pro.js). Preserve source ordering as a reference, but exclude flagged variants and select final hero/gallery roles only after inspection.

| Position | Original image | Dimensions | Source alt text | Proposed use/status |
|---|---|---|---|---|
| 1 | [Original image 1](https://cdn.shopify.com/s/files/1/2422/9487/products/connect-ex-pro-ech01-ex-pro-24-2980299.jpg?v=1786399752) | 1200 × 1200 px | Connect EX-Pro - Echelon Fit US | Hero candidate; visually verify exact model and revision. |
| 2 | [Original image 2](https://cdn.shopify.com/s/files/1/2422/9487/products/connect-ex-pro-ech01-ex-pro-24-1859012.jpg?v=1786399752) | 1024 × 683 px | Connect EX-Pro - Echelon Fit US | Gallery candidate; verify exact model and contents. |
| 3 | [Original image 3](https://cdn.shopify.com/s/files/1/2422/9487/products/connect-ex-pro-ech01-ex-pro-24-9618358.jpg?v=1786399752) | 1024 × 683 px | Connect EX-Pro - Echelon Fit US | Gallery candidate; verify exact model and contents. |
| 4 | [Original image 4](https://cdn.shopify.com/s/files/1/2422/9487/products/connect-ex-pro-ech01-ex-pro-24-7931055.jpg?v=1786399752) | 1024 × 683 px | Connect EX-Pro - Echelon Fit US | Gallery candidate; verify exact model and contents. |
| 5 | [Original image 5](https://cdn.shopify.com/s/files/1/2422/9487/products/connect-ex-pro-ech01-ex-pro-24-4754088.jpg?v=1786399752) | 2040 × 2040 px | Connect EX-Pro - Echelon Fit US | Gallery candidate; verify exact model and contents. |

### Connect EX-5s-22 image assets

Catalog provenance: [Echelon product data](https://echelonfit.com/products/echelon-smart-connect-bike-ex5s-w-free-membership.js). Preserve source ordering as a reference, but exclude flagged variants and select final hero/gallery roles only after inspection.

| Position | Original image | Dimensions | Source alt text | Proposed use/status |
|---|---|---|---|---|
| 1 | [Original image 1](https://cdn.shopify.com/s/files/1/2422/9487/files/4a1ef39b-4da4-43b7-b148-ddadc9843e50_4798d48e-3dc2-4448-a133-68efd9d6a8a4.png?v=1793661201) | 1333 × 1333 px | Echelon Connect EX-5s-22 black bike product image | Hero candidate; visually verify exact model and revision. |
| 2 | [Original image 2](https://cdn.shopify.com/s/files/1/2422/9487/files/echelon-fitness-ex-5s-connect-bike-in-mossy-oak-country-dna-ech01-ex5s-moc-4207169.png?v=1786399530) | 1500 × 1500 px | Echelon Fitness EX-5s Connect Bike In Mossy Oak Country DNA - Echelon Fit US | EXCLUDE by default: Mossy Oak color/model label conflicts with regular SKU. |
| 3 | [Original image 3](https://cdn.shopify.com/s/files/1/2422/9487/files/echelon-fitness-ex-5s-connect-bike-in-mossy-oak-country-dna-ech01-ex5s-moc-7899966.png?v=1786399530) | 1500 × 1500 px | Echelon Fitness EX-5s Connect Bike In Mossy Oak Country DNA - Echelon Fit US | EXCLUDE by default: Mossy Oak color/model label conflicts with regular SKU. |
| 4 | [Original image 4](https://cdn.shopify.com/s/files/1/2422/9487/files/echelon-fitness-ex-5s-connect-bike-in-mossy-oak-country-dna-ech01-ex5s-moc-3962907.png?v=1786399530) | 1500 × 1500 px | Echelon Fitness EX-5s Connect Bike In Mossy Oak Country DNA - Echelon Fit US | EXCLUDE by default: Mossy Oak color/model label conflicts with regular SKU. |
| 5 | [Original image 5](https://cdn.shopify.com/s/files/1/2422/9487/files/echelon-fitness-ex-5s-connect-bike-in-mossy-oak-country-dna-ech01-ex5s-moc-2068553.png?v=1786399530) | 1500 × 1500 px | Echelon Fitness EX-5s Connect Bike In Mossy Oak Country DNA - Echelon Fit US | EXCLUDE by default: Mossy Oak color/model label conflicts with regular SKU. |
| 6 | [Original image 6](https://cdn.shopify.com/s/files/1/2422/9487/files/echelon-fitness-ex-5s-connect-bike-in-mossy-oak-country-dna-ech01-ex5s-moc-3287243.png?v=1786399530) | 1500 × 1500 px | Echelon Fitness EX-5s Connect Bike In Mossy Oak Country DNA - Echelon Fit US | EXCLUDE by default: Mossy Oak color/model label conflicts with regular SKU. |
| 7 | [Original image 7](https://cdn.shopify.com/s/files/1/2422/9487/files/echelon-fitness-ex-5s-connect-bike-in-mossy-oak-country-dna-ech01-ex5s-moc-8112638.png?v=1786399530) | 1500 × 1500 px | Echelon Fitness EX-5s Connect Bike In Mossy Oak Country DNA - Echelon Fit US | EXCLUDE by default: Mossy Oak color/model label conflicts with regular SKU. |
| 8 | [Original image 8](https://cdn.shopify.com/s/files/1/2422/9487/files/connect-ex-5s-22-ech01-ex5s-8697681.jpg?v=1786399757) | 2000 × 2000 px | Connect EX-5s-22 - Echelon Fit US | Gallery candidate; verify exact model and contents. |
| 9 | [Original image 9](https://cdn.shopify.com/s/files/1/2422/9487/files/connect-ex-5s-22-ech01-ex5s-9356181.jpg?v=1786399757) | 2000 × 2000 px | Connect EX-5s-22 - Echelon Fit US | Gallery candidate; verify exact model and contents. |
| 10 | [Original image 10](https://cdn.shopify.com/s/files/1/2422/9487/files/connect-ex-5s-22-ech01-ex5s-1286386.jpg?v=1786399757) | 2000 × 2000 px | Connect EX-5s-22 - Echelon Fit US | Gallery candidate; verify exact model and contents. |
| 11 | [Original image 11](https://cdn.shopify.com/s/files/1/2422/9487/files/connect-ex-5s-22-ech01-ex5s-5880184.jpg?v=1786399757) | 2000 × 2000 px | Connect EX-5s-22 - Echelon Fit US | Gallery candidate; verify exact model and contents. |
| 12 | [Original image 12](https://cdn.shopify.com/s/files/1/2422/9487/files/connect-ex-5s-22-ech01-ex5s-4241884.jpg?v=1786399758) | 2000 × 1999 px | Connect EX-5s-22 - Echelon Fit US | Gallery candidate; verify exact model and contents. |

### Echelon Stride-9s Pro image assets

Catalog provenance: [Echelon product data](https://echelonfit.com/products/echelon-stride-9s-pro.js). Preserve source ordering as a reference, but exclude flagged variants and select final hero/gallery roles only after inspection.

| Position | Original image | Dimensions | Source alt text | Proposed use/status |
|---|---|---|---|---|
| 1 | [Original image 1](https://cdn.shopify.com/s/files/1/2422/9487/files/echelon-stride-9s-pro-juststride-9s-5976550.png?v=1786399519) | 3168 × 3168 px | Echelon Stride-9s Pro - Echelon Fit US | Hero candidate; visually verify exact model and revision. |
| 2 | [Original image 2](https://cdn.shopify.com/s/files/1/2422/9487/files/echelon-stride-9s-pro-juststride-9s-1698710.png?v=1786399518) | 2018 × 1298 px | Echelon Stride-9s Pro - Echelon Fit US | Gallery candidate; verify exact model and contents. |

### Echelon Stride-8s™ Commercial Smart Treadmill image assets

Catalog provenance: [Echelon product data](https://echelonfit.com/products/stride-8s.js). Preserve source ordering as a reference, but exclude flagged variants and select final hero/gallery roles only after inspection.

| Position | Original image | Dimensions | Source alt text | Proposed use/status |
|---|---|---|---|---|
| 1 | [Original image 1](https://cdn.shopify.com/s/files/1/2422/9487/files/shops_echelon-store.myshopify.com_sessions_moby_vy76ynthgtb3_images_stride-aspirational-runner.png?v=1789665298) | 2048 × 2560 px | n.a. (empty source alt) | Hero candidate; visually verify exact model and revision. |
| 2 | [Original image 2](https://cdn.shopify.com/s/files/1/2422/9487/files/stride-8s-certified-open-box-ech-stride-8s-22-9782835.png?v=1786399516) | 1500 × 1500 px | Stride-8s (Certified Open Box) - Echelon Fit US | EXCLUDE pending reconciliation: visually shows 300 lb max/220.4 lb product weight; current PDP says 400 lb max. |
| 3 | [Original image 3](https://cdn.shopify.com/s/files/1/2422/9487/files/stride-8s-certified-open-box-ech-stride-8s-22-5355403.jpg?v=1786399516) | 1500 × 1500 px | Stride-8s (Certified Open Box) - Echelon Fit US | HOLD: open-box label; verify same new hardware, no promotional overlay, rewrite alt. |
| 4 | [Original image 4](https://cdn.shopify.com/s/files/1/2422/9487/files/stride-8s-certified-open-box-ech-stride-8s-22-2571297.jpg?v=1786399516) | 1500 × 1500 px | Stride-8s (Certified Open Box) - Echelon Fit US | HOLD: open-box label; verify same new hardware, no promotional overlay, rewrite alt. |
| 5 | [Original image 5](https://cdn.shopify.com/s/files/1/2422/9487/files/stride-8s-certified-open-box-ech-stride-8s-22-3968527.png?v=1786399516) | 1500 × 1500 px | Stride-8s (Certified Open Box) - Echelon Fit US | HOLD: open-box label; verify same new hardware, no promotional overlay, rewrite alt. |
| 6 | [Original image 6](https://cdn.shopify.com/s/files/1/2422/9487/files/stride-8s-certified-open-box-ech-stride-8s-22-2506060.jpg?v=1786399515) | 1500 × 1500 px | Stride-8s (Certified Open Box) - Echelon Fit US | HOLD: open-box label; verify same new hardware, no promotional overlay, rewrite alt. |
| 7 | [Original image 7](https://cdn.shopify.com/s/files/1/2422/9487/files/stride-8s-certified-open-box-ech-stride-8s-22-1008339.png?v=1786399516) | 1500 × 1500 px | Stride-8s (Certified Open Box) - Echelon Fit US | HOLD: open-box label; verify same new hardware, no promotional overlay, rewrite alt. |
| 8 | [Original image 8](https://cdn.shopify.com/s/files/1/2422/9487/files/stride-8s-certified-open-box-ech-stride-8s-22-1284239.png?v=1786399516) | 1500 × 1500 px | Stride-8s (Certified Open Box) - Echelon Fit US | HOLD: open-box label; verify same new hardware, no promotional overlay, rewrite alt. |
| 9 | [Original image 9](https://cdn.shopify.com/s/files/1/2422/9487/files/stride-8s-certified-open-box-ech-stride-8s-22-4096077.png?v=1786399517) | 1500 × 1500 px | Stride-8s (Certified Open Box) - Echelon Fit US | HOLD: open-box label; verify same new hardware, no promotional overlay, rewrite alt. |
| 10 | [Original image 10](https://cdn.shopify.com/s/files/1/2422/9487/files/stride-8s-certified-open-box-ech-stride-8s-22-5918034.png?v=1786399516) | 1500 × 1500 px | Stride-8s (Certified Open Box) - Echelon Fit US | HOLD: open-box label; verify same new hardware, no promotional overlay, rewrite alt. |
| 11 | [Original image 11](https://cdn.shopify.com/s/files/1/2422/9487/files/echelon-stride-8s-commercial-smart-treadmill-ech-stride-8s-22-6611353.jpg?v=1786399520) | 2438 × 1625 px | Echelon Stride-8s™ Commercial Smart Treadmill - Echelon Fit US | Gallery candidate; verify exact model and contents. |
| 12 | [Original image 12](https://cdn.shopify.com/s/files/1/2422/9487/files/echelon-stride-8s-commercial-smart-treadmill-ech-stride-8s-22-5610503.jpg?v=1786399520) | 385 × 256 px | Echelon Stride-8s™ Commercial Smart Treadmill - Echelon Fit US | Small asset: do not use as a desktop hero; prefer higher resolution. |

### Echelon Row-s Smart Rowing Machine image assets

Catalog provenance: [Echelon product data](https://echelonfit.com/products/echelon-row-s-connected-rowing-machine-for-bundles.js). Preserve source ordering as a reference, but exclude flagged variants and select final hero/gallery roles only after inspection.

| Position | Original image | Dimensions | Source alt text | Proposed use/status |
|---|---|---|---|---|
| 1 | [Original image 1](https://cdn.shopify.com/s/files/1/2422/9487/files/rower-modern-worlds.png?v=1789849786) | 2048 × 2048 px | n.a. (empty source alt) | Hero candidate; visually verify exact model and revision. |
| 2 | [Original image 2](https://cdn.shopify.com/s/files/1/2422/9487/files/echelon-row-s-smart-rowing-machine-ech-rows-6892660.png?v=1786399529) | 1080 × 1080 px | Echelon Row-s Smart Rowing Machine - Echelon Fit US | Gallery candidate; verify exact model and contents. |
| 3 | [Original image 3](https://cdn.shopify.com/s/files/1/2422/9487/files/echelon-row-s-smart-rowing-machine-ech-rows-9284712.png?v=1786399529) | 1500 × 1500 px | Echelon Row-s Smart Rowing Machine - Echelon Fit US | Gallery candidate; verify exact model and contents. |
| 4 | [Original image 4](https://cdn.shopify.com/s/files/1/2422/9487/files/echelon-row-s-smart-rowing-machine-ech-rows-8861308.png?v=1786399529) | 1500 × 1500 px | Echelon Row-s Smart Rowing Machine - Echelon Fit US | Gallery candidate; verify exact model and contents. |
| 5 | [Original image 5](https://cdn.shopify.com/s/files/1/2422/9487/files/echelon-row-s-smart-rowing-machine-ech-rows-2928593.png?v=1786399529) | 1500 × 1500 px | Echelon Row-s Smart Rowing Machine - Echelon Fit US | Gallery candidate; verify exact model and contents. |
| 6 | [Original image 6](https://cdn.shopify.com/s/files/1/2422/9487/files/echelon-row-s-certified-open-box-ech-rows-7793384.jpg?v=1786399516) | 2000 × 2000 px | Echelon Row-s (Certified Open Box) - Echelon Fit US | HOLD: open-box label; verify same new hardware, no promotional overlay, rewrite alt. |
| 7 | [Original image 7](https://cdn.shopify.com/s/files/1/2422/9487/files/echelon-row-s-smart-rowing-machine-ech-rows-4817762.png?v=1786399529) | 1500 × 1500 px | Echelon Row-s Smart Rowing Machine - Echelon Fit US | Gallery candidate; verify exact model and contents. |
| 8 | [Original image 8](https://cdn.shopify.com/s/files/1/2422/9487/files/echelon-row-s-smart-rowing-machine-ech-rows-1758318.png?v=1786399529) | 1500 × 1500 px | Echelon Row-s Smart Rowing Machine - Echelon Fit US | Gallery candidate; verify exact model and contents. |
| 9 | [Original image 9](https://cdn.shopify.com/s/files/1/2422/9487/files/echelon-row-s-smart-rowing-machine-ech-rows-7552706.png?v=1786399529) | 1500 × 1500 px | Echelon Row-s Smart Rowing Machine - Echelon Fit US | Gallery candidate; verify exact model and contents. |
| 10 | [Original image 10](https://cdn.shopify.com/s/files/1/2422/9487/files/echelon-row-s-smart-rowing-machine-ech-rows-1185983.png?v=1786399529) | 1500 × 1500 px | Echelon Row-s Smart Rowing Machine - Echelon Fit US | Gallery candidate; verify exact model and contents. |
| 11 | [Original image 11](https://cdn.shopify.com/s/files/1/2422/9487/files/image-d3a4070c-3b11-42ec-91c1-b4aeb30fe77f.png?v=1789849511) | 2544 × 1694 px | n.a. (empty source alt) | Gallery candidate; verify exact model and contents. |
| 12 | [Original image 12](https://cdn.shopify.com/s/files/1/2422/9487/files/echelon-row-s-smart-rowing-machine-ech-rows-2199948.jpg?v=1786399529) | 1500 × 1500 px | Echelon Row-s Smart Rowing Machine - Echelon Fit US | Gallery candidate; verify exact model and contents. |

## Completeness and limits

This handoff includes the confirmed request, all five exact source catalog records, source SKUs/barcodes/prices, model-specific available specifications, proposed copy, all 43 source gallery image records, candidate video links, and five official manual attachment links. Exact physical material compositions, some net/freight measurements, cross-store membership setup, inventory allocation, Primal-applicable policies and final media approval remain explicitly unverified; they must not be fabricated or represented as approved.

Research and handoff only: no products, theme code, media, navigation, inventory, pricing, subscriptions, discounts or live storefront content were changed. Responsive/browser QA and checkout acceptance testing are future implementation tasks, not completed tests claimed by this document.
