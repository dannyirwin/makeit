import React from 'react';

export default function AboutMe({ user, setUser }) {
  return (
    <div className='ProfileSummary'>
      <h1>{user?.username}</h1>
      <p>{user?.about_me}</p>
      <h4>Followers: {user?.followers.length}</h4>
      <h4>Following: {user?.following.length}</h4>
    </div>
  );
}
