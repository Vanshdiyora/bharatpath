import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/auth.slice";
import tenantReducer from "./slices/tenant.slice";
import uiReducer from "./slices/ui.slice";
import notificationUIReducer from "./slices/notification-slice";

import { baseApi } from "./api/base-api";
import { notificationApi } from "./api/notification-api";

export const store = configureStore({
  reducer: {
    /*
     * Application state
     */
    auth: authReducer,
    tenant: tenantReducer,
    ui: uiReducer,

    /*
     * Notification UI state
     *
     * Controls whether the notification
     * dropdown is open or closed.
     */
    notificationUI: notificationUIReducer,

    /*
     * RTK Query APIs
     */
    [baseApi.reducerPath]:
      baseApi.reducer,

    [notificationApi.reducerPath]:
      notificationApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      /*
       * Existing application API
       */
      baseApi.middleware,

      /*
       * Notification API
       */
      notificationApi.middleware
    ),

  devTools:
    process.env.NODE_ENV !== "production",
});

/*
 * Root Redux state
 */
export type RootState =
  ReturnType<typeof store.getState>;

/*
 * Redux dispatch
 */
export type AppDispatch =
  typeof store.dispatch;

/*
 * Redux store
 *
 * Required by useAppStore()
 */
export type AppStore =
  typeof store;