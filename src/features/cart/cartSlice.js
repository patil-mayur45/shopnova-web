import { createSlice } from "@reduxjs/toolkit";
import { loadState, saveState } from "../../utils/localStorage";

const CART_KEY = "shopnest_cart";

const initialState = {
  items: loadState(CART_KEY, []), // [{ id, title, price, image, qty }]
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const existing = state.items.find((i) => i.id === product.id);
      if (existing) {
        existing.qty += 1;
      } else {
        state.items.push({
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          qty: 1,
        });
      }
      saveState(CART_KEY, state.items);
    },
    removeFromCart(state, action) {
      state.items = state.items.filter((i) => i.id !== action.payload);
      saveState(CART_KEY, state.items);
    },
    incrementQty(state, action) {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) item.qty += 1;
      saveState(CART_KEY, state.items);
    },
    decrementQty(state, action) {
      const item = state.items.find((i) => i.id === action.payload);
      if (item && item.qty > 1) item.qty -= 1;
      saveState(CART_KEY, state.items);
    },
    clearCart(state) {
      state.items = [];
      saveState(CART_KEY, state.items);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQty,
  decrementQty,
  clearCart,
} = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;
export const selectCartCount = (state) =>
  state.cart.items.reduce((sum, i) => sum + i.qty, 0);
export const selectCartTotal = (state) =>
  state.cart.items.reduce((sum, i) => sum + i.qty * i.price, 0);
export const selectIsInCart = (id) => (state) =>
  state.cart.items.some((i) => i.id === id);

export default cartSlice.reducer;
