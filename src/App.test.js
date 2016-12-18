import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { testSetMatrixA, testIncrementRow, testDecrementRow, testIncrementCol,
         testDecrementCol, testCalcMatrixU, testCalcMatrixR, testSetEntry } from './redux_tests';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('sets a specific entry in the state\'s matrixA', () => {
  testSetEntry();
});

it('sets the state\'s matrix field', () => {
  testSetMatrixA();
});

it('calculates matrixU based on matrixA in the state', () => {
  testCalcMatrixU();
});

it('calculates matrixR based on matrixU in the state', () => {
  testCalcMatrixR();
});

it('increments the state\'s rows field', () => {
  testIncrementRow();
});

it('decrements the state\'s rows field', () => {
  testDecrementRow();
});

it('increments the state\'s cols field', () => {
  testIncrementCol();
});

it('decrements the state\'s cols field', () => {
  testDecrementCol();
});
