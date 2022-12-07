import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
//import axios from 'axios';
import Posts from "./Posts.jsx";
import routes from "../routes.js";

import { fetchUsers } from "../slices/usersSlice.js";
import { fetchPosts } from "../slices/postsSlice.js";
import { fetchComments } from "../slices/commentsSlice.js";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers);
    dispatch(getPosts);
    dispatch(fetchComments);
  });

  return (
    <div className="col-5">
      <Posts />
    </div>
  );
};

export default App;
