import React from 'react';
import ProjectPreview from '../ProjectPreview';

export default function Projects({ user, setUser }) {
  const showProjects = () => {
    return user.followed_projects.map(project => {
      return <ProjectPreview project={project} user={user} setUser={setUser} />;
    });
  };
  return <div>{showProjects()}</div>;
}
