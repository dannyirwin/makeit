import React from 'react';

import '../css/ViewProject.css';

export default function ViewProject({ project }) {
  return (
    <div className='ViewProject'>
      <h3>{project.title}</h3>
      <h4>By: {project.author.username}</h4>
      <img
        src={project.preview_image_url}
        alt={`project by ${project.author.username}`}
      ></img>
      <p>{project.content}</p>
    </div>
  );
}
