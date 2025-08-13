import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./users/slice";
import { noticesReducer } from "./notices/slice";
import newsReducer from "./news/slices";
import { friendsReducer } from "./friends/slices";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const usersPersistConfig = {
  key: "users",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    users: persistReducer(usersPersistConfig, usersReducer),
    notices: noticesReducer,
    news: newsReducer,
    friends: friendsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/PAUSE",
          "persist/PURGE",
          "persist/FLUSH",
          "persist/REGISTER",
        ],
      },
    }),
});

export const persistor = persistStore(store);
