import React from 'react';
import MyProjectDisplay from './MyProjectDisplay';

export default function MyProjectsContainer({
  projects,
  setUser,
  setCurrentProject
}) {
  const showProjects = () => {
    return projects ? (
      projects.map(project => {
        return (
          <MyProjectDisplay
            key={project.id}
            project={project}
            setUser={setUser}
            setCurrentProject={setCurrentProject}
          />
        );
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
