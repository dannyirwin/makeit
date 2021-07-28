import React from 'react';
import MyProjectDisplay from './MyProjectDisplay';

export default function MyProjectsContainer({ projects }) {
  const showProjects = () => {
    return projects?.length > 0 ? (
      projects.map(project => {
        return <MyProjectDisplay key={project.id} project={project} />;
      })
    ) : (
      <div>
        <p>You haven't written any projects.</p>
        <p>Start one by clicking "Create New Project"</p>
      </div>
    );
  };
  return <div className='MyProjectsContainer'>{showProjects()}</div>;
}
