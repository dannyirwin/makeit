import React from 'react';
import ProjectPreview from '../ProjectPreview';

export default function MakerProjectsContainer({ projects }) {
  const showProjects = () => {
    return projects?.length > 0 ? (
      projects
        .filter(project => project.is_published === true)
        .map(project => {
          console.log(project);
          return <ProjectPreview project={project} />;
        })
    ) : (
      <p className='no-projects-message'>
        This user has not published any projects
      </p>
    );
  };
  return (
    <div className='MakerProjectsContainer'>
      {showProjects()}
      <p className='background-text'>PROJECTS</p>
    </div>
  );
}
