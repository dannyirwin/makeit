import React, { useState } from 'react';

import '../../css/ProjectsPage.css';
import MyProjects from './MyProjects';
import ProjectEditor from './ProjectEditor';
import ProjectsHeader from './ProjectsHeader';
import SavedProjects from './SavedProjects';

export default function ProjectsPage() {
  const [currentPage, setCurrentPage] = useState('myProjects');

  const showCurrentPage = () => {
    switch (currentPage) {
      case 'savedProjects':
        return <SavedProjects />;
      case 'myProjects':
      default:
        return <MyProjects />;
    }
  };
  return (
    <div className='ProjectsPage'>
      <ProjectsHeader
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      {showCurrentPage()}
    </div>
  );
}
