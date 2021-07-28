import React, { useEffect } from 'react';

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
  useEffect(() => {
    fetchGetProject(currentProject.id).then(setCurrentProject);
  }, []);

  return (
    currentProject && (
      <div className='ViewcurrentProject'>
        {currentProject?.images?.length > 0 ? (
          <img
            src={currentProject?.images[0].image_url}
            alt={`project by ${currentProject?.author?.username}`}
          ></img>
        ) : null}
        <div className='article-container'>
          {currentProject?.images?.length > 1 && (
            <ViewProjectImages images={currentProject?.images} />
          )}
          <ViewProjectContent
            project={currentProject}
            setUser={setUser}
            user={user}
          />
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
