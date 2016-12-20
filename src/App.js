import React from 'react';

// Redux imports
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers/index';

import MatrixA from './containers/MatrixA';
import RowCounter from './containers/RowCounter';
import ColCounter from './containers/ColCounter';
import logo from './logo.svg';
import './App.css';

//const store = createStore(reducer);

//console.log(store.getState());

const InnerApp = () => (
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
      </div>
    </div>
  </div>
)


const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


const App = () => (
  <Provider store={store}>
    <InnerApp />
  </Provider>
);


export default App;
