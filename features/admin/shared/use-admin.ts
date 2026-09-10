"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";

import {
  markAllNotificationsRead,
  toggleNotifications,
  toggleSidebar,
} from "@/store/admin";

import {
  selectAdminNotifications,
  selectAdminNotificationsOpen,
  selectAdminSidebarCollapsed,
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