import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buildReduxAction } from '../../utilities/generalUtilities';

export default function UserIcon() {
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(buildReduxAction('SET_USER', null));
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
