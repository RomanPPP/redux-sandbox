import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
//import axios from 'axios';
import Posts from './Posts.jsx';
import routes from '../routes.js';

import { actions as usersActions } from '../slices/usersSlice.js';
import { actions as postsActions } from '../slices/postsSlice.js';
import { actions as commentsActions } from '../slices/commentsSlice.js';
const users = [
  { id: 'user1', username: 'user1', name: 'User 1' },
  { id: 'user2', username: 'user2', name: 'User 2' },
  { id: 'user3', username: 'user3', name: 'User 3' },
];
 
const posts = [
  {
    id: 'post1',
    author: 'user1',
    body: 'Первый пост',
    comments: ['comment1', 'comment2'],
  },
  {
    id: 'post2',
    author: 'user2',
    body: 'Второй пост',
    comments: [],
  },
];
 
const comments = [
  {
    id: 'comment1',
    author: 'user2',
    text: 'Первый комментарий',
  },
  {
    id: 'comment2',
    author: 'user3',
    text: 'Второй комментарий',
  },
];
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      /*const { data } = await axios.get(routes.getData());
      const {
        users,
        posts,
        comments,
      } = data;
      */
      dispatch(usersActions.setUsers(users));
      dispatch(postsActions.setPosts(posts));
      dispatch(commentsActions.setComments(comments))
    };

    fetchData();
  });

  return (
    <div className="col-5">
      <Posts />
    </div>
  );
};

export default App;