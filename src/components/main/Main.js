import React, { useState } from 'react';
import '../../css/Main.css';

import MyProfile from '../myProfile/MyProfile';
import Explore from '../explore/Explore';
import Feed from '../feed/Feed';
import ProjectEditor from '../projects/ProjectEditor';
import Header from './Header';

export default function Main({ user, setUser }) {
  const [currentPage, setCurrentPage] = useState('Explore');
  const [currentProject, setCurrentProject] = useState();

  const showCurrentPage = () => {
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
      case 'Feed':
        return <Feed />;
      case 'Explore':
        return <Explore user={user} />;
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

  return (
    <div className='Main'>
      <Header
        user={user}
        setUser={setUser}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      <div className='main-page-container'>{showCurrentPage()}</div>
    </div>
  );
}
