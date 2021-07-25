import React from 'react';

import ProjectsFeed from './ProjectsFeed';
import MakersFeed from './MakersFeed';

export default function Feed({
  user,
  setUser,
  setCurrentPage,
  setCurrentProject
}) {
  return (
    <div>
      <ProjectsFeed
        user={user}
        setUser={setUser}
        setCurrentPage={setCurrentPage}
        setCurrentProject={setCurrentProject}
      />
      <MakersFeed />
    </div>
  );
}
