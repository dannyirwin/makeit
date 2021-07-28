import React from 'react';
import { useSelector } from 'react-redux';

import UserPreview from '../UserPreview';

import '../../css/MyMakers.css';

export default function MyMakers() {
  const user = useSelector(store => store.user);
  const showMyMakers = () => {
    return user.following.map(otherUser => {
      return <UserPreview key={otherUser.id} otherUser={otherUser} />;
    });
  };
  return (
    <div className='MyMakers'>
      {user.following.length > 0 ? (
        <div className='my-makers-container'> {showMyMakers()} </div>
      ) : (
        <div>
          <p>You aren't following any Makers.</p>
          <p>Click Explore to find Makers to follow.</p>
        </div>
      )}
    </div>
  );
}
