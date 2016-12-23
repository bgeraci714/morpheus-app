import React from 'react';

import MatrixA from '../containers/MatrixA';
import RowCounter from '../containers/RowCounter';
import ColCounter from '../containers/ColCounter';
import CalculateUR from '../containers/CalculateUR';
import DisplayMatrices from '../containers/DisplayMatrices'
import Header from '../components/Header';
import logo from '../logo.svg';
import '../App.css';

const App = () => (
  <div className="App">
    <Header />
    <div className="container">
      <div>

        <RowCounter />
        <ColCounter />
        <MatrixA />
        <CalculateUR />

        <DisplayMatrices />

      </div>
    </div>
  </div>
)



export default App;
