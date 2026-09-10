import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { KybMode } from "@/types/admin";
export interface AdminSettingsState { tab:"approval"|"platform"; kybMode:KybMode; autoChecks:Record<string,boolean>; }
const initialState:AdminSettingsState={tab:"approval",kybMode:"manual",autoChecks:{gstin:true,pan:true,bank:false,address:true}};
const slice=createSlice({name:"adminSettings",initialState,reducers:{setSettingsTab:(s,a:PayloadAction<"approval"|"platform">)=>{s.tab=a.payload},setKybMode:(s,a:PayloadAction<KybMode>)=>{s.kybMode=a.payload},toggleCheck:(s,a:PayloadAction<string>)=>{s.autoChecks[a.payload]=!s.autoChecks[a.payload]}}});
export const {setSettingsTab,setKybMode,toggleCheck}=slice.actions; export default slice.reducer;
