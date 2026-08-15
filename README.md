# ShopNova 🛒

ShopNova is a fully responsive e-commerce web application built with **React**, **Redux Toolkit**, and **Tailwind CSS**. It allows users to browse products, filter products by category, search products, view product details, manage a shopping cart and wishlist, and log in. Product data is fetched from the **Fake Store API**.

## ✨ Features

* **Dashboard / Landing Page**

  * Sticky navigation header
  * Logo and search bar
  * Cart and wishlist icons with live item counts
  * Login/logout functionality
  * Animated parallax banner
  * Product category filters
  * Responsive product grid
  * Shipping, returns, and support section
  * FAQ accordion

* **Category Filter**

  * Browse products by category
  * Electronics
  * Jewelry
  * Men's Clothing
  * Women's Clothing
  * Products fetched dynamically from the API

* **Search**

  * Toggleable search bar
  * Real-time product search
  * Search products by name

* **Product Card**

  * Product image
  * Product title
  * Discounted and original price
  * Star rating
  * Add to Cart button
  * Buy Now button
  * Wishlist toggle

* **Product Detail Page**

  * Complete product information
  * Product description
  * Rating
  * Delivery estimate
  * Key product features
  * Add to Cart
  * Buy Now
  * Add to Wishlist

* **Shopping Cart**

  * Increase/decrease product quantity
  * Remove products
  * Live subtotal
  * Shipping calculation
  * Total price
  * Cart data saved using `localStorage`

* **Wishlist**

  * Save products for later
  * Remove products from wishlist
  * Move wishlist products to cart
  * Wishlist data saved using `localStorage`

* **Login**

  * Email and password form
  * Client-side form validation
  * Login/logout functionality

* **Buy Now**

  * Quickly add a product to the cart
  * Directly move to checkout
  * Available from product cards and product detail pages

## 🛠️ Tech Stack

* **React** — UI library
* **Redux Toolkit** — State management
* **Redux Thunk** — Asynchronous data fetching
* **React Router DOM** — Client-side routing
* **Tailwind CSS** — Styling and responsive design
* **React Icons** — Icons
* **Fake Store API** — Product data
* **Vite** — Development and build tool
* **Vitest** — Unit testing
* **React Testing Library** — React component testing

## 📂 Project Structure

```text
shopnova-web/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── ProductCard.jsx
│   │   ├── CategoryFilter.jsx
│   │   └── ...
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── Cart.jsx
│   │   ├── Wishlist.jsx
│   │   ├── Login.jsx
│   │   └── ...
│   │
│   ├── redux/
│   │   ├── store.js
│   │   ├── productSlice.js
│   │   ├── cartSlice.js
│   │   └── wishlistSlice.js
│   │
│   ├── services/
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── package.json
├── package-lock.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

* [Node.js](https://nodejs.org/) — v18 or later recommended
* npm
* Git

### Installation

Clone the repository:

```bash
git clone https://github.com/<your-username>/shopnova-web.git
```

Go to the project folder:

```bash
cd shopnova-web
```

Install the required dependencies:

```bash
npm install
```

### Run the Development Server

Start the development server:

```bash
npm run dev
```

Open the application in your browser:

```text
http://localhost:5173
```

## 🧪 Run Tests

Run the test suite using:

```bash
npm test
```

## 🏗️ Build for Production

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 🌐 Deployment

ShopNova can be deployed using platforms such as **Vercel** or **Netlify**.

### Deployment Steps

1. Push the project to GitHub.
2. Import the GitHub repository into Vercel or Netlify.
3. Set the build command:

```bash
npm run build
```

4. Set the output directory:

```text
dist
```

5. Deploy the project.

## 📸 Screenshots

Add screenshots of your project here.

Recommended screenshots:

* Home / Dashboard
* Product Detail Page
* Shopping Cart
* Wishlist
* Login Page

Example:

```markdown
![ShopNova Home Page](./screenshots/home.png)

![Product Detail Page](./screenshots/product-detail.png)

![Shopping Cart](./screenshots/cart.png)
```

## 🔗 API

ShopNova uses the **Fake Store API** to fetch product information.

* **Products:** `https://fakestoreapi.com/products`
* **Categories:** `https://fakestoreapi.com/products/categories`

## 💾 Local Storage

ShopNova uses browser `localStorage` to persist:

* Shopping cart items
* Wishlist items

This means the user's cart and wishlist can remain available after refreshing the page.

## 📱 Responsive Design

The application is designed to work across different screen sizes:

* 💻 Desktop
* 💻 Laptop
* 📱 Tablet
* 📱 Mobile

Tailwind CSS is used to create the responsive user interface.

## 🔐 Authentication

The project includes a login interface with:

* Email validation
* Password validation
* Login/logout UI
* Client-side form validation

> Note: The login system is currently frontend-based unless a backend authentication service is connected.

## 🎯 Future Improvements

Possible future improvements include:

* Real payment gateway integration
* Backend authentication
* User registration
* Order history
* Product reviews
* Admin dashboard
* Real database integration
* Product pagination
* Advanced product filtering
* Dark mode
* Backend API using Node.js and Express

## 📄 License

This project is open source and available under the **MIT License**.

## 🙌 Acknowledgements

* Product data provided by [Fake Store API](https://fakestoreapi.com/)
* UI built with [React](https://react.dev/)
* State management using [Redux Toolkit](https://redux-toolkit.js.org/)
* Styling using [Tailwind CSS](https://tailwindcss.com/)
* Icons from [React Icons](https://react-icons.github.io/react-icons/)
* Build tool powered by [Vite](https://vite.dev/)

## 👨‍💻 Author

**Mayur Patil**

### ShopNova — Modern E-commerce Web Application 🛒

Built with ❤️ using React, Redux Toolkit, Tailwind CSS, and Vite.

