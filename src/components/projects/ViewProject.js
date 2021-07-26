import React, { useEffect, useState } from 'react';

import CommentsContainer from './CommentsContainer';

import '../../css/ViewProject.css';
import { fetchGetProject } from '../../utilities/fetchUtilities';

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
      <h3>{project?.title}</h3>
      <h4>By: {project?.author.username}</h4>
      <img
        src={project?.preview_image_url}
        alt={`project by ${project?.author.username}`}
      ></img>
      <p>{project?.content}</p>
      <CommentsContainer
        project={project || currentProject}
        user={user}
        setProject={setProject}
      />
    </div>
  );
}
