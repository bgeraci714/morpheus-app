class RowSwap {
  constructor(needSwap, row1, row2){
    this.requiresSwap = needSwap;
    this.firstRow = row1;
    this.secondRow = row2;
  }
}

/////////////////////////////
///// All the Functions /////
/////////////////////////////

// transposes a matrix
function transpose(matrix) {
  let matrixTranspose = [];

  matrix[0].forEach(() => {
    matrixTranspose.push([]);
  });

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      matrixTranspose[j].push(matrix[i][j]);
    }
  }

  return matrixTranspose;
}

// returns each special solution as an individual array of values
function getNullspace(matrixA) {
  let matrix = matrixA.slice();
  let matrixR = rref(matrix);

  let pivotCols = getColsOfPivots(matrixR);
  let cols = matrixR[0].length;
  let freeCols = [];
  for (let i = 0; i < cols; i++) {
    if (pivotCols.indexOf(i) === -1)
      freeCols.push(i);
  }
  let nullspace = [];
  // creates the special solutions for the nullspace
  for (let i = 0; i < freeCols.length; i++) {
    let curSoln = [];
    for (let j = 0; j < cols; j++) {
      // if j is a pivot column
      if (pivotCols.indexOf(j) !== -1) {
        // get the value from MatrixR using the correct row and column
        // the below code pivotCols.indexOf(j) leverages the fact that pivot
        // columns are pushed to the end of the list as their added (which means
        // if pivot cols === [j, x], we know j is the first pivot and is found
        // in the zeroth (first) row of our matrix;
        let curValue = matrixR[pivotCols.indexOf(j)][freeCols[i]];
        curSoln.push(curValue === 0 ? 0 : -1 * curValue);
      }
      // otherwise, add 1 if we've got our free variable of interest, otherwise zero.
      else
        curSoln.push(freeCols[i] === j ? 1 : 0);
    }
    nullspace.push(curSoln);
  }

  return nullspace;
}

// returns the row space of matrix A
function getRowSpace(matrixA) {
  let matrix = matrixA.slice();
  let matrixR = rref(matrix);

  let pivotCols = getColsOfPivots(matrixR);
  let rank = pivotCols.length - 1;

  let matrixPivotRows = matrixR.filter((row, i) => {
    return i <= rank;
  });

  return matrixPivotRows;
}

// returns the pivot columns (the bases for the column space)
function getColumnSpace(matrixA) {
  let matrix = matrixA.slice();
  let matrixR = rref(matrix);
  let pivotCols = getColsOfPivots(matrixR);

  let matrixPivotCols = matrix.map((row, i) => {
    return row.filter((colEntry, j) => {
      return pivotCols.indexOf(j) !== -1;
    });
  });

  let columnSpace = [];
  matrixPivotCols[0].forEach(() => {
    columnSpace.push([]);
  });

  for (let i = 0; i < matrixPivotCols.length; i++) {
    for (let j = 0; j < matrixPivotCols[0].length; j++) {
      columnSpace[j].push(matrixPivotCols[i][j]);
    }
  }

  return columnSpace;
}

function getColsOfPivots (matrixR) {

  let pivotCols = [];
  let numRows = matrixR.length;
  let numCols = matrixR[0].length;
  for (let i = 0; i < numRows; i++) {
    for (let j = i; j < numCols; j++) {
      if (matrixR[i][j] === 1) {
        pivotCols.push(j);
        break;
      }
    }
  }

  return pivotCols;
}

// Takes any matrix A and transforms it into reduced row echelon form
function rref (matrixA) {

  let m = matrixA.slice();
  m = reduceToUpper(m);
  let matrix = divideByPivot(m);

  for (let i = matrix.length - 1; i > 0; i--) {
    // finds pivots (which should be 1's because of reduction)

    let indexOfPivot = matrix[i].indexOf(1);
    let curPivot = matrix[i][indexOfPivot];
    let pivotRow = matrix[i];

    // if the above doesnt work, try again but this time move up a row
    // this accounts for rows of zeroes
    while(indexOfPivot === -1 && i > 0) {
      i--;
      indexOfPivot = matrix[i].indexOf(1);
      curPivot = matrix[i][indexOfPivot];
      pivotRow = matrix[i];
    }

    // just a check to make sure we don't get a zero for our pivot
    if (curPivot === 0) {
      console.log(`Looks like you have a zero in a pivot spot: a[${i}][${i}]`);
      break;
    }

    // upwards row reduction only occurs on rows below above i, thus j = i - 1
    for (let j = i - 1; j >= 0; j--) {
      let elimSpot = matrix[j][indexOfPivot];
      let scalar = elimSpot / curPivot;
      matrix[j] = rowSubtract(pivotRow, matrix[j], scalar);
    }
  }
  return matrix;
}

