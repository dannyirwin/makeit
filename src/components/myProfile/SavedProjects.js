import React from 'react';
import SavedProjectsContainer from './SavedProjectsContainer';

export default function SavedProjects({ user, setUser }) {
  return (
    <div className='SavedProjects'>
      <div>Search</div>
      <SavedProjectsContainer user={user} setUser={setUser} />
    </div>
  );
}
