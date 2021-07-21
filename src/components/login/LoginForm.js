import React, { useState } from 'react';

import { fetchCreateUser, fetchLogin } from '../../utilities/fetchUtilities';

export default function LoginForm({ setUserAndToken }) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleLogin = e => {
    e.preventDefault();
    console.log('logging in');
    fetchLogin(username, password).then(response =>
      setUserAndToken(response.user, response.token)
    );
  };
  const handleSignUp = e => {
    e.preventDefault();
    console.log('signing up');
    fetchCreateUser(username, password).then(response =>
      setUserAndToken(response.user, response.token)
    );
  };

  return (
    <form>
      <label htmlFor='username'>Username:</label>
      <input
        onChange={e => setUsername(e.target.value)}
        type='text'
        name='username'
        placeholder='DoodleBeader'
        required
      ></input>
      <label htmlFor='password'>Password:</label>
      <input
        onChange={e => setPassword(e.target.value)}
        type='text'
        name='password'
        required
      ></input>
      <button onClick={handleSignUp}>Sign Up</button>
      <button onClick={handleLogin}>Login</button>
    </form>
  );
}
