import React from 'react';
import { useDispatch } from 'react-redux';
import { buildReduxAction } from '../utilities/generalUtilities';

import ToggleBookmarkProjectButton from './ToggleBookmarkProjectButton';

import '../css/ProjectPreview.css';

export default function ProjectPreview({ project }) {
  const dispatch = useDispatch();
  dispatch(buildReduxAction('SET_CURRENT_PROJECT', project));

  const handleViewProject = () => {
    dispatch(buildReduxAction('SET_CURRENT_PAGE', 'ViewProject'));
    dispatch(buildReduxAction('SET_CURRENT_PROJECT', project));
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

        <p className='preview-project-description' onClick={handleViewProject}>
          {project.description}
        </p>
      </div>

      {showImage()}
      <div className='preview-project-controls'>
        <ToggleBookmarkProjectButton project={project} />
      </div>
    </div>
  );
}
