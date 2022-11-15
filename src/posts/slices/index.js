import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./postsSlice.js";
import usersReducer from "./usersSlice.js";
import commentsReducer from "./commentsSlice.js";

export default configureStore({
  reducer: {
    usersReducer,
    postsReducer,
    commentsReducer,
  },
});
