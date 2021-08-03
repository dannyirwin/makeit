import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { fetchGetUser } from '../../utilities/fetchUtilities';

import ProfileSummary from '../myProfile/ProfileSummary';
import MakerProjectsContainer from './MakerProjectsContainer';

import '../../css/ViewUser.css';
import '../../css/ProfileSummary.css';

export default function ViewUser() {
  const currentUser = useSelector(store => store.viewUser);

  const [viewUser, setViewUser] = useState(currentUser);

  useEffect(() => {
    fetchGetUser(currentUser.id).then(({ user }) => {
      setViewUser(user);
    });
  }, []);

  return (
    <div className='ViewUser'>
      <ProfileSummary user={viewUser} />
      {viewUser?.myProjects && (
        <MakerProjectsContainer projects={viewUser.myProjects} />
      )}
    </div>
  );
}
