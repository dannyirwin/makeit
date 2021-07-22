import React from 'react';

export default function ProjectsHeader({ currentPage, setCurrentPage }) {
  const handleClassNames = buttonType => {
    let className = 'projects-nav-btn';
    if (buttonType === currentPage) {
      className += ' selected';
    }
    return className;
  };

  return (
    <div className='ProjectsHeader'>
      <div
        className={handleClassNames('myProjects')}
        onClick={() => setCurrentPage('myProjects')}
      >
        My Projects
      </div>
      <div
        className={handleClassNames('savedProjects')}
        onClick={() => setCurrentPage('savedProjects')}
      >
        Saved Projects
      </div>
    </div>
  );
}
