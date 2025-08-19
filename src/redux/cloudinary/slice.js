import { createSlice } from "@reduxjs/toolkit";
import { uploadImageToCloudinaryThunk } from "./operations";

const cloudinarySlice = createSlice({
  name: "cloudinary",
  initialState: { isLoading: false },
  extraReducers: (builder) => {
    builder
      .addCase(uploadImageToCloudinaryThunk.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(uploadImageToCloudinaryThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(uploadImageToCloudinaryThunk.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const cloudinaryReducer = cloudinarySlice.reducer;
