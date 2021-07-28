import React from 'react';
import { useSelector } from 'react-redux';

import '../../css/ViewUser.css';

export default function ViewUser() {
  const viewUser = useSelector(store => store.viewUser);

  return <div className='ViewUser'>{viewUser.username}</div>;
}
