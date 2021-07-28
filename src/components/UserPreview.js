import React from 'react';

import '../css/UserPreview.css';

import ToggleFollowButton from './ToggleFollowButton';

export default function UserPreview({ user, otherUser, setUser }) {
  return (
    <div className='UserPreview'>
      <div className='user-image-container'>
        <img src={otherUser.image_url} alt='Searched Profile Preview'></img>
      </div>
      <h3>{otherUser.username}</h3>
      <p>{otherUser.about_me}</p>
      <ToggleFollowButton user={user} setUser={setUser} otherUser={otherUser} />
    </div>
  );
}
