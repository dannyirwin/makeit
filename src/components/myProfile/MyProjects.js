import React from 'react';
import MyProjectsContainer from './MyProjectsContainer';

export default function MyProjects({
  projects,
  setUser,
  setCurrentProject,
  setCurrentPage
}) {
  //const [shownProjects, setShownProjects] = useState(projects);

  return (
    <div className='MyProjects'>
      <MyProjectsContainer
        projects={projects}
        setUser={setUser}
        setCurrentProject={setCurrentProject}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
