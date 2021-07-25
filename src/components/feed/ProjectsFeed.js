import React from 'react';
import ProjectPreview from '../ProjectPreview';

export default function ProjectsFeed({
  user,
  setUser,
  setCurrentPage,
  setCurrentProject
}) {
  const showProjects = () => {
    return user.followed_projects.map(project => {
      return (
        <ProjectPreview
          key={project.id}
          project={project}
          user={user}
          setUser={setUser}
          setCurrentPage={setCurrentPage}
          setCurrentProject={setCurrentProject}
        />
      );
    });
  };
  return <div className='ProjectsFeed'>{showProjects()}</div>;
}
