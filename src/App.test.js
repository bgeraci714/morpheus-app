import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { testSetMatrixA, testIncrementRow, testDecrementRow, testIncrementCol,
         testDecrementCol, testCalcMatrixU, testCalcMatrixR, testSetEntry,
         testAddNewRow, testRemoveRow, testAddNewCol, testRemoveCol, testFetchData } from './tests/redux_tests';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('signals that data has been fetched from the user', () => {
  testFetchData();
})

it('removes the last col in matrixA', () => {
  testRemoveCol();
});

it('adds a new col to matrixA and fills it with zeros', () => {
  testAddNewCol();
});

it('removes the last row in matrixA', () => {
  testRemoveRow();
});

it('adds a new row to matrixA and fills it with zeros', () => {
  testAddNewRow();
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
