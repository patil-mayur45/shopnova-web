import { createSlice } from "@reduxjs/toolkit";
import { loadState, saveState } from "../../utils/localStorage";

const WISHLIST_KEY = "shopnest_wishlist";

const initialState = {
  items: loadState(WISHLIST_KEY, []), // [{ id, title, price, image }]
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleWishlist(state, action) {
      const product = action.payload;
      const exists = state.items.find((i) => i.id === product.id);
      if (exists) {
        state.items = state.items.filter((i) => i.id !== product.id);
      } else {
        state.items.push({
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
        });
      }
      saveState(WISHLIST_KEY, state.items);
    },
    removeFromWishlist(state, action) {
      state.items = state.items.filter((i) => i.id !== action.payload);
      saveState(WISHLIST_KEY, state.items);
    },
  },
});

export const { toggleWishlist, removeFromWishlist } = wishlistSlice.actions;

export const selectWishlistItems = (state) => state.wishlist.items;
export const selectWishlistCount = (state) => state.wishlist.items.length;
export const selectIsWishlisted = (id) => (state) =>
  state.wishlist.items.some((i) => i.id === id);

export default wishlistSlice.reducer;
