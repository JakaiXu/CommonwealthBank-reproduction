import { configureStore } from "@reduxjs/toolkit";
import clientApi from "./clientApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    [clientApi.reducerPath]: clientApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(clientApi.middleware);
  },
});
setupListeners(store.dispatch);
export * from "./clientApi";
