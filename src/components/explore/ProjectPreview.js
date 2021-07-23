import React from 'react';

export default function ProjectPreview({ project }) {
  return (
    <div className='UserPreview'>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <button>Save Project</button>
    </div>
  );
}
