export default function hasData (state = false, action) {
  switch(action.type) {
    case 'DATA_SUBMITTED':
      return true;
    default:
      return state;
  }
}
