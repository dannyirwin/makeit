import React from 'react';
import ProjectPreview from '../ProjectPreview';

import { useSelector } from 'react-redux';

export default function Projects() {
  const user = useSelector(store => store.user);

  const showProjects = () => {
    return user.followed_projects.map(project => {
      return <ProjectPreview project={project} />;
    });
  };
  return <div>{showProjects()}</div>;
}
