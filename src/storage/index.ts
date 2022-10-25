import { configureStore } from "@reduxjs/toolkit";

import stockReducer from "./CartItems";

const store = configureStore({
  reducer: {
    stock: stockReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
