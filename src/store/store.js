import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import postSlice from "./postSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    posts: postSlice,
    //add more Slice here for post (postSlice) so that store se hi data le baar baar db se nahi
  },
});

export default store;
