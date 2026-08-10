import { describe, it, expect } from "vitest";
import cartReducer, { addToCart, removeFromCart, incrementQty } from "./cartSlice";

const sampleProduct = { id: 1, title: "Test Shirt", price: 20, image: "shirt.jpg" };

describe("cart reducer", () => {
  it("adds a new product with qty 1", () => {
    const state = cartReducer({ items: [] }, addToCart(sampleProduct));
    expect(state.items).toHaveLength(1);
    expect(state.items[0].qty).toBe(1);
  });

  it("increments qty when the same product is added again", () => {
    let state = cartReducer({ items: [] }, addToCart(sampleProduct));
    state = cartReducer(state, addToCart(sampleProduct));
    expect(state.items[0].qty).toBe(2);
  });

  it("increments qty via incrementQty action", () => {
    let state = cartReducer({ items: [] }, addToCart(sampleProduct));
    state = cartReducer(state, incrementQty(1));
    expect(state.items[0].qty).toBe(2);
  });

  it("removes a product from the cart", () => {
    let state = cartReducer({ items: [] }, addToCart(sampleProduct));
    state = cartReducer(state, removeFromCart(1));
    expect(state.items).toHaveLength(0);
  });
});
