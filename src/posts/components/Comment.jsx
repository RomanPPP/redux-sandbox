import React from 'react';
import { useSelector } from 'react-redux';

const Comment = ({ commentId }) => {
  const {comment, author} = useSelector(state => {
    const {usersReducer, commentsReducer} = state
    console.log(state)
    const comment = commentsReducer.comments.find(comment => comment.id === commentId)
    if(!comment) return {}
    const author = usersReducer.users.find(user => user.id === comment.author)
    return {comment, author}
  })

  if (!author || !comment) {
    return null;
  }

  return (
    <>
      <h5 className="card-title">{ author.name }</h5>
      <p className="card-text">{ comment.text }</p>
    </>
  );
};

export default Comment;