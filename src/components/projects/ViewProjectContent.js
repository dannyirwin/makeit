import React from 'react';

import { createdAt2String } from '../../utilities/generalUtilities';
import ToggleBookmarkProjectButton from '../ToggleBookmarkProjectButton';

export default function ViewProjectContent({ project, user, setUser }) {
  console.log(project?.created_at);
  return (
    <article className='ProjectContent'>
      <h3>{project?.title}</h3>
      <ToggleBookmarkProjectButton
        project={project}
        setUser={setUser}
        user={user}
      />
      <div className='project-info'>
        <p>By: {project?.author.username}</p>
        <p>{createdAt2String(project?.created_at)}</p>
      </div>

      <div
        className='HTMLContent'
        dangerouslySetInnerHTML={{ __html: project?.content }}
      ></div>
    </article>
  );
}
