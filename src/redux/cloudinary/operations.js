import { createAsyncThunk } from "@reduxjs/toolkit";
import { uploadImageToCloudinary } from "../API/API";

export const uploadImageToCloudinaryThunk = createAsyncThunk(
  "/upload/img",
  async (formData, { rejectWithValue }) => {
    try {
      const data = await uploadImageToCloudinary(formData);
      return data;
    } catch (error) {
      return rejectWithValue({
        message: "Something went wrong with uploading img",
        error,
      });
    }
  },
);
