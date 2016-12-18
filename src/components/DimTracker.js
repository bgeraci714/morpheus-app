import React, {Component} from 'react';
import { Button } from 'react-bootstrap';

export default class DimTracker extends Component {
  render () {
    return (
      <div>
        <h3>{this.props.heading}: <strong> {this.props.value} </strong> </h3>
        <Button bsStyle="default" onClick={this.props.onDecrement}> - </Button>
        <Button bsStyle="default" onClick={this.props.onIncrement}> + </Button>
      </div>
    );
  }
}
