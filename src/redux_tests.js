import React from 'react';

const deepFreeze = require('deep-freeze-node');
const expect = require('expect');
const createSpy = expect.createSpy;
const spyOn = expect.spyOn;
const isSpy = expect.isSpy;

import matrices from './reducers/matrices';
import rows from './reducers/rows';
import cols from './reducers/cols';
import { setMatrixA, calcMatrixU, calcMatrixR, setEntry } from './actions/matrices';
import { incrementRows, decrementRows, incrementCols, decrementCols } from './actions/rows_cols';

exports.testSetEntry = () => {
  const stateBefore = {
    matrixA: [[0, 0],
              [0, 0]]
  };
  let i = 0, j = 0, value = 2;
  const action = setEntry(i, j, value);

  deepFreeze(stateBefore);
  deepFreeze(action);

  const stateAfter = {
    matrixA: [[2, 0],
              [0, 0]]
  };

  expect (
    matrices(stateBefore, action)
  ).toEqual(stateAfter);
}

exports.testCalcMatrixR = () => {
  const stateBefore = {
    matrixA: [[2, 1],
              [6, 8]],
    matrixU: [[2, 1],
              [0, 5]]
  };

  const action = calcMatrixR();
  deepFreeze(stateBefore);
  deepFreeze(action);

  const stateAfter = {
    matrixA: [[2, 1],
              [6, 8]],
    matrixU: [[2, 1],
              [0, 5]],
    matrixR: [[1, 0],
              [0, 1]]
  };

  expect (
    matrices(stateBefore, action)
  ).toEqual(stateAfter);
}

exports.testCalcMatrixU = () => {
  const stateBefore = {
    matrixA: [[2, 1],
              [6, 8]]
  };

  const action = calcMatrixU();
  deepFreeze(stateBefore);
  deepFreeze(action);

  const stateAfter = {
    matrixA: [[2, 1],
              [6, 8]],
    matrixU: [[2, 1],
              [0, 5]]
  };

  expect (
    matrices(stateBefore, action)
  ).toEqual(stateAfter);
}

exports.testSetMatrixA = () => {
  const stateBefore = {
    matrixA: [[0, 0, 0],
             [0, 0, 0],
             [0, 0, 0]]
  };
  let matrix = [[1, 0, 0],
                [0, 1, 0],
                [0, 0, 1]];
  const action = setMatrixA(matrix);

  deepFreeze(stateBefore);
  deepFreeze(action);

  const stateAfter = {
    matrixA: [[1, 0, 0],
              [0, 1, 0],
              [0, 0, 1]]
  };

  expect(
    matrices(stateBefore, action)
  ).toEqual(stateAfter);
}

exports.testIncrementRow = () => {
  const stateBefore = 3;
  const action = incrementRows();

  deepFreeze(stateBefore);
  deepFreeze(action);

  const stateAfter = 4;

  expect (
    rows(stateBefore, action)
  ).toEqual(stateAfter);
}

exports.testDecrementRow = () => {
  const stateBefore = 3;
  const action = decrementRows();

  deepFreeze(stateBefore);
  deepFreeze(action);

  const stateAfter = 2;

  expect (
    rows(stateBefore, action)
  ).toEqual(stateAfter);
}

exports.testIncrementCol = () => {
  const stateBefore = 3;
  const action = incrementCols();

  deepFreeze(stateBefore);
  deepFreeze(action);

  const stateAfter = 4;

  expect (
    cols(stateBefore, action)
  ).toEqual(stateAfter);
}

exports.testDecrementCol = () => {
  const stateBefore = 1;
  const action = decrementCols();

  deepFreeze(stateBefore);
  deepFreeze(action);

  const stateAfter = 1;

  expect (
    cols(stateBefore, action)
  ).toEqual(stateAfter);
}
