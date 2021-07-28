import React from 'react';
import ProjectPreview from '../ProjectPreview';

export default function SavedProjectsContainer({
  user,
  setUser,
  setCurrentPage,
  setCurrentProject
}) {
  const showProjects = () => {
    return user.followed_projects.map(project => {
      return (
        <ProjectPreview
          project={project}
          user={user}
          setUser={setUser}
          setCurrentPage={setCurrentPage}
          setCurrentProject={setCurrentProject}
        />
      );
    });
  };
  return user.followed_projects.length > 0 ? (
    <div className='SavedProjectsContainer'> {showProjects()} </div>
  ) : (
    <div className='SavedProjectsContainer'>
      <p>You haven't bookmarked any Projects.</p>
      <p>Click Explore to find Projects to bookmark.</p>
    </div>
  );
}
