import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buildReduxAction } from '../utilities/generalUtilities';
import {
  fetchFollowUser,
  fetchUnfollowUser
} from '../utilities/fetchUtilities';

export default function ToggleFollowButton({ otherUser }) {
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();

  const handleFollowUser = () => {
    fetchFollowUser(otherUser.id, user.id).then(({ user }) =>
      dispatch(buildReduxAction('SET_USER', user))
    );
  };

  const handleUnfollowUser = () => {
    fetchUnfollowUser(otherUser.id, user.id).then(({ user }) =>
      dispatch(buildReduxAction('SET_USER', user))
    );
  };

  const myFollowingIds = user.following.map(user => user.id);

  return myFollowingIds.includes(otherUser.id) ? (
    <button onClick={handleUnfollowUser}>Unfollow {otherUser.username}</button>
  ) : (
    <button onClick={handleFollowUser}>Follow {otherUser.username}</button>
  );
}
