import { useState } from 'react';
import { useDispatch } from 'react-redux';

import LoginForm from './LoginForm';
import NewUserForm from './NewUserForm';

import { fetchCreateUser, fetchLogin } from '../../utilities/fetchUtilities';
import { buildReduxAction } from '../../utilities/generalUtilities';

import '../../css/Login.css';

export default function Login({ setUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isNewUser, setIsNewUser] = useState(false);
  const [aboutMe, setAboutMe] = useState('');

  const dispatch = useDispatch();

  const handleLogin = e => {
    e.preventDefault();
    fetchLogin(username, password).then(user =>
      dispatch(buildReduxAction('SET_USER', user))
    );
  };
  const handleSignUp = e => {
    e.preventDefault();
    fetchCreateUser(username, password, aboutMe).then(user =>
      dispatch(buildReduxAction('SET_USER', user))
    );
  };
  return (
    <div className='Login'>
      <div className='login-container'>
        <div className='login-inner-container'>
          <h1 className='logo'>MakeIt</h1>
          <div className='tagline'>
            <p>Teach</p>•<p>Learn</p>•<p>Make</p>
          </div>
          {isNewUser ? (
            <NewUserForm
              setIsNewUser={setIsNewUser}
              setUsername={setUsername}
              setPassword={setPassword}
              setAboutMe={setAboutMe}
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
      </div>
    </div>
  );
}
