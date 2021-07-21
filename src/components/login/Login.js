import React from 'react';
import LoginForm from './LoginForm';

export default function Login({ setUserAndToken }) {
  return (
    <div>
      <LoginForm setUserAndToken={setUserAndToken} />
    </div>
  );
}
