import { createStore } from 'react-redux';

const defaultStore = {
  user: null,
  currentPage: '',
  currentProject: null,
  viewUser: null
};

function userReducer(store, action) {
  switch (action.type) {
    case 'SET_USER':
      return { ...store, user: action.payload };

    default:
      return store;
  }
}

export const store = createStore(userReducer, defaultStore);
