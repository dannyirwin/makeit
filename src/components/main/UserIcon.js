import React from 'react';

export default function UserIcon({ user, setUser }) {
  const handleLogout = () => {
    setUser();
    window.localStorage.clear();
  };
  return (
    <div className='UserIcon'>
      <p>{user.username}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
