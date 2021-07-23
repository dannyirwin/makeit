import { useState } from 'react';

import Header from './main/Header';

import '../css/App.css';
import Main from './main/Main';

function App() {
  const [user, setUser] = useState();

  return (
    <div className='App'>
      <Header username={user?.username} />
      <Main user={user} setUser={setUser} />
    </div>
  );
}

export default App;
