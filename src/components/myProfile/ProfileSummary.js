import React, { useState } from 'react';
import { createdAt2String } from '../../utilities/generalUtilities';

import EditUserForm from './EditUserForm';
import ToggleFollowButton from '../ToggleFollowButton';

import '../../css/ProfileSummary.css';

export default function ProfileSummary({ user, isMainUser = false }) {
  const [editMode, setEditMode] = useState(false);

  const publishedProjects = user?.myProjects?.filter(
    project => project.is_published === true
  );

  const dateString = createdAt2String(user.created_at);

  return !editMode ? (
    <div className='ProfileSummary'>
      <div className='main-info'>
        {user.image_url && <img src={user.image_url} alt="User's Face"></img>}
        <div className='text-container'>
          <h1>{user?.username}</h1>
          <p>{user?.about_me}</p>
        </div>
      </div>
      <div className='user-stats'>
        <p>Followers {user.follower_count}</p>
        <p>Following {user.following_count} projects</p>
        <p>{publishedProjects?.length || 0} published projects</p>
        <p>Joined {dateString}</p>
      </div>
      {isMainUser ? (
        <button className='edit-btn' onClick={() => setEditMode(true)}>
          Edit Profile
        </button>
      ) : (
        <ToggleFollowButton otherUser={user} />
      )}
    </div>
  ) : (
    <EditUserForm setEditMode={setEditMode} />
  );
}
