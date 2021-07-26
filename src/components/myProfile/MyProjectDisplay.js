import React from 'react';
import { fetchDeleteProject } from '../../utilities/fetchUtilities';

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
    setCurrentPage('ProjectEditor');
    setCurrentProject(project);
  };

  const handleView = () => {
    setCurrentPage('ViewProject');
    setCurrentProject(project);
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
