exports.incrementRows = () => {
  return {
    type: 'INCREMENT_ROWS'
  };
};

exports.decrementRows = () => {
  return {
    type: 'DECREMENT_ROWS'
  };
};

exports.incrementCols = () => {
  return {
    type: 'INCREMENT_COLS'
  };
};

exports.decrementCols = () => {
  return {
    type: 'DECREMENT_COLS'
  };
};
