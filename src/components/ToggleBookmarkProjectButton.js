import React from 'react';
import {
  fetchFollowProject,
  fetchUnfollowProject
} from '../utilities/fetchUtilities';

export default function ToggleBookmarkProjectButton({
  project,
  user,
  setUser
}) {
  const handleFollowUser = () => {
    fetchFollowProject(project.id, user.id).then(({ user }) => setUser(user));
  };

  const handleUnfollowUser = () => {
    fetchUnfollowProject(project.id, user.id).then(({ user }) => setUser(user));
  };
  const myFollowingIds = user.followed_projects.map(project => project.id);

  return myFollowingIds.includes(project.id) ? (
    <button onClick={handleUnfollowUser}>Remove Bookmark</button>
  ) : (
    <button onClick={handleFollowUser}>Bookmark</button>
  );
}
