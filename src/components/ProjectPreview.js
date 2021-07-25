import React from 'react';
import ToggleBookmarkProjectButton from './ToggleBookmarkProjectButton';

export default function ProjectPreview({
  project,
  user,
  setUser,
  setCurrentPage,
  setCurrentProject
}) {
  const handleViewProject = () => {
    setCurrentPage('ViewProject');
    setCurrentProject(project);
  };

  const showViewButton = () => {
    return setCurrentPage ? (
      <button onClick={handleViewProject}>View</button>
    ) : null;
  };

  return (
    <div className='ProjectPreview'>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p>By: {project.author.username}</p>
      {showViewButton()}
      <ToggleBookmarkProjectButton
        project={project}
        user={user}
        setUser={setUser}
      />
    </div>
  );
}
