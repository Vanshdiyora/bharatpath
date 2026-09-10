import type { RootState } from "@/store";

export const selectAdminDashboard = (state: RootState) => state.admin.dashboard;

export const selectAdminNotifications = (state: RootState) =>
  state.admin.dashboard.notifications;

export const selectAdminNotificationsOpen = (state: RootState) =>
  state.admin.dashboard.notificationsOpen;
