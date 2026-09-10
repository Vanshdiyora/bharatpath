"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";

import {
  markAllNotificationsRead,
  signIn as signInAction,
  selectAdminNotifications,
  selectAdminNotificationsOpen,
  selectAdminSidebarCollapsed,
  toggleNotifications,
  toggleSidebar,
} from "@/store/admin";

export function useAdmin() {
  const dispatch = useAppDispatch();

  const sidebarCollapsed = useAppSelector(
    selectAdminSidebarCollapsed,
  );

  const notifications = useAppSelector(
    selectAdminNotifications,
  );

  const notificationsOpen = useAppSelector(
    selectAdminNotificationsOpen,
  );

  return {
    sidebarCollapsed,
    notifications,
    notificationsOpen,

    signIn: () => {
      dispatch(
        signInAction({
          name: "Admin Operator",
          role: "Platform Administrator",
        }),
      );
    },

    toggleSidebar: () => {
      dispatch(toggleSidebar());
    },

    toggleNotifications: () => {
      dispatch(toggleNotifications());
    },

    markAllNotificationsRead: () => {
      dispatch(markAllNotificationsRead());
    },
  };
}