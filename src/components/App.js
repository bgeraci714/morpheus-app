import React from 'react';

import MatrixA from '../containers/MatrixA';
import RowCounter from '../containers/RowCounter';
import ColCounter from '../containers/ColCounter';
import CalculateUR from '../containers/CalculateUR';
import logo from '../logo.svg';
import '../App.css';

const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>

    </div>
    <div className="container">
      <div>

        <RowCounter />
        <ColCounter />
        <MatrixA />
        <CalculateUR />

      </div>
    </div>
  </div>
)



export default App;
