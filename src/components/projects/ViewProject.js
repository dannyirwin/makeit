import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { fetchGetProject } from '../../utilities/fetchUtilities';
import { buildReduxAction } from '../../utilities/generalUtilities';

import ViewProjectImages from './ViewProjectImages';
import ViewProjectContent from './ViewProjectContent';
import CommentsContainer from './CommentsContainer';

import '../../css/ViewProject.css';

export default function ViewProject() {
  const dispatch = useDispatch();
  const currentProject = useSelector(store => store.currentProject);

  useEffect(() => {
    fetchGetProject(currentProject.id).then(project =>
      dispatch(buildReduxAction('SET_CURRENT_PROJECT', project))
    );
  }, []);

  return (
    currentProject && (
      <div className='ViewProject'>
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
          <ViewProjectContent project={currentProject} />
        </div>
        <CommentsContainer project={currentProject} />
      </div>
    )
  );
}
