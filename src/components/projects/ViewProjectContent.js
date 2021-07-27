import React from 'react';

export default function ViewProjectContent({ project }) {
  return (
    <article className='ProjectContent'>
      <h3>{project?.title}</h3>
      <p>By: {project?.author.username}</p>

      <div
        className='HTMLContent'
        dangerouslySetInnerHTML={{ __html: project?.content }}
      ></div>
    </article>
  );
}
