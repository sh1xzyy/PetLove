import { createSlice } from "@reduxjs/toolkit";
import { fetchNewsThunk } from "../operations/newsOperations";

const newsSlice = createSlice({
  name: "news",
  initialState: {
    news: [],
    page: 1,
    perPage: 6,
    totalPages: 0,
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {
    resetNews: (state) => {
      state.news = [];
      state.page = 1;
      state.perPage = 6;
      state.totalPages = 0;
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewsThunk.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchNewsThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.news = action.payload.results;
        state.page = action.payload.page;
        state.perPage = action.payload.perPage;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchNewsThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { resetNews } = newsSlice.actions;
export default newsSlice.reducer;
