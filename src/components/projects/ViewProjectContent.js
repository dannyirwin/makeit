import React from 'react';

import { createdAt2String } from '../../utilities/generalUtilities';
import ToggleBookmarkProjectButton from '../ToggleBookmarkProjectButton';

export default function ViewProjectContent({ project, user, setUser }) {
  return (
    <article className='ProjectContent'>
      <h3>{project?.title}</h3>

      <div className='project-info'>
        {project.author?.image_url && (
          <img src={project.author?.image_url} alt="author's face"></img>
        )}
        <p>By: {project?.author.username}</p>
        <p className='publish-date'>{createdAt2String(project?.created_at)}</p>
        <ToggleBookmarkProjectButton
          project={project}
          setUser={setUser}
          user={user}
        />
      </div>

      <div
        className='HTMLContent'
        dangerouslySetInnerHTML={{ __html: project?.content }}
      ></div>
    </article>
  );
}
