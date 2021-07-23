import React from 'react';
import ProjectsContainer from './ProjectsContainer';

export default function MyProjects({ projects, setUser, setCurrentProject }) {
  //const [shownProjects, setShownProjects] = useState(projects);

  return (
    <div className='MyProjects'>
      <ProjectsContainer
        projects={projects}
        setUser={setUser}
        setCurrentProject={setCurrentProject}
      />
    </div>
  );
}
