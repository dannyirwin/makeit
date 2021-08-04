import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { buildReduxAction } from '../../utilities/generalUtilities';
import { fetchPostComment } from '../../utilities/fetchUtilities';

export default function CommentForm({ projectId, userId, setProject }) {
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const handleSubmitComment = e => {
    e.preventDefault();
    if (content && content !== '') {
      fetchPostComment(content, userId, projectId).then(project => {
        dispatch(buildReduxAction('SET_CURRENT_PROJECT', project));
      });
    }
    e.target.reset();
  };

  return (
    <form className='CommentForm' onSubmit={handleSubmitComment}>
      <label htmlFor='content'></label>
      <input
        type='text'
        name='content'
        onChange={e => setContent(e.target.value)}
        required
      ></input>
      <input type='submit' value='Leave a Comment'></input>
    </form>
  );
}
