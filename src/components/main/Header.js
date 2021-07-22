import React from 'react';

import '../../css/Header.css';

export default function Header({ username }) {
  return (
    <div className='Header'>
      <h1>MakeIt </h1>
      {username ? <p> Welcome: {username} </p> : null}
    </div>
  );
}
