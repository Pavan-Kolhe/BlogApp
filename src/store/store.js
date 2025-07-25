import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    //add more Slice here for post (postSlice) so that store se hi data le baar baar db se nahi
  },
});

export default store;
