import React, { PropTypes } from 'react';
import { Panel, Table } from 'react-bootstrap';

const matrixUTitle = (
  <h3>Matrix U</h3>
);

const matrixRTitle = (
  <h3>Matrix R</h3>
);

const formatNum = (number) => {
  if (number % 1 !== 0)
    number = number.toFixed(2);
  return number;
}

const MatrixDisplay = ({ matrixU, matrixR, hasData }) => {
  if (hasData)
    return (
      <div>
        <br/>
        <Panel header={matrixUTitle}>
          <Table fill>
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
            </Table>
        </Panel>
        <Panel header={matrixRTitle}>
          <Table fill>
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
            </Table>
        </Panel>
      </div>
    )
  return (
    <div>
    </div>
  )
};

MatrixDisplay.propTypes = {
  MatrixU: PropTypes.arrayOf(PropTypes.array),
  MatrixR: PropTypes.arrayOf(PropTypes.array),
  hasData: PropTypes.bool.isRequired
};

export default MatrixDisplay;
