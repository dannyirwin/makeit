import React from 'react';

import HeaderNav from './HeaderNav';
import UserIcon from './UserIcon';

export default function Header() {
  return (
    <div className='header-container'>
      <div className='Header'>
        <h1 className='logo'>MakeIt </h1>

        <HeaderNav />
        <UserIcon />
      </div>
      <div className='header-bar'></div>
      <div className='header-bar'></div>
    </div>
  );
}
