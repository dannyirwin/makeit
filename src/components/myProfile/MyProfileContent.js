import React from 'react';
import MyProjects from './MyProjects';
import { useSelector } from 'react-redux';

import ProfileSummary from './ProfileSummary';
import SavedProjects from './SavedProjects';
import MyMakers from './MyMakers';

export default function MyProfileContent({ currentContent }) {
  const user = useSelector(store => store.user);

  const showCurrentContent = () => {
    switch (currentContent) {
      case 'MyProjects':
        return <MyProjects projects={user.myProjects} />;
      case 'SavedProjects':
        return <SavedProjects />;
      case 'MyMakers':
        return <MyMakers />;
      case 'ProfileSummary':
      default:
        return <ProfileSummary />;
    }
  };
  return <div className='MyProfileContent'>{showCurrentContent()}</div>;
}
