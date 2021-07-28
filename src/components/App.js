//import { useState } from 'react';

import Main from './main/Main';
import Login from './login/Login';

import { useSelector } from 'react-redux';

import '../css/App.css';

function App() {
  const user = useSelector(store => store.user);

  return <div className='App'>{user ? <Main /> : <Login />}</div>;
}

export default App;
