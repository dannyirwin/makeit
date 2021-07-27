import React from 'react';

import { createdAt2String } from '../../utilities/generalUtilities';

export default function Comment({ comment, isAuthor }) {
  return (
    <div>
      <div className='comment-info'>
        <p>{createdAt2String(comment.created_at, true)}</p>
        <p>
          {comment.user.username}
          {isAuthor ? ' - author' : null}
        </p>
      </div>
      {comment.content}
    </div>
  );
}
