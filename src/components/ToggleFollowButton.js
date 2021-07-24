import React from 'react';
import {
  fetchFollowUser,
  fetchUnfollowUser
} from '../utilities/fetchUtilities';

export default function ToggleFollowButton({ otherUser, user, setUser }) {
  const handleFollowUser = () => {
    fetchFollowUser(otherUser.id, user.id).then(({ user }) => setUser(user));
  };

  const handleUnfollowUser = () => {
    fetchUnfollowUser(otherUser.id, user.id).then(({ user }) => setUser(user));
  };

  const myFollowingIds = user.following.map(user => user.id);

  return myFollowingIds.includes(otherUser.id) ? (
    <button onClick={handleUnfollowUser}>Unfollow {otherUser.username}</button>
  ) : (
    <button onClick={handleFollowUser}>Follow {otherUser.username}</button>
  );
}
