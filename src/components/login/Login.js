import { useState } from 'react';
import LoginForm from './LoginForm';
import NewUserForm from './NewUserForm';

import { fetchCreateUser, fetchLogin } from '../../utilities/fetchUtilities';

import '../../css/Login.css';

export default function Login({ setUserAndToken }) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [isNewUser, setIsNewUser] = useState(false);

  const handleLogin = e => {
    e.preventDefault();
    fetchLogin(username, password).then(response =>
      setUserAndToken(response.user, response.token)
    );
  };
  const handleSignUp = e => {
    e.preventDefault();
    fetchCreateUser(username, password).then(response =>
      setUserAndToken(response.user, response.token)
    );
  };
  return (
    <div className='Login'>
      {isNewUser ? (
        <NewUserForm
          setIsNewUser={setIsNewUser}
          setUsername={setUsername}
          setPassword={setPassword}
          handleSignUp={handleSignUp}
        />
      ) : (
        <LoginForm
          setIsNewUser={setIsNewUser}
          setUsername={setUsername}
          setPassword={setPassword}
          handleLogin={handleLogin}
        />
      )}
    </div>
  );
}
