import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchFollowProject,
  fetchUnfollowProject
} from '../utilities/fetchUtilities';

import { buildReduxAction } from '../utilities/generalUtilities';

export default function ToggleBookmarkProjectButton({ project }) {
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();
  const handleFollowUser = () => {
    fetchFollowProject(project.id, user.id).then(({ user }) =>
      dispatch(buildReduxAction('SET_USER', user))
    );
  };

  const handleUnfollowUser = () => {
    fetchUnfollowProject(project.id, user.id).then(({ user }) =>
      dispatch(buildReduxAction('SET_USER', user))
    );
  };
  const myFollowingIds = user.followed_projects.map(project => project.id);

  return user.id === project.author_id ? null : myFollowingIds.includes(
      project.id
    ) ? (
    <button onClick={handleUnfollowUser}>Remove Bookmark</button>
  ) : (
    <button onClick={handleFollowUser}>Bookmark</button>
  );
}
