import React from 'react';
import MyProjects from './MyProjects';

import ProfileSummary from './ProfileSummary';
import SavedProjects from './SavedProjects';

export default function MyProfileContent({ currentContent, user }) {
  const showCurrentContent = () => {
    switch (currentContent) {
      case 'MyProjects':
        return <MyProjects />;
      case 'SavedProjects':
        return <SavedProjects />;
      case 'ProfileSummary':
      default:
        return <ProfileSummary />;
    }
  };
  return <div className='MyProfileContent'>{showCurrentContent()}</div>;
}
