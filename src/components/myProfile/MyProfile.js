import React, { useState } from 'react';
import MyProfileContent from './MyProfileContent';
import MyProfileNav from './MyProfileNav';

import '../../css/MyProfile.css';

export default function MyProfile({
  user,
  setCurrentPage,
  setUser,
  setCurrentProject
}) {
  const [currentContent, setCurrentContent] = useState('AboutMe');
  return (
    <div className='MyProfile'>
      <MyProfileNav
        setCurrentPage={setCurrentPage}
        currentContent={currentContent}
        setCurrentContent={setCurrentContent}
      />
      <MyProfileContent
        currentContent={currentContent}
        user={user}
        setUser={setUser}
        setCurrentProject={setCurrentProject}
      />
    </div>
  );
}
