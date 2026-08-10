# ShopNest — React + Redux E-commerce App

Built to the project guidelines: dashboard, category filter, search, login,
product detail page, cart, and wishlist — all using React, Redux Toolkit
(includes redux-thunk), Tailwind CSS, react-router-dom, and the
[Fake Store API](https://fakestoreapi.com/).

## 1. Install

```bash
npm install
```

## 2. Run the dev server

```bash
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## 3. Run unit tests (React Testing Library + Vitest)

```bash
npm test
```

## 4. Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  app/store.js              # Redux store (configureStore includes thunk)
  features/
    products/productsSlice.js   # fetch products/categories, search+filter
    cart/cartSlice.js           # cart CRUD, persisted to localStorage
    wishlist/wishlistSlice.js   # wishlist toggle, persisted to localStorage
    auth/authSlice.js           # simple login/logout state
  components/
    Header.jsx, Footer.jsx, Banner.jsx, ProductCard.jsx,
    CategoryFilter.jsx, FaqAccordion.jsx, PolicyStrip.jsx
  pages/
    Dashboard.jsx, ProductDetail.jsx, Cart.jsx, Wishlist.jsx, Login.jsx
  utils/localStorage.js      # load/save helpers for persistence
```

## Features implemented

- **Dashboard**: sticky header (logo, search, cart/wishlist icons with live
  counts, login/logout), parallax banner, category chips, responsive product
  grid pulled live from the Fake Store API, policy strip (shipping/returns/
  support), FAQ accordion, footer with newsletter signup + contact info.
- **Search**: icon toggles a search field; submitting filters the dashboard
  grid by title match.
- **Category filter**: chips fetched from the API; clicking one filters the
  grid client-side.
- **Login**: email + password fields with validation (required, email
  format, min password length); on success stores a minimal user object.
- **Product card**: image, title, discounted vs. original price, star
  rating, add-to-cart (flips to "Go to Cart" once added), wishlist toggle.
- **Product detail page**: large image, price/discount, rating, description,
  delivery estimate, payment-options note, key features grid, add-to-cart /
  wishlist actions.
- **Cart**: quantity stepper, remove item, live subtotal/shipping/total,
  persisted in `localStorage` so it survives a refresh.
- **Wishlist**: add-to-cart shortcut and remove, persisted in `localStorage`.
- **Tests**: example unit tests for the cart reducer and `ProductCard` using
  React Testing Library + Vitest.

## Deployment (Vercel example)

1. Push this project to a GitHub repository.
2. Go to https://vercel.com/, "New Project", import the repo.
3. Framework preset: Vite. Build command `npm run build`, output dir `dist`.
4. Deploy — Vercel will redeploy automatically on every push to `main`.

(Netlify works the same way: build command `npm run build`, publish
directory `dist`.)

## Notes / next steps

- Swap the placeholder brand name/logo/colors in `tailwind.config.js` and
  `Header.jsx` for your own.
- The Fake Store API has no real discount field — `ProductCard.jsx` and
  `ProductDetail.jsx` derive a display-only "original price" for the
  strikethrough effect; replace with real discount data if you plug in a
  different backend.
- Checkout is a placeholder button — wire it up to a real payment flow
  when you're ready to go further.
