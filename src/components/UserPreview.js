import React from 'react';
import { useDispatch } from 'react-redux';
import { buildReduxAction } from '../utilities/generalUtilities';

import ToggleFollowButton from './ToggleFollowButton';

import '../css/UserPreview.css';

export default function UserPreview({ otherUser }) {
  const dispatch = useDispatch();
  return (
    <div className='UserPreview'>
      <div
        className='user-image-container'
        onClick={() => {
          dispatch(buildReduxAction('SET_VIEW_USER', otherUser));
          dispatch(buildReduxAction('SET_CURRENT_PAGE', 'ViewUser'));
        }}
      >
        <img src={otherUser.image_url} alt='Searched Profile Preview'></img>
      </div>
      <h3>{otherUser.username}</h3>
      <p>{otherUser.about_me}</p>
      <ToggleFollowButton otherUser={otherUser} />
    </div>
  );
}
