import React from 'react';
import ToggleBookmarkProjectButton from './ToggleBookmarkProjectButton';

import '../css/ProjectPreview.css';

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

  const showImage = () => {
    if (project?.images.length > 0) {
      const image = project.images[0];
      return <img src={image.image_url} alt={image.alt}></img>;
    }
  };
  return (
    <div className='ProjectPreview'>
      <div className='preview-project-info'>
        <div className='preview-project-head'>
          <h3>{project.title}</h3>
          <p>By: {project.author.username}</p>
        </div>

        <p className='preview-project-description'>{project.description}</p>
      </div>

      {showImage()}
      <div className='preview-project-controls'>
        <button onClick={handleViewProject}>View</button>
        <ToggleBookmarkProjectButton
          project={project}
          user={user}
          setUser={setUser}
        />
      </div>
    </div>
  );
}
