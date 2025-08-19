import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  addPetThunk,
  loginUserThunk,
  logoutUserThunk,
  refreshUserThunk,
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
      .addCase(registerUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(loginUserThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(loginUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(logoutUserThunk.fulfilled, () => {
        return initialState;
      })
      .addCase(refreshUserThunk.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUserThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUserThunk.rejected, (state) => {
        state.isRefreshing = false;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addMatcher(
        isAnyOf(
          addPetThunk.pending,
          logoutUserThunk.pending,
          registerUserThunk.pending,
        ),
        (state) => {
          state.isLoading = true;
        },
      )
      .addMatcher(
        isAnyOf(
          addPetThunk.rejected,
          logoutUserThunk.rejected,
          registerUserThunk.rejected,
        ),
        (state) => {
          state.isLoading = false;
        },
      );
  },
});

export const usersReducer = slice.reducer;
