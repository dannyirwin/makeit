import React from 'react';

export default function UserIcon({ user, setUser }) {
  const handleLogout = () => {
    setUser();
    window.localStorage.clear();
  };
  return (
    <div className='UserIcon'>
      <p>{user.username}</p>
      {user.image_url && <img src={user.image_url} alt='User icon'></img>}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
