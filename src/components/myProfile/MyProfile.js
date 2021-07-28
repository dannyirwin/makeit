import React, { useState } from 'react';
import MyProfileContent from './MyProfileContent';
import MyProfileNav from './MyProfileNav';

import '../../css/MyProfile.css';

export default function MyProfile() {
  const [currentContent, setCurrentContent] = useState('ProfileSummary');
  return (
    <div className='MyProfile'>
      <MyProfileNav
        currentContent={currentContent}
        setCurrentContent={setCurrentContent}
      />
      <MyProfileContent currentContent={currentContent} />
    </div>
  );
}
