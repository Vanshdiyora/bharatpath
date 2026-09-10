import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./common/slices/auth.slice";
import tenantReducer from "./common/slices/tenant.slice";
import uiReducer from "./common/slices/ui.slice";
import notificationUIReducer from "./common/slices/notification-slice";

import { baseApi } from "./api/base-api";
import { notificationApi } from "./api/notification-api";
import collegeSettingsReducer from "./college/settings/college-settings.slice";

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
    collegeSettings: collegeSettingsReducer,
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