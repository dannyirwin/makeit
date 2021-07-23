import React from 'react';
import { fetchDeleteProject } from '../../utilities/fetchUtilities';

export default function MyProjectDisplay({
  project,
  setUser,
  setCurrentProject
}) {
  const { id } = project;
  //const authorName = author.username;

  const deleteProject = projectId => {
    fetchDeleteProject(projectId).then(({ user }) => setUser(user));
  };

  return (
    <div key={project.id}>
      <p>{project.title + '-' + project.id + ' ' + project.is_published}</p>
      <button onClick={() => setCurrentProject(project)}>Edit</button>
      <button onClick={() => deleteProject(id)}>X</button>
    </div>
  );
}
