import React from 'react';
import ProjectPreview from '../ProjectPreview';

import { useSelector } from 'react-redux';

export default function SavedProjectsContainer() {
  const user = useSelector(store => store.user);

  const showProjects = () => {
    return user.followed_projects.map(project => {
      return <ProjectPreview key={project.id} project={project} />;
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
