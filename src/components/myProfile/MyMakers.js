import React from 'react';

import UserPreview from '../UserPreview';

export default function MyMakers({ user, setUser }) {
  const showMyMakers = () => {
    return user.following.map(otherUser => {
      return (
        <UserPreview
          key={user.id}
          user={user}
          setUser={setUser}
          otherUser={otherUser}
        />
      );
    });
  };
  return user.following.length > 0 ? (
    <div> {showMyMakers()} </div>
  ) : (
    <div>
      <p>You aren't following any Makers.</p>
      <p>Click Explore to find Makers to follow.</p>
    </div>
  );
}
