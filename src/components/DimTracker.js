import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';

const DimTracker = ({heading, value, onDecrement, onIncrement}) => (
  <div>
    <h3>{heading}: <strong> {value} </strong> </h3>
    <Button bsStyle="default" onClick={onDecrement}> - </Button>
    <Button bsStyle="default" onClick={onIncrement}> + </Button>
  </div>
)

DimTracker.propTypes = {
  heading: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default DimTracker;