// Swaps rows with each other
function swapRows(matrix, rowAindex, rowBindex) {
  let rowCopy = matrix[rowAindex];
  matrix[rowAindex] = matrix[rowBindex];
  matrix[rowBindex] = rowCopy;
  return matrix;
}

// checks to see if a valid row swap can be made to put pivot in right place.
function returnRowSwapObj(matrix) {
  let numRows = matrix.length;
  let numCols = matrix[0].length;
  let curPivotRow = 0;

  // iterates over the columns until a potential switch is found or the
  // whole matrix has been iterated
  for (let i = 0; i < numCols && curPivotRow < numRows; i++) {
    if (matrix[curPivotRow][i] === 0) {
      // check elements below for a nonzero number
      for (let j = curPivotRow; j < numRows; j++)
        // if there is one, return a RowSwap object with the two rows
        if (matrix[j][i] !== 0)
          return new RowSwap(true, curPivotRow, j);
    }
    else {
      curPivotRow++;
    }
  }
  return new RowSwap(false, 0, 0);
}

function divideByPivot (matrix) {
  let reducedMatrix = matrix.map((row, i) => {
    return row.map((element) => {
      if (element === 0)
        return element;
      while (row[i] === 0) {
        i++;
      }
      return element / row[i];
    });
  });
  return reducedMatrix;
}

// reduces matrices to upper triangular phone
function reduceToUpper (matrixA) {
  let matrix = matrixA.slice();
  let curPivotRow = 0;

  for (let i = 0;i < matrix.length; i++) {
    // keeps pivots on the diagonal
    let curPivot = matrix[curPivotRow][i];
    let pivotRow = matrix[curPivotRow];

    while (curPivot === 0 && i < matrix.length) {
      //console.log("GAH THERE'S A ZERO IN MAH PIVOT SPOT");
      let rowSwapObj = returnRowSwapObj(matrix);
      // if a row swap is needed, make the swap and then set the new pivot
      if (rowSwapObj.requiresSwap) {
        matrix = swapRows(matrix, rowSwapObj.firstRow, rowSwapObj.secondRow);
        curPivot = matrix[curPivotRow][i];
        pivotRow = matrix[curPivotRow];
      }
      // otherwise, move across
      else {
        i++;
        curPivot = matrix[curPivotRow][i];
        pivotRow = matrix[curPivotRow];
      }
    }
    // row reduction only occurs on rows below i, thus j = i + 1
    for (let j = curPivotRow + 1; j < matrix.length; j++) {
      //console.log(curPivot);
      let elimSpot = matrix[j][i];
      let scalar = elimSpot / curPivot;
      matrix[j] = rowSubtract(pivotRow, matrix[j], scalar);

    }
    curPivotRow++;
  }
  return matrix;
}

function rowSubtract (rowA, rowB, scalar) {
  if (isNaN(scalar))
    scalar = 0;

  rowA = rowA.map((element) => {
    return element * scalar;
  });
  rowB = rowB.map((element, index) => {
    return element - rowA[index];
  });

  return rowB;
};

export {rref, divideByPivot, reduceToUpper,
        transpose, getNullspace, getRowSpace,
        getColumnSpace };

/*
function printMatrix (matrix) {
  let result = "";
  matrix.forEach((row, mIndex) => {
    result += "[";
    row.forEach((item, rIndex) => {
      if (item % 1 !== 0)
        item = item.toFixed(2);
      if (rIndex !== row.length - 1)
        result += item + "\t";
      else
        result += item;
    });
    result += "]";
    if (mIndex !== matrix.length - 1)
      result += "\n";
  });
  console.log(result);
}
*/
