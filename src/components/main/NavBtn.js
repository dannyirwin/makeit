import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buildReduxAction } from '../../utilities/generalUtilities';

export default function NavBtn({ pageString }) {
  const currentPage = useSelector(store => store.currentPage);
  const dispatch = useDispatch();

  const classNames = () => {
    let classNames = '';
    if (pageString === currentPage) {
      classNames += ' selected';
    }
    return classNames;
  };
  return (
    <button
      className={classNames()}
      onClick={() => {
        dispatch(buildReduxAction('SET_CURRENT_PAGE', pageString));
        dispatch(buildReduxAction('SET_CURRENT_PROJECT', null));
      }}
    >
      {pageString}
    </button>
  );
}
