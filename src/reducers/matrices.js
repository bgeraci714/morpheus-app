import { rref, reduceToUpper, divideByPivot } from '../matrixFunctions/matrixFunctions';
const MAX_SIZE = 10;
const MIN_SIZE = 1;

export default function matrices (state = {matrixA: [[0]]}, action) {
  switch(action.type) {
    case 'SET_MATRIX_A':
      return {
        ...state,
        matrixA: action.matrixA
      };
    case 'ADD_NEW_ROW':
      if (state.matrixA.length < MAX_SIZE ) {
        let newRow = [];
        for (let i = 0; i < state.matrixA[0].length; i++)
          newRow = newRow.concat(0);
        return {
          ...state,
          matrixA: state.matrixA.concat([newRow])
        };
      }
      else
        return state;
    case 'REMOVE_ROW':
      if (state.matrixA.length > MIN_SIZE) {
        return {
          ...state,
          matrixA: state.matrixA.slice(0, -1)
        };
      }
      else
        return state;
    case 'ADD_NEW_COL':
      if (state.matrixA[0].length < MAX_SIZE )
        return {
          ...state,
          matrixA: state.matrixA.map((row) => {
            return row.concat(0);
          })
        };
      else
        return state;
    case 'REMOVE_COL':
      if (state.matrixA[0].length > MIN_SIZE) {
        let matrixSansCol = state.matrixA.map((row)=> {
          return row.filter((colEntry, index) => {
            return index !== row.length - 1;
          });
        });
        return {
          ...state,
          matrixA: matrixSansCol
        };
      }
      else
        return state;
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
