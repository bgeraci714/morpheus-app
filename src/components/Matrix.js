import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FormGroup, Col, Form } from 'react-bootstrap';
import Entry from './Entry';

import { setMatrixA, calcMatrixU, calcMatrixR } from '../actions/matrices';

class Matrix extends Component {

  render() {
    console.log("matrix was rendered");
    let arr = [];
    for (let i = 0; i < this.props.rows; i++) {
      arr[i] = [];
      for (let j = 0; j < this.props.cols; j++) {
        arr[i][j] = "";
      }
    }

    return (
      <div>
        <Form horizontal={true} >
        {arr.map((rows, i) =>
          <div key={i}>
          <FormGroup>
            {rows.map((cols, j) =>
              <Col key={`${i},${j}`} sm={1}>
                <Entry row={i} col={j} value={0} />
              </Col>
            )}
          </FormGroup>
          <br/>
          </div>
        )}
        </Form>
      </div>
    );
  }
}



export default Matrix;
