import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  addPetThunk,
  loginUserThunk,
  logoutUserThunk,
  registerUserThunk,
} from "./operations.js";

const initialState = {
  user: {
    name: "",
    email: "",
  },
  token: null,
  sid: null,
  refreshToken: null,
  error: null,
  isLoading: false,
  isLoggedIn: false,
  isRefreshing: false,
  isRegistered: false,
};

const slice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(addPetThunk.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(registerUserThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(registerUserThunk.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(loginUserThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(loginUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(logoutUserThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutUserThunk.fulfilled, () => {
        return initialState;
      })
      .addCase(logoutUserThunk.rejected, (state) => {
        state.isLoading = false;
      })
      .addMatcher(isAnyOf(addPetThunk.rejected), (state) => {
        state.isLoading = false;
      })
      .addMatcher(isAnyOf(addPetThunk.pending), (state) => {
        state.isLoading = true;
      });
  },
});

export const usersReducer = slice.reducer;
