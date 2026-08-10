import { createSlice } from "@reduxjs/toolkit";
import { loadState, saveState } from "../../utils/localStorage";

const AUTH_KEY = "shopnest_auth";

const initialState = {
  user: loadState(AUTH_KEY, null), // { email }
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.user = { email: action.payload.email };
      saveState(AUTH_KEY, state.user);
    },
    logout(state) {
      state.user = null;
      saveState(AUTH_KEY, null);
    },
  },
});

export const { login, logout } = authSlice.actions;
export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;
