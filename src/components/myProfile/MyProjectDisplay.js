import React from 'react';
import {
  fetchDeleteProject,
  fetchGetProject
} from '../../utilities/fetchUtilities';

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
    <div>
      <p>{project.title + '-' + project.id + ' ' + project.is_published}</p>
      <button onClick={handleView}>View</button>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={() => deleteProject(id)}>X</button>
    </div>
  );
}
