import React from 'react';
import { fetchDeleteProject } from '../../utilities/fetchUtilities';

export default function ProjectDisplay({
  project,
  setUser,
  setCurrentProject
}) {
  const { id, title, description, previewImage, author } = project;
  const authorName = author.username;

  const deleteProject = projectId => {
    fetchDeleteProject(projectId).then(({ user }) => setUser(user));
  };

  return (
    <div key={project.id}>
      <p>{project.title + '-' + project.id}</p>
      <button onClick={() => setCurrentProject(project)}>Edit</button>
      <button onClick={() => deleteProject(id)}>X</button>
    </div>
  );
}
