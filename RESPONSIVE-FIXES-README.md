# Chhabi Beauty Studio — Responsive Fixes

This copy contains responsive layout fixes and a functional mobile navigation menu.

## What changed
- `src/Components/Navbar.jsx`: added menu open/close state, accessible button labels, close-on-link-click, and a mobile booking link.
- `src/Styles/navbar.css`: responsive dropdown navigation for tablet/mobile.
- `src/Styles/about.css` and `src/Styles/bridal.css`: removed the overflow caused by fixed 600px images and fixed margins; image widths now adapt to their grid/screen.
- `src/Styles/hero.css`, `services.css`, `gallery.css`, `testimonials.css`, `faq.css`, `contact.css`, `footer.css`: adjusted mobile typography, grid widths, spacing, and wrapping.
- `src/index.css`: global responsive safety rules.

## Run it
1. Extract this ZIP.
2. Open the `Chhabi-beauty-studio` folder in VS Code.
3. Run `npm install` if needed.
4. Run `npm run dev`.
5. Test using browser DevTools at 375px, 390px, 768px, 1024px, and desktop width.

`node_modules` is intentionally excluded from this ZIP. Your existing project folder is not changed by this copy.
