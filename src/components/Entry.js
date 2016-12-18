import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormControl } from 'react-bootstrap';

class Entry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      row: this.props.row,
      col: this.props.col,
      value: ""
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const newValue = e.target.value;
    console.log(this.state.row + "," + this.state.col + ": " + newValue);
    this.setState({value: newValue});
  }

  render () {
    return (
          <FormControl
            type="number"
            value={this.state.value}
            onChange={this.onChange}
          />
    );
  }
}


export default Entry;
