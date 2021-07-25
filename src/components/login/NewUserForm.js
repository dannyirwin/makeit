import { useState } from 'react';

export default function CreateNewUser({
  setUsername,
  setPassword,
  setIsNewUser,
  setAboutMe,
  handleSignUp
}) {
  const [errorMessage, setErrorMessage] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
    } else {
      handleSignUp(e);
    }
  };

  return (
    <form className='LoginForm' onSubmit={handleSubmit}>
      <div className='input-container'>
        <label htmlFor='username'>Username:</label>
        <input
          onChange={e => setUsername(e.target.value)}
          type='text'
          name='username'
          placeholder='DoodleBeader'
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
        <label htmlFor='confirmPassword'>Confirm Password:</label>
        <input type='password' name='confirmPassword' required></input>
      </div>
      <div className='input-container'>
        <label htmlFor='aboutMe'>About Me:</label>
        <textarea
          onChange={e => setAboutMe(e.target.value)}
          name='aboutMe'
          required
        ></textarea>
      </div>
      <p className='login-error-display'>{errorMessage}</p>
      <div className='input-container'>
        <input type='submit' value='Create Profile' />
        <button onClick={() => setIsNewUser(false)}>
          Login with an existing account
        </button>
      </div>
    </form>
  );
}
