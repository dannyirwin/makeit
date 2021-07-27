import React from 'react';
import SavedProjectsContainer from './SavedProjectsContainer';

export default function SavedProjects({
  user,
  setUser,
  setCurrentPage,
  setCurrentProject
}) {
  return (
    <div className='SavedProjects'>
      <SavedProjectsContainer
        user={user}
        setUser={setUser}
        setCurrentPage={setCurrentPage}
        setCurrentProject={setCurrentProject}
      />
    </div>
  );
}
