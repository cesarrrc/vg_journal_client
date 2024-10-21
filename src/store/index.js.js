import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/UserSlice";
import postsReducer from "./features/PostSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postsReducer,
  },
});
