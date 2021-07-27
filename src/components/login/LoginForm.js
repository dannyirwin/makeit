import React from 'react';

export default function LoginForm({
  setIsNewUser,
  setUsername,
  setPassword,
  handleLogin
}) {
  return (
    <form className='LoginForm' onSubmit={handleLogin}>
      <div className='input-container'>
        <label htmlFor='username'>Username:</label>
        <input
          onChange={e => setUsername(e.target.value)}
          type='text'
          name='username'
          placeholder='username'
          required
        ></input>
      </div>
      <div className='input-container'>
        <label htmlFor='password'>Password:</label>
        <input
          onChange={e => setPassword(e.target.value)}
          type='password'
          name='password'
          required
        ></input>
      </div>
      <div className='input-container'>
        <input type='submit' value='Login'></input>
        <button onClick={() => setIsNewUser(true)}>
          Create a new Profile{' '}
        </button>
      </div>
    </form>
  );
}
