import React, { useState } from 'react';

import CommentForm from './CommentForm';
import Comment from './Comment';

export default function CommentsContainer({ project, user, setProject }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const showComments = () => {
    return project.comments.map(comment => {
      return <Comment key={comment.id} comment={comment} />;
    });
  };

  return (
    <div>
      {isCollapsed ? (
        <button onClick={() => setIsCollapsed(false)}>See Comments</button>
      ) : (
        <button onClick={() => setIsCollapsed(true)}>Hide Comments</button>
      )}
      {!isCollapsed && showComments()}
      <CommentForm
        projectId={project.id}
        userId={user.id}
        setProject={setProject}
      />
    </div>
  );
}
