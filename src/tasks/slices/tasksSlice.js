import axios from "axios";

import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import routes from "../routes.js";

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const response = await axios.get(routes.tasksPath());
  console.log(response);
  return response.data;
});

export const sendTask = createAsyncThunk("tasks/sendTasks", async (task) => {
  const response = await axios.post(routes.tasksPath(), task);
  return response.data;
});
export const removeTask = createAsyncThunk("tasks/removeTasks", async (id) => {
  await axios.delete(routes.taskPath(id));
  return id;
});
const tasksAdapdter = createEntityAdapter();
const initialState = tasksAdapdter.getInitialState();
const slice = createSlice({
  name: "tasks",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.fulfilled, tasksAdapdter.addMany),
      builder.addCase(sendTask.fulfilled, tasksAdapdter.addOne),
      builder.addCase(removeTask.fulfilled, tasksAdapdter.removeOne);
  },
});

export const selectors = tasksAdapdter.getSelectors((state) => state.tasks);
export default slice.reducer;
