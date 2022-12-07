import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import routes from "../routes";
const initialState = {
  posts: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts(state, { payload }) {
      console.log(payload);
      state.posts = payload;
    },
  },
});

const { actions } = postsSlice;

export const fetchPosts = async (dispatch, getState) => {
  const { data } = await axios.get(routes.selectAll("posts"));
  dispatch(actions.setPosts(data));
};

export default postsSlice.reducer;
