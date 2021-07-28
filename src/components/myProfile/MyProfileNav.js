import React from 'react';
import { useDispatch } from 'react-redux';
import { buildReduxAction } from '../../utilities/generalUtilities';

export default function MyProfileNav({ currentContent, setCurrentContent }) {
  const dispatch = useDispatch();

  const classNames = buttonValue => {
    let classNames = 'nav-btn';
    if (buttonValue === currentContent) {
      classNames += ' selected';
    }
    return classNames;
  };

  return (
    <div className='MyProfileNav'>
      <button
        onClick={() =>
          dispatch(buildReduxAction('SET_CURRENT_PAGE', 'ProjectEditor'))
        }
      >
        + Create New Project
      </button>
      <nav>
        <h3
          className={classNames('ProfileSummary')}
          onClick={() => setCurrentContent('ProfileSummary')}
        >
          My Profile
        </h3>
        <h3
          className={classNames('MyProjects')}
          onClick={() => setCurrentContent('MyProjects')}
        >
          My Projects
        </h3>
        <h3
          className={classNames('MyMakers')}
          onClick={() => setCurrentContent('MyMakers')}
        >
          My Makers
        </h3>
        <h3
          className={classNames('SavedProjects')}
          onClick={() => setCurrentContent('SavedProjects')}
        >
          Bookmarked Projects
        </h3>
      </nav>
    </div>
  );
}
