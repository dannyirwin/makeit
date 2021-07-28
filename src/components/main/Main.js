import React from 'react';
import { useSelector } from 'react-redux';

import MyProfile from '../myProfile/MyProfile';
import Explore from '../explore/Explore';
import ProjectEditor from '../projects/projectEditor/ProjectEditor';
import Header from './Header';
import ViewProject from '../projects/ViewProject';
import ViewUser from '../makers/ViewUser';

import '../../css/Main.css';

export default function Main() {
  const currentPage = useSelector(store => store.currentPage);

  const showCurrentPage = () => {
    switch (currentPage) {
      case 'ProjectEditor':
        return <ProjectEditor />;
      case 'ViewProject':
        return <ViewProject />;
      case 'Explore':
        return <Explore />;
      case 'ViewUser':
        return <ViewUser />;
      case 'MyProfile':
      default:
        return <MyProfile />;
    }
  };

  return (
    <div className='Main'>
      <Header />
      <div className='main-page-container'>{showCurrentPage()}</div>
    </div>
  );
}
