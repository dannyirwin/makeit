import React from 'react';

export default function UserPreview({ user }) {
  return (
    <div className='UserPreview'>
      <h3>{user.username}</h3>
      <button>Follow {user.username}</button>
    </div>
  );
}
