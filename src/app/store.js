import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/productsSlice";
import cartReducer from "../features/cart/cartSlice";
import wishlistReducer from "../features/wishlist/wishlistSlice";
import authReducer from "../features/auth/authSlice";

// NOTE: @reduxjs/toolkit's configureStore already includes redux-thunk
// in its default middleware, which is what powers createAsyncThunk calls
// like fetchProducts() in productsSlice.js.
export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    auth: authReducer,
  },
});
