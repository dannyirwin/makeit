import React from 'react';
import ProjectDisplay from './ProjectDisplay';

export default function ProjectsContainer({
  projects,
  setUser,
  setCurrentProject
}) {
  const showProjects = () => {
    return projects.map(project => {
      return (
        <ProjectDisplay
          project={project}
          setUser={setUser}
          setCurrentProject={setCurrentProject}
        />
      );
    });
  };
  return <div className='ProjectsContainer'>{showProjects()}</div>;
}
