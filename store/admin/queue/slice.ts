import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { QueueTab } from "@/types/admin";
export interface AdminQueueState { tab: QueueTab; openReviewId: string | null; load: "normal" | "surge"; }
const initialState: AdminQueueState = { tab: "kyb", openReviewId: null, load: "normal" };
const slice = createSlice({ name: "adminQueue", initialState, reducers: {
  setQueueTab: (s,a:PayloadAction<QueueTab>)=>{s.tab=a.payload;s.openReviewId=null}, openReview:(s,a:PayloadAction<string>)=>{s.openReviewId=a.payload}, closeReview:s=>{s.openReviewId=null}, setQueueLoad:(s,a:PayloadAction<"normal"|"surge">)=>{s.load=a.payload},
}});
export const { setQueueTab, openReview, closeReview, setQueueLoad } = slice.actions;
export default slice.reducer;
