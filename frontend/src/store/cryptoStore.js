import { configureStore } from "@reduxjs/toolkit";
import watchlistReducer from "./watchlistSlice";
import userReducer from "./userSlice";

export const cryptoStore = configureStore({
  reducer: {
    watchlist: watchlistReducer,
    user: userReducer,
  },
});
