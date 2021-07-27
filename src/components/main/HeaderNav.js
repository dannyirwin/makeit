import React from 'react';
import NavBtn from './NavBtn';

export default function HeaderNav({
  currentPage,
  setCurrentPage,
  setCurrentProject
}) {
  const pagesArr = ['MyProfile', 'Explore']; //Feed

  const showNavButtons = () => {
    return pagesArr.map((pageString, index) => {
      return (
        <NavBtn
          key={index}
          currentPage={currentPage}
          pageString={pageString}
          setCurrentPage={setCurrentPage}
          setCurrentProject={setCurrentProject}
        />
      );
    });
  };

  return <div className='HeaderNav'>{showNavButtons()}</div>;
}
