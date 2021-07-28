import React from 'react';
import {
  fetchDeleteProject,
  fetchGetProject
} from '../../utilities/fetchUtilities';

import '../../css/MyProjects.css';
import PublishedStatusIcon from './PublishedStatusIcon';

export default function MyProjectDisplay({
  project,
  setUser,
  setCurrentProject,
  setCurrentPage
}) {
  const { id } = project;
  //const authorName = author.username;

  const deleteProject = projectId => {
    fetchDeleteProject(projectId).then(({ user }) => setUser(user));
  };

  const handleEdit = () => {
    fetchGetProject(project.id).then(response => {
      setCurrentProject(response);
      setCurrentPage('ProjectEditor');
    });
  };

  const handleView = () => {
    fetchGetProject(project.id).then(response => {
      setCurrentProject(response);
      setCurrentPage('ViewProject');
    });
  };

  return (
    <div className='MyProjectsDisplay'>
      <PublishedStatusIcon publishedStatus={project.is_published} />
      <h3>{project.title}</h3>
      {project?.images.length > 0 && (
        <img src={project.images[0].image_url} alt='project preview'></img>
      )}
      <button onClick={handleView}>View</button>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={() => deleteProject(id)}>Delete</button>
    </div>
  );
}
