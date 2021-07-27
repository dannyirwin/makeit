import React from 'react';

import HeaderNav from './HeaderNav';
import UserIcon from './UserIcon';

export default function Header({
  user,
  setUser,
  currentPage,
  setCurrentPage,
  setCurrentProject
}) {
  return (
    <div className='header-container'>
      <div className='Header'>
        <h1 className='logo'>MakeIt </h1>

        <HeaderNav
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          setCurrentProject={setCurrentProject}
        />
        <UserIcon user={user} setUser={setUser} />
      </div>
      <div className='header-bar'></div>
      <div className='header-bar'></div>
    </div>
  );
}
