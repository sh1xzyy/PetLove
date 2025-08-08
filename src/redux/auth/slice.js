import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addPetThunk } from "./operations.js";

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
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(addPetThunk.fulfilled, (state) => {
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

export const authReducer = slice.reducer;
