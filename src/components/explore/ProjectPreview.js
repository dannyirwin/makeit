import React from 'react';

export default function ProjectPreview({ project }) {
  return (
    <div className='UserPreview'>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p>By: {project.author.username}</p>
      <button>Bookmark Project</button>
    </div>
  );
}
