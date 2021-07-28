export default function currentPage(state = 'MyProfile', action) {
  switch (action.type) {
    case 'SET_CURRENT_PAGE':
      return action.payload;
    default:
      return state;
  }
}
