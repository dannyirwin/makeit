import React from 'react';
import MyProjects from './MyProjects';

import ProfileSummary from './ProfileSummary';
import SavedProjects from './SavedProjects';
import MyMakers from './MyMakers';

export default function MyProfileContent({
  currentContent,
  user,
  setUser,
  setCurrentProject,
  setCurrentPage
}) {
  const showCurrentContent = () => {
    switch (currentContent) {
      case 'MyProjects':
        return (
          <MyProjects
            projects={user.myProjects}
            setUser={setUser}
            setCurrentProject={setCurrentProject}
            setCurrentPage={setCurrentPage}
          />
        );
      case 'SavedProjects':
        return (
          <SavedProjects
            user={user}
            setUser={setUser}
            setCurrentProject={setCurrentProject}
            setCurrentPage={setCurrentPage}
          />
        );
      case 'MyMakers':
        return (
          <MyMakers
            user={user}
            setUser={setUser}
            setCurrentProject={setCurrentProject}
            setCurrentPage={setCurrentPage}
          />
        );
      case 'ProfileSummary':
      default:
        return (
          <ProfileSummary
            user={user}
            setUser={setUser}
            setCurrentProject={setCurrentProject}
            setCurrentPage={setCurrentPage}
          />
        );
    }
  };
  return <div className='MyProfileContent'>{showCurrentContent()}</div>;
}
