# shadow-docs

Praktiska tehniskā dokumentācija ar pilnīgiem, palaižamiem koda piemēriem. Statisks HTML/CSS/JS, bez build soļa.

## Struktūra

- `index.html` — sākumlapa ar kategorijām
- `pages/wordpress/` — WordPress sadaļa (tēmas uzstādīšana, AJAX/nonce, WooCommerce endpointi, lomas/tiesības, hooki/filtri)
- `css/style.css` — dizaina sistēma (gaišs/tumšs režīms, CSS mainīgie)
- `js/main.js` — tēmas pārslēgs, mobilā sānjosla

## Attīstība

Nav build soļa — atver `index.html` tieši pārlūkā, vai palaid jebkuru statisko failu serveri, piem.:

```bash
npx serve .
```

## Izvietošana

Automātiski deployojas uz Vercel no `main` zara caur GitHub integrāciju.
