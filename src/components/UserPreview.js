import React from 'react';

import ToggleFollowButton from './ToggleFollowButton';

export default function UserPreview({ user, otherUser, setUser }) {
  return (
    <div className='UserPreview'>
      <h3>{otherUser.username}</h3>
      <ToggleFollowButton user={user} setUser={setUser} otherUser={otherUser} />
    </div>
  );
}
