import React, { useEffect, useState } from 'react';

import CommentsContainer from './CommentsContainer';

import '../../css/ViewProject.css';
import { fetchGetProject } from '../../utilities/fetchUtilities';
import ViewProjectImages from './ViewProjectImages';
import ViewProjectContent from './ViewProjectContent';

export default function ViewProject({
  currentProject,
  user,
  setCurrentProject
}) {
  const [project, setProject] = useState();

  useEffect(() => {
    fetchGetProject(currentProject.id).then(setProject);
  }, []);

  return (
    <div className='ViewProject'>
      {project?.images.length > 0 ? (
        <img
          src={project?.images[0].image_url}
          alt={`project by ${project?.author.username}`}
        ></img>
      ) : null}
      <div className='article-container'>
        {currentProject?.images.length > 1 && (
          <ViewProjectImages images={currentProject?.images} />
        )}
        <ViewProjectContent project={project} />
      </div>
      <CommentsContainer
        project={project || currentProject}
        user={user}
        setProject={setProject}
      />
    </div>
  );
}
