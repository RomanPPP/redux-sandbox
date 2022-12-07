import { createSlice } from "@reduxjs/toolkit";
import routes from "../routes";
import axios from "axios";

const initialState = {
  users: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers(state, { payload }) {
      state.users = payload;
    },
  },
});

const { actions } = usersSlice;
export const fetchUsers = async (dispatch) => {
  const { data } = await axios.get(routes.selectAll("users"));
  dispatch(actions.setUsers(data));
};
export default usersSlice.reducer;
