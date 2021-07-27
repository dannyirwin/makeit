import React, { useState } from 'react';

import '../../css/CommentsContainer.css';

import CommentForm from './CommentForm';
import Comment from './Comment';

export default function CommentsContainer({ project, user, setProject }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const showComments = () => {
    return project.comments.map(comment => {
      return (
        <Comment
          key={comment.id}
          comment={comment}
          isAuthor={comment.user_id === project.author_id}
        />
      );
    });
  };

  return (
    <div className='CommentsContainer'>
      {isCollapsed ? (
        <button onClick={() => setIsCollapsed(false)}>
          - See {project?.comments.length} Comments -
        </button>
      ) : (
        <button onClick={() => setIsCollapsed(true)}>
          - Hide {project?.comments.length} Comments -
        </button>
      )}
      <div className='comments-display'>{!isCollapsed && showComments()}</div>
      <CommentForm
        projectId={project.id}
        userId={user.id}
        setProject={setProject}
      />
    </div>
  );
}
