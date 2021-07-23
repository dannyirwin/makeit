import React, { useState } from 'react';
import '../../css/Main.css';

import Login from '../login/Login';
import MyProfile from '../myProfile/MyProfile';
import ProjectEditor from '../projects/ProjectEditor';

export default function Main({ setUserAndToken, user, token }) {
  const [currentPage, setCurrentPage] = useState('MyProfile');
  const [currentProject, setCurrentProject] = useState();

  const showCurrentPage = () => {
    if (!user) {
      return <Login setUserAndToken={setUserAndToken} />;
    }
    switch (currentPage) {
      case 'ProjectEditor':
        return (
          <ProjectEditor
            user={user}
            project={currentProject}
            setCurrentPage={setCurrentPage}
            token={token}
          />
        );
      case 'MyProfile':
      default:
        return (
          <MyProfile
            user={user}
            token={token}
            setCurrentPage={setCurrentPage}
            setCurrentProject={setCurrentProject}
          />
        );
    }
  };
  return <div className='Main'>{showCurrentPage()}</div>;
}
