// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const BASE_URL = "https://fakestoreapi.com";

// // Thunks (redux-thunk is used under the hood by RTK's createAsyncThunk)
// export const fetchProducts = createAsyncThunk(
//   "products/fetchProducts",
//   async () => {
//     const res = await fetch(`${BASE_URL}/products`);
//     if (!res.ok) throw new Error("Failed to fetch products");
//     return res.json();
//   }
// );

// export const fetchCategories = createAsyncThunk(
//   "products/fetchCategories",
//   async () => {
//     const res = await fetch(`${BASE_URL}/products/categories`);
//     if (!res.ok) throw new Error("Failed to fetch categories");
//     return res.json();
//   }
// );

// export const fetchProductById = createAsyncThunk(
//   "products/fetchProductById",
//   async (id) => {
//     const res = await fetch(`${BASE_URL}/products/${id}`);
//     if (!res.ok) throw new Error("Failed to fetch product");
//     return res.json();
//   }
// );

// const initialState = {
//   items: [],
//   categories: [],
//   selectedProduct: null,
//   status: "idle", // idle | loading | succeeded | failed
//   error: null,
//   activeCategory: "all",
//   searchTerm: "",
// };

// const productsSlice = createSlice({
//   name: "products",
//   initialState,
//   reducers: {
//     setActiveCategory(state, action) {
//       state.activeCategory = action.payload;
//     },
//     setSearchTerm(state, action) {
//       state.searchTerm = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchProducts.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchProducts.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.items = action.payload;
//       })
//       .addCase(fetchProducts.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message;
//       })
//       .addCase(fetchCategories.fulfilled, (state, action) => {
//         state.categories = action.payload;
//       })
//       .addCase(fetchProductById.pending, (state) => {
//         state.status = "loading";
//         state.selectedProduct = null;
//       })
//       .addCase(fetchProductById.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.selectedProduct = action.payload;
//       })
//       .addCase(fetchProductById.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message;
//       });
//   },
// });

// export const { setActiveCategory, setSearchTerm } = productsSlice.actions;

// // Selector: derives the visible product list from category + search filters
// export const selectVisibleProducts = (state) => {
//   const { items, activeCategory, searchTerm } = state.products;
//   return items
//     .filter((p) =>
//       activeCategory === "all" ? true : p.category === activeCategory
//     )
//     .filter((p) =>
//       p.title.toLowerCase().includes(searchTerm.trim().toLowerCase())
//     );
// };

// export default productsSlice.reducer;


import { createSlice, createAsyncThunk, createSelector } from "@reduxjs/toolkit";

const BASE_URL = "https://fakestoreapi.com";

// ====================
// Thunks
// ====================

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await fetch(`${BASE_URL}/products`);

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    return res.json();
  }
);

export const fetchCategories = createAsyncThunk(
  "products/fetchCategories",
  async () => {
    const res = await fetch(`${BASE_URL}/products/categories`);

    if (!res.ok) {
      throw new Error("Failed to fetch categories");
    }

    return res.json();
  }
);

export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (id) => {
    const res = await fetch(`${BASE_URL}/products/${id}`);

    if (!res.ok) {
      throw new Error("Failed to fetch product");
    }

    return res.json();
  }
);

// ====================
// Initial State
// ====================

const initialState = {
  items: [],
  categories: [],
  selectedProduct: null,
  status: "idle",
  error: null,
  activeCategory: "all",
  searchTerm: "",
};

// ====================
// Products Slice
// ====================

const productsSlice = createSlice({
  name: "products",

  initialState,

  reducers: {
    setActiveCategory(state, action) {
      state.activeCategory = action.payload;
    },

    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder

      // Fetch all products
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })

      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })

      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // Fetch categories
      .addCase(fetchCategories.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })

      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.categories = action.payload;
      })

      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // Fetch product by ID
      .addCase(fetchProductById.pending, (state) => {
        state.status = "loading";
        state.selectedProduct = null;
        state.error = null;
      })

      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.selectedProduct = action.payload;
      })

      .addCase(fetchProductById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// ====================
// Actions
// ====================

export const {
  setActiveCategory,
  setSearchTerm,
} = productsSlice.actions;

// ====================
// Memoized Selectors
// ====================

const selectProducts = (state) => state.products.items;

const selectActiveCategory = (state) =>
  state.products.activeCategory;

const selectSearchTerm = (state) =>
  state.products.searchTerm;

// This selector is memoized.
// It will not create a new array unless
// items, activeCategory, or searchTerm changes.

export const selectVisibleProducts = createSelector(
  [
    selectProducts,
    selectActiveCategory,
    selectSearchTerm,
  ],

  (items, activeCategory, searchTerm) => {
    const search = searchTerm.trim().toLowerCase();

    return items
      .filter((product) =>
        activeCategory === "all"
          ? true
          : product.category === activeCategory
      )
      .filter((product) =>
        product.title.toLowerCase().includes(search)
      );
  }
);

// ====================
// Reducer
// ====================

export default productsSlice.reducer;