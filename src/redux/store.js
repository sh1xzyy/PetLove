import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./users/slice";
import { noticesReducer } from "./notices/slice";
import newsReducer from "./news/slices";
import { friendsReducer } from "./friends/slices";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    notices: noticesReducer,
    news: newsReducer,
    friends: friendsReducer,
  },
});
