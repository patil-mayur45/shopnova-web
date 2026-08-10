import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "../features/cart/cartSlice";
import wishlistReducer from "../features/wishlist/wishlistSlice";
import ProductCard from "./ProductCard";

// Test product
const product = {
  id: 1,
  title: "Sample Backpack",
  price: 49.99,
  image: "backpack.jpg",
  rating: {
    rate: 4.2,
    count: 120,
  },
};

// Helper function to render component
// with Redux and React Router
function renderWithProviders(ui) {
  const store = configureStore({
    reducer: {
      cart: cartReducer,
      wishlist: wishlistReducer,
    },
  });

  return render(
    <Provider store={store}>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        {ui}
      </BrowserRouter>
    </Provider>
  );
}

// ProductCard tests
describe("ProductCard", () => {
  it("renders the product title and price", () => {
    renderWithProviders(<ProductCard product={product} />);

    expect(
      screen.getByText("Sample Backpack")
    ).toBeInTheDocument();

    expect(
      screen.getByText("$49.99")
    ).toBeInTheDocument();
  });

  it("shows an Add to Cart button by default", () => {
    renderWithProviders(<ProductCard product={product} />);

    expect(
      screen.getByText("Add to Cart")
    ).toBeInTheDocument();
  });
});
