import React from 'react';
import MyProjectsContainer from './MyProjectsContainer';

export default function MyProjects({ projects }) {
  //const [shownProjects, setShownProjects] = useState(projects);

  return (
    <div className='MyProjects'>
      <MyProjectsContainer projects={projects} />
    </div>
  );
}
