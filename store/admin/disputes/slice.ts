import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface AdminDisputesState { tab: "open"|"resolved"; openId: string|null; }
const initialState: AdminDisputesState={tab:"open",openId:null};
const slice=createSlice({name:"adminDisputes",initialState,reducers:{setDisputeTab:(s,a:PayloadAction<"open"|"resolved">)=>{s.tab=a.payload;s.openId=null},openDispute:(s,a:PayloadAction<string>)=>{s.openId=a.payload},closeDispute:s=>{s.openId=null},resolveDispute:s=>{s.openId=null}}});
export const {setDisputeTab,openDispute,closeDispute,resolveDispute}=slice.actions; export default slice.reducer;
