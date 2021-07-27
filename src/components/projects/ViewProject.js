import React, { useEffect, useState } from 'react';

import CommentsContainer from './CommentsContainer';

import '../../css/ViewProject.css';
import { fetchGetProject } from '../../utilities/fetchUtilities';
import ViewProjectImages from './ViewProjectImages';
import ViewProjectContent from './ViewProjectContent';

export default function ViewProject({
  currentProject,
  user,
  setCurrentProject,
  setUser
}) {
  const [project, setProject] = useState(currentProject);

  useEffect(() => {
    fetchGetProject(currentProject.id).then(setCurrentProject);
  }, []);

  return (
    project && (
      <div className='ViewProject'>
        {project?.images?.length > 0 ? (
          <img
            src={project?.images[0].image_url}
            alt={`project by ${project?.author?.username}`}
          ></img>
        ) : null}
        <div className='article-container'>
          {currentProject?.images?.length > 1 && (
            <ViewProjectImages images={currentProject?.images} />
          )}
          <ViewProjectContent project={project} setUser={setUser} user={user} />
        </div>
        <CommentsContainer
          project={currentProject}
          user={user}
          setProject={setCurrentProject}
        />
      </div>
    )
  );
}
