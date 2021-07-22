import React from 'react';
import '../../css/Main.css';

import Login from '../login/Login';
import ProjectsPage from '../projects/ProjectsPage';

export default function Main({ setUserAndToken, user, token }) {
  return (
    <div className='Main'>
      {user ? (
        <ProjectsPage user={user} token={token} />
      ) : (
        <Login setUserAndToken={setUserAndToken} />
      )}
    </div>
  );
}
