import { useState } from 'react';

import Login from './login/Login';

import '../css/App.css';
import Main from './main/Main';

function App() {
  const [user, setUser] = useState();

  return (
    <div className='App'>
      {user ? (
        <Main user={user} setUser={setUser} />
      ) : (
        <Login setUser={setUser} />
      )}
    </div>
  );
}

export default App;
