import React, { PropTypes } from 'react';
//import { connect } from 'react-redux';
import { FormControl } from 'react-bootstrap';

const Entry = ({onChange, row, col, value}) => (
  <FormControl
    type="number"
    value={value}
    onChange={(e) => onChange(row, col, Number(e.target.value))}
    onFocus={(e)=> {e.target.select()}}
  />
)

Entry.propTypes = {
  onChange: PropTypes.func.isRequired,
  row: PropTypes.number.isRequired,
  col: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
}

export default Entry
