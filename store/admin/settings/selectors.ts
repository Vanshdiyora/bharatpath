import type { RootState } from "@/store";
export const selectAdminSettings = (state: RootState) => state.admin.settings;
