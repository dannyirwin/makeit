import React from 'react';

import UserPreview from '../UserPreview';

export default function MyMakers({ user, setUser }) {
  console.log(user.following);
  const showMyMakers = () => {
    return user.following.map(otherUser => {
      return (
        <UserPreview user={user} setUser={setUser} otherUser={otherUser} />
      );
    });
  };
  return <div>{showMyMakers()}</div>;
}
