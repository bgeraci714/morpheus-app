import { rref, reduceToUpper, divideByPivot } from '../matrixFunctions/matrixFunctions';


export default function matrices (state = {}, action) {
  switch(action.type) {
    case 'SET_MATRIX_A':
      return {
        ...state,
        matrixA: action.matrixA
      };
    case 'CALC_MATRIX_U':
      let matrixU = reduceToUpper(state.matrixA);
      return {
        ...state,
        matrixU
      };
    case 'CALC_MATRIX_R':
      if (state.matrixU !== undefined) {
        let limboMatrix = divideByPivot(state.matrixU);
        let matrixR = rref(limboMatrix);
        return {
          ...state,
          matrixR
        };
      }
      else
        return state;
    case 'SET_ENTRY':
      let matrixCopy = state.matrixA.map((row, i) => {
        return row.map((col, j) => {
          if (i === action.row && j === action.col)
            return action.value;
          else
            return col;
        });
      });
      return {
        ...state,
        matrixA: matrixCopy
      }
    default:
      return state;
  }
}
