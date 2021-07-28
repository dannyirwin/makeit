import React from 'react';
import NavBtn from './NavBtn';

export default function HeaderNav() {
  const pagesArr = ['MyProfile', 'Explore']; //Feed

  const showNavButtons = () => {
    return pagesArr.map((pageString, index) => {
      return <NavBtn key={index} pageString={pageString} />;
    });
  };

  return <div className='HeaderNav'>{showNavButtons()}</div>;
}
