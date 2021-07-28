import React from 'react';
import { useSelector } from 'react-redux';

import ProjectPreview from '../ProjectPreview';

export default function ProjectsFeed() {
  const user = useSelector(store => store.user);
  const showProjects = () => {
    return user.followed_projects.map(project => {
      return <ProjectPreview key={project.id} project={project} />;
    });
  };
  return <div className='ProjectsFeed'>{showProjects}</div>;
}
