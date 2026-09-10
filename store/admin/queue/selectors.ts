import type { RootState } from "@/store";
export const selectAdminQueue = (state: RootState) => state.admin.queue;
