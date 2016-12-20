exports.setMatrixA = (matrixA) => {
  return {
    type: 'SET_MATRIX_A',
    matrixA
  };
};

exports.addNewRow = () => {
  return {
    type: 'ADD_NEW_ROW'
  };
};

exports.removeRow = () => {
  return {
    type: 'REMOVE_ROW'
  };
};

exports.addNewCol = () => {
  return {
    type: 'ADD_NEW_COL'
  };
};

exports.removeCol = () => {
  return {
    type: 'REMOVE_COL'
  };
};

// pass in matrix A to then be used to calculate matrixU
exports.calcMatrixU = () => {
  return {
    type: 'CALC_MATRIX_U',
  };
};

// pass in matrixU to then be used to calculate matrixR
exports.calcMatrixR = () => {
  return {
    type: 'CALC_MATRIX_R',
  };
};

exports.setEntry = (row, col, value) => {
  return {
    type: 'SET_ENTRY',
    row,
    col,
    value
  };
}
