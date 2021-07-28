import { useState } from 'react';

import Main from './main/Main';
import Login from './login/Login';
import Provider from 'react-redux';

import store from '../redux/store';

import '../css/App.css';

function App() {
  const [user, setUser] = useState();

  return (
    <Provider store={store}>
      <div className='App'>
        {user ? (
          <Main user={user} setUser={setUser} />
        ) : (
          <Login setUser={setUser} />
        )}
      </div>
    </Provider>
  );
}

export default App;
