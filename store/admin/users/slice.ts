import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { UserSegment } from "@/types/admin";
export interface AdminUsersState { segment: UserSegment; search: string; }
const initialState: AdminUsersState = { segment: "employers", search: "" };
const slice=createSlice({name:"adminUsers",initialState,reducers:{setUserSegment:(s,a:PayloadAction<UserSegment>)=>{s.segment=a.payload},setUserSearch:(s,a:PayloadAction<string>)=>{s.search=a.payload}}});
export const {setUserSegment,setUserSearch}=slice.actions; export default slice.reducer;
