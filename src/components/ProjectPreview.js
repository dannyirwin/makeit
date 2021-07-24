import React from 'react';
import ToggleBookmarkProjectButton from './ToggleBookmarkProjectButton';

export default function ProjectPreview({ project, user, setUser }) {
  return (
    <div className='UserPreview'>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p>By: {project.author.username}</p>
      <ToggleBookmarkProjectButton
        project={project}
        user={user}
        setUser={setUser}
      />
    </div>
  );
}
