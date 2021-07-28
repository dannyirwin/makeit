import { combineReducers, createStore } from 'redux';

import user from './reducers/user';
import currentProject from './reducers/currentProject';
import currentPage from './reducers/currentPage';
import viewUser from './reducers/viewUser';

const reducer = combineReducers({
  user,
  currentProject,
  currentPage,
  viewUser
});

const store = createStore(reducer);

export { store };
