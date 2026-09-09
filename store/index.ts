import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/auth.slice";
import tenantReducer from "./slices/tenant.slice";
import uiReducer from "./slices/ui.slice";
import { baseApi } from "./api/base-api";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tenant: tenantReducer,
    ui: uiReducer,

    [baseApi.reducerPath]: baseApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),

  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;