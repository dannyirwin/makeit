import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import EditUserForm from './EditUserForm';

import { createdAt2String } from '../../utilities/generalUtilities';

import '../../css/ProfileSummary.css';

export default function ProfileSummery() {
  const user = useSelector(store => store.user);
  const [editMode, setEditMode] = useState(false);

  const publishedProjects = user.myProjects.filter(
    project => project.is_published === true
  );

  const dateString = createdAt2String(user.created_at);

  return !editMode ? (
    <div className='ProfileSummary'>
      <div className='main-info'>
        <img src={user.image_url} alt="User's Face"></img>
        <div className='text-container'>
          <h1>{user?.username}</h1>
          <p>{user?.about_me}</p>
        </div>
      </div>
      <div className='user-stats'>
        <p>Followers {user?.followers.length}</p>
        <p>Following {user?.following.length} projects</p>
        <p>{publishedProjects.length} published projects</p>
        <p>Joined {dateString}</p>
      </div>
      <button className='edit-btn' onClick={() => setEditMode(true)}>
        Edit Profile
      </button>
    </div>
  ) : (
    <EditUserForm setEditMode={setEditMode} />
  );
}
