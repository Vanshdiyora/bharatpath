import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface AdminDashboardState { notificationsOpen:boolean; notifications:{id:string;text:string;time:string;read:boolean}[]; }
const initialState:AdminDashboardState={notificationsOpen:false,notifications:[{id:"n1",text:"3 KYB submissions have crossed 24 hours",time:"20m ago",read:false},{id:"n2",text:"Integrity flag on Candidate · C218 needs escalation",time:"1h ago",read:false},{id:"n3",text:"Dispute d1 received employer evidence",time:"3h ago",read:true}]};
const slice=createSlice({name:"adminDashboard",initialState,reducers:{toggleNotifications:s=>{s.notificationsOpen=!s.notificationsOpen},markAllNotificationsRead:s=>{s.notifications.forEach(n=>n.read=true)},clearNotification:(s,a:PayloadAction<string>)=>{s.notifications=s.notifications.filter(n=>n.id!==a.payload)}}});
export const {toggleNotifications,markAllNotificationsRead,clearNotification}=slice.actions; export default slice.reducer;
