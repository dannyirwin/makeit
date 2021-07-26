import React, { useState } from 'react';
import '../../css/Main.css';

import MyProfile from '../myProfile/MyProfile';
import Explore from '../explore/Explore';
import Feed from '../feed/Feed';
import ProjectEditor from '../projects/ProjectEditor';
import Header from './Header';
import ViewProject from '../projects/ViewProject';

export default function Main({ user, setUser }) {
  const [currentPage, setCurrentPage] = useState('Feed');
  const [currentProject, setCurrentProject] = useState();

  const showCurrentPage = () => {
    if (currentProject) {
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
        default:
          return (
            <ViewProject
              currentProject={currentProject}
              user={user}
              setCurrentProject={setCurrentProject}
            />
          );
      }
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
        return (
          <Feed
            user={user}
            setUser={setUser}
            setCurrentPage={setCurrentPage}
            setCurrentProject={setCurrentProject}
          />
        );
      case 'Explore':
        return <Explore user={user} setUser={setUser} />;
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
        setCurrentProject={setCurrentProject}
      />
      <div className='main-page-container'>{showCurrentPage()}</div>
    </div>
  );
}
