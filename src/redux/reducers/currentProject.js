export default function currentProject(state = null, action) {
  switch (action.type) {
    case 'SET_CURRENT_PROJECT':
      return action.payload;
    default:
      return state;
  }
}
