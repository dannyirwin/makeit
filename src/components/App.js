import { useState } from 'react';

import Login from './login/Login';
import Header from './main/Header';

import '../css/App.css';
import Main from './main/Main';

function App() {
  const [user, setUser] = useState();
  const [token, setToken] = useState();

  const setUserAndToken = (user, token) => {
    setUser(user);
    setToken(token);
  };

  return (
    <div className='App'>
      <Header username={user?.username} />
      <Main setUserAndToken={setUserAndToken} />
    </div>
  );
}

export default App;
