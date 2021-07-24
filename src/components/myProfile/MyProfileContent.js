import React from 'react';
import MyProjects from './MyProjects';

import ProfileSummary from './ProfileSummary';
import SavedProjects from './SavedProjects';
import MyMakers from './MyMakers';

export default function MyProfileContent({
  currentContent,
  user,
  setUser,
  setCurrentProject
}) {
  const showCurrentContent = () => {
    switch (currentContent) {
      case 'MyProjects':
        return (
          <MyProjects
            projects={user.myProjects}
            setUser={setUser}
            setCurrentProject={setCurrentProject}
          />
        );
      case 'SavedProjects':
        return <SavedProjects user={user} setUser={setUser} />;
      case 'MyMakers':
        return <MyMakers user={user} setUser={setUser} />;
      case 'ProfileSummary':
      default:
        return <ProfileSummary user={user} setUser={setUser} />;
    }
  };
  return <div className='MyProfileContent'>{showCurrentContent()}</div>;
}
