import { createSlice } from "@reduxjs/toolkit";
import routes from "../routes";
import axios from "axios";

const initialState = {
  comments: [],
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    setComments(state, { payload }) {
      state.comments = payload;
    },
  },
});

const { actions } = commentsSlice;

export const fetchComments = async (dispatch) => {
  const { data } = await axios.get(routes.selectAll("comments"));
  dispatch(actions.setComments(data));
};
export default commentsSlice.reducer;
