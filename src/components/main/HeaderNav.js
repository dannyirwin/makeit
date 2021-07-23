import React from 'react';

export default function HeaderNav({ currentPage, setCurrentPage }) {
  const classNames = buttonValue => {
    let classNames = '';
    if (buttonValue === currentPage) {
      classNames += ' selected';
    }
    return classNames;
  };

  return (
    <div className='HeaderNav'>
      <button
        className={classNames('MyProfile')}
        onClick={() => setCurrentPage('MyProfile')}
      >
        My Profile
      </button>
      <button
        className={classNames('Explore')}
        onClick={() => setCurrentPage('Explore')}
      >
        Explore
      </button>
      <button
        className={classNames('Feed')}
        onClick={() => setCurrentPage('Feed')}
      >
        Feed
      </button>
    </div>
  );
}
