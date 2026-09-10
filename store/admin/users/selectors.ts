import type { RootState } from "@/store";
export const selectAdminUsers = (state: RootState) => state.admin.users;
