import React from 'react';

import '../../css/Header.css';

export default function Header({ username }) {
  return (
    <div className='Header'>MakeIt {username ? <p> Welcome: </p> : null}</div>
  );
}
