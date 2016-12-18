class RowSwap {
  constructor(needSwap, row1, row2){
    this.requiresSwap = needSwap;
    this.firstRow = row1;
    this.secondRow = row2;
  }
}

// calls:
// reduceToUpper => divdeByPivot => rref
/*
let matrixA = [[1, -1, 0, 2],
               [-1, 2, -1, 2],
               [0, 2, -1, 2],
               [0, 2, -1, 2]];
*/


/*
console.log("\nMatrix A:" );
printMatrix(matrixA);

let matrixU = reduceToUpper(matrixA);
matrixU = divideByPivot(matrixU);
let matrixR = rref(matrixU);
console.log("\nReduced Row Echelon Form:" );
printMatrix(matrixR);
*/
/////////////////////////////
///// All the Functions /////
/////////////////////////////

// Takes a reduced matrix and puts it into reduced row echelon form
exports.rref = (matrix) => {
  // assumes reduction currently
  for (let i = matrix.length - 1;i > 0; i--) {
    // finds pivots (which should be 1's because of reduction)
    let indexOfPivot = matrix[i].indexOf(1);
    let curPivot = matrix[i][indexOfPivot];
    let pivotRow = matrix[i];

    // if the above doesnt work, try again but this time move up a row
    // this accounts for rows of zeroes
    while(indexOfPivot === -1) {
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
        // if there is one, return a RowSwap object wit hthe two rows
        if (matrix[j][i] !== 0)
          return new RowSwap(true, curPivotRow, j);
    }
    else {
      curPivotRow++;
    }
  }
  return new RowSwap(false, 0, 0);
}

exports.divideByPivot = (matrix) => {
  let reducedMatrix = matrix.map((row, i) => {
    return row.map((element) => {
      if (element === 0)
        return element;
      while (row[i] === 0 || i >= row.length) {
        i++;
      }
      return element / row[i];
    });
  });
  return reducedMatrix;
}

// reduces matrices to upper triangular phone
exports.reduceToUpper = (matrixA) => {
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
  rowA = rowA.map((element) => {
    return element * scalar;
  });
  rowB = rowB.map((element, index) => {
    return element - rowA[index];
  });
  return rowB;
};

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
