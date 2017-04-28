import React, { PropTypes } from 'react';
import ModalLink from './ModalLink';
import { Panel } from 'react-bootstrap';
import '../matrix.css';

// note to future self, very easy to just subfunctionalize each panel as an individual component with different containers

const matrixUTitle = (
  <div >
    Matrix U
    <ModalLink title="About Matrix U" text="The U in matrix U stands for upper triangular and is found after performing elimination on a standard linear system Ax=b. In this case, to simulate the Ax=b form, add an extra column and tack b on. This creates what is called the augmented matrix of the form [A | b].
This is then reduced down to [U | c].

  $From here, solving for individual variables (in this case each row represents one variable in a multivariable system) can be found by dividing out the pivot value and with substitution. These steps are undergone when creating a fully reduced matrix, matrix R. " />
  </div >
);

const matrixRTitle = (
  <div>
  Matrix R
  <ModalLink title="About Matrix R" text="The R in matrix R represents reduced row echelon form and has all pivots = 1 with zeros above and below. If column j of R is free (does not contain a pivot), there exists a special solution x such that Ax=0. $The rank r of a matrix can be determined from here by counting the number of nonzero rows in R. If you have n columns, then there are n - r “free” columns. " />
  </div>
);

const colSpaceTitle = (
  <div> Column Space Basis
  <ModalLink title="About the Column Space" text="If A is not invertible then for Ax=b, there are some b’s that are not reachable by Ax. The column space is the subspace consisting of the linear combinations of all the columns of A, delineated by C(A). To solve Ax=b is to express b as a combination of the columns of A.
  $Succinctly, Ax=b is only solvable if and only if b is in the column space of A. If b is not in C(A), then there will be no solution x to Ax=b.

  $The dimension for C(A) is equal to the rank (r). " />
  </div>
);

const rowSpaceTitle = (
  <div> Row Space Basis
  <ModalLink title="About the Row Space" text="The row space of a matrix is the subspace spanned by the rows. The row space of A is written as C(A transpose). It can be equivalently understood as the column space of the transpose of A.
  $Dimension for the row space = rank (r)." />

  </div>
);

const nullspaceTitle = (
  <div> Nullspace Basis
  <ModalLink title="About the Nullspace" text="The nullspace for any m x n matrix is defined by solutions to Ax=0, and is commonly noted by N(A). An immediate solution is b = 0 (the zero vector). In cases where A is invertible, then x = 0 will be your only solution. $In other cases, such as when m (rows) is less than n (cols), we will have solutions besides 0 to Ax=0. In actual calculations, we use matrix R to find our special solutions that define the basis for the nullspace. $Dimension for N(A) = columns - rank = n - r." />
  </div>
);

const leftNullspaceTitle = (
  <div> Left Nullspace Basis
  <ModalLink title="About the Left Nullspace" text="This is the nullspace as determined by the rows (not the columns as in the other nullspace). This is equivalently depicted as N(A transpose).
  $Dimension for the left nullspace = rows - rank = m - r. " />
  </div>
);

const matrixUPanel = "primary";
const matrixRPanel = "primary";
const colSpacePanel = "primary";
const rowSpacePanel = "primary";
const nullspacePanel = "primary";
const leftNullspacePanel = "primary";



const formatNum = (number) => {
  if (number % 1 !== 0)
    number = number.toFixed(2);
  return number;
}

const MatrixDisplay = ({ matrixU, matrixR, hasData, colSpace, rowSpace, nullspace, leftNullspace }) => {
  if (hasData) {
    return (
      <div>
        <br/>
        <Panel bsStyle={matrixUPanel} header={matrixUTitle}>
          <table className="matrix">
            <tbody>
              {matrixU.map((rows, i) =>
                <tr key={i}>
                  {rows.map((colEntry, j) =>
                    <td key={`${i},${j}`}>
                      {formatNum(colEntry)}
                    </td>
                  )}
                </tr>
              )}
            </tbody>
            </table>
        </Panel>
        <Panel bsStyle={matrixRPanel} header={matrixRTitle}>
          <table className="matrix">
            <tbody>
              {matrixR.map((rows, i) =>
                <tr key={i}>
                  {rows.map((colEntry, j) =>
                    <td key={`${i},${j}`}>
                      {formatNum(colEntry)}
                    </td>
                  )}
                </tr>
              )}
            </tbody>
            </table>
        </Panel>

        <Panel bsStyle={colSpacePanel} header={colSpaceTitle}>
          <div className={"matrixContainer"}>
            {colSpace.map((vectors, i) =>

              <table className="matrix">
                <tbody>
                    {vectors.map((entry, j) =>
                      <tr key={(i + 1) * j}>
                        <td key={`${i},${j}`}>
                          {formatNum(entry)}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>

            )}
          </div>
        </Panel>
        <Panel bsStyle={rowSpacePanel} header={rowSpaceTitle}>
          <div className={"matrixContainer"}>
            {rowSpace.map((vectors, i) =>

              <table className="matrix">
                <tbody>
                    {vectors.map((entry, j) =>
                      <tr key={(i + 1) * j}>
                        <td key={`${i},${j}`}>
                          {formatNum(entry)}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>

            )}
          </div>
        </Panel>
        <Panel bsStyle={nullspacePanel} header={nullspaceTitle}>
          <div className={"matrixContainer"}>
            {nullspace.map((vectors, i) =>

              <table className="matrix">
                <tbody>
                    {vectors.map((entry, j) =>
                      <tr key={(i + 1) * j}>
                        <td key={`${i},${j}`}>
                          {formatNum(entry)}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>

            )}
          </div>
        </Panel>
        <Panel bsStyle={leftNullspacePanel} header={leftNullspaceTitle}>
          <div className={"matrixContainer"}>
            {leftNullspace.map((vectors, i) =>

              <table className="matrix">
                <tbody>
                    {vectors.map((entry, j) =>
                      <tr key={(i + 1) * j}>
                        <td key={`${i},${j}`}>
                          {formatNum(entry)}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>

            )}
          </div>
        </Panel>
      </div>
    )
  }
  return (
    <div>
    </div>
  )
};

MatrixDisplay.propTypes = {
  matrixU: PropTypes.arrayOf(PropTypes.array),
  matrixR: PropTypes.arrayOf(PropTypes.array),
  hasData: PropTypes.bool.isRequired,
  colSpace: PropTypes.arrayOf(PropTypes.array),
  rowSpace: PropTypes.arrayOf(PropTypes.array),
  nullspace: PropTypes.arrayOf(PropTypes.array),
  leftNullspace: PropTypes.arrayOf(PropTypes.array)
};

export default MatrixDisplay;
