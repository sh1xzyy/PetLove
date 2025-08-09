import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/slice";
import { noticesReducer } from "./notices/slice";
import newsReducer from "./slices/newsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    notices: noticesReducer,
    news: newsReducer,
  },
});
