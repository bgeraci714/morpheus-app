import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';

const CalcButton = ({onClick}) => (
  <Button onClick={onClick} > Calc </Button>
)

CalcButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default CalcButton;
