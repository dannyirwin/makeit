import React from 'react';

export default function MyProfileNav({
  setCurrentPage,
  currentContent,
  setCurrentContent
}) {
  const classNames = buttonValue => {
    let classNames = 'nav-btn';
    if (buttonValue === currentContent) {
      classNames += ' selected';
    }
    return classNames;
  };
  return (
    <div className='MyProfileNav'>
      <button onClick={() => setCurrentPage('ProjectEditor')}>
        + Create New Project
      </button>
      <nav>
        <h3
          className={classNames('ProfileSummary')}
          onClick={() => setCurrentContent('ProfileSummary')}
        >
          About Me
        </h3>
        <h3
          className={classNames('MyProjects')}
          onClick={() => setCurrentContent('MyProjects')}
        >
          My Projects
        </h3>
        <h3
          className={classNames('SavedProjects')}
          onClick={() => setCurrentContent('SavedProjects')}
        >
          Saved Projects
        </h3>
      </nav>
    </div>
  );
}
