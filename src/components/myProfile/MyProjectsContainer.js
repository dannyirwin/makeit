import React from 'react';
import MyProjectDisplay from './MyProjectDisplay';

export default function MyProjectsContainer({
  projects,
  setUser,
  setCurrentProject,
  setCurrentPage
}) {
  const showProjects = () => {
    return projects?.length > 0 ? (
      projects.map(project => {
        return (
          <MyProjectDisplay
            key={project.id}
            project={project}
            setUser={setUser}
            setCurrentProject={setCurrentProject}
            setCurrentPage={setCurrentPage}
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
