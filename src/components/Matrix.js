import React, { PropTypes } from 'react';

import { FormGroup, Col, Form } from 'react-bootstrap';
import Entry from './Entry';

const Matrix = ({ matrixA, rows, cols, onEntryChange }) => (
  <div>
    <Form horizontal={true} >
    {matrixA.map((rows, i) =>
      <div key={i}>
      <FormGroup>
        {rows.map((cols, j) =>
          <Col key={`${i},${j}`} sm={1}>
            <Entry row={i} col={j} value={cols} onChange={onEntryChange} />
          </Col>
        )}
      </FormGroup>
      <br/>
      </div>
    )}
    </Form>
  </div>
)

Matrix.propTypes = {
  matrixA: PropTypes.arrayOf(PropTypes.array).isRequired,
  rows: PropTypes.number.isRequired,
  cols: PropTypes.number.isRequired,
  onEntryChange: PropTypes.func.isRequired
}


export default Matrix;
