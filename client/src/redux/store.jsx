import { configureStore } from "@reduxjs/toolkit";
import { alertSlice } from "./features/alertSlice";
import { dashboardSlice } from "./features/dashboardSlice";
import { navlinkSlice } from "./features/navlinkSlice";

export default configureStore({
  reducer: {
    alerts: alertSlice.reducer,
    dashboardContext: dashboardSlice.reducer,
    navlinkContext: navlinkSlice.reducer
  },
});