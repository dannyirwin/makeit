import React from 'react';
import {
  fetchFollowUser,
  fetchUnfollowUser
} from '../../utilities/fetchUtilities';

export default function UserPreview({ user, searchResultUser, setUser }) {
  const handleFollowUser = () => {
    fetchFollowUser(searchResultUser.id, user.id).then(({ user }) =>
      setUser(user)
    );
  };

  const handleUnfollowUser = () => {
    fetchUnfollowUser(searchResultUser.id, user.id).then(({ user }) =>
      setUser(user)
    );
  };

  const showFollowUnFollowButton = () => {
    const myFollowingIds = user.following.map(user => user.id);
    return myFollowingIds.includes(searchResultUser.id) ? (
      <button onClick={handleUnfollowUser}>
        Unfollow {searchResultUser.username}
      </button>
    ) : (
      <button onClick={handleFollowUser}>
        Follow {searchResultUser.username}
      </button>
    );
  };

  return (
    <div className='UserPreview'>
      <h3>{searchResultUser.username}</h3>
      {showFollowUnFollowButton()}
    </div>
  );
}
