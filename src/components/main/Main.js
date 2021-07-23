import React, { useState, useEffect } from 'react';
import '../../css/Main.css';

import Login from '../login/Login';
import MyProfile from '../myProfile/MyProfile';
import ProjectEditor from '../projects/ProjectEditor';

export default function Main({ user, setUser }) {
  const [currentPage, setCurrentPage] = useState('MyProfile');
  const [currentProject, setCurrentProject] = useState();

  const showCurrentPage = () => {
    if (!user) {
      return <Login setUser={setUser} />;
    }

    if (currentProject) {
      return (
        <ProjectEditor
          user={user}
          project={currentProject}
          setCurrentPage={setCurrentPage}
          setCurrentProject={setCurrentProject}
          setUser={setUser}
        />
      );
    }

    switch (currentPage) {
      case 'ProjectEditor':
        return (
          <ProjectEditor
            user={user}
            project={currentProject}
            setCurrentPage={setCurrentPage}
            setCurrentProject={setCurrentProject}
            setUser={setUser}
          />
        );
      case 'MyProfile':
      default:
        return (
          <MyProfile
            user={user}
            setUser={setUser}
            setCurrentPage={setCurrentPage}
            setCurrentProject={setCurrentProject}
          />
        );
    }
  };

  return <div className='Main'>{showCurrentPage()}</div>;
}
