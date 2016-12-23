import React, { PropTypes } from 'react';
import { Panel } from 'react-bootstrap';
import '../matrix.css';

// note to future self, very easy to just subfunctionalize each panel as an individual component with different containers

const matrixUTitle = (
  <h3>Matrix U</h3>
);

const matrixRTitle = (
  <h3>Matrix R</h3>
);

const colSpaceTitle = (
  <h3>Column Space Basis </h3>
);

const rowSpaceTitle = (
  <h3>Row Space Basis </h3>
);

const nullspaceTitle = (
  <h3> Nullspace Basis </h3>
);

const leftNullspaceTitle = (
  <h3>Left Nullspace Basis </h3>
);

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
        <Panel header={matrixUTitle}>
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
        <Panel header={matrixRTitle}>
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

        <Panel header={colSpaceTitle}>
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
        <Panel header={rowSpaceTitle}>
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
        <Panel header={nullspaceTitle}>
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
        <Panel header={leftNullspaceTitle}>
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
