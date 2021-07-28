export default function user(state = null, action) {
  switch (action.type) {
    case 'SET_VIEW_USER':
      return action.payload;

    default:
      return state;
  }
}
