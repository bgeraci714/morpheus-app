const MAX_SIZE = 10;
const MIN_SIZE = 1;

export default function cols (state = MIN_SIZE, action) {
  switch(action.type) {
    case 'INCREMENT_COLS':
      if (state < MAX_SIZE)
        return state + 1;
      else
        return state;
    case 'DECREMENT_COLS':
      if (state > MIN_SIZE)
        return state - 1;
      else
        return state;
    default:
      return state;
  }
}
