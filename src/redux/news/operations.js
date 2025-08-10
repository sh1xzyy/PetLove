import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchNews } from "../API/API";

export const fetchNewsThunk = createAsyncThunk(
  "news/fetchNews",
  async ({ keyword, page, limit }, { rejectWithValue }) => {
    try {
      const data = await fetchNews({ keyword, page, limit });
      console.log("Data:", data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
