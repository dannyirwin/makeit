import React from 'react';
import ProjectPreview from '../ProjectPreview';

export default function SavedProjectsContainer({ user, setUser }) {
  const showProjects = () => {
    return user.followed_projects.map(project => {
      return <ProjectPreview project={project} user={user} setUser={setUser} />;
    });
  };
  return user.following.length > 0 ? (
    <div> {showProjects()} </div>
  ) : (
    <div>
      <p>You haven't bookmarked any Projects.</p>
      <p>Click Explore to find Projects to bookmark.</p>
    </div>
  );
}
