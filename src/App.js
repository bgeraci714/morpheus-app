import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Redux imports
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers/index';
import { setMatrixA, calcMatrixU, calcMatrixR } from './actions/matrices';
import { incrementRows, decrementRows, incrementCols, decrementCols } from './actions/rows_cols';

import DimTracker from './components/DimTracker';
import Matrix from './components/Matrix';
import logo from './logo.svg';
import './App.css';

//const store = createStore(reducer);
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//console.log(store.getState());

const handleChange = (obj) => {
  console.log(obj.target.value);
}



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matrixA: []
    };
  }

  setArray = (arr) => {
    store.dispatch(setMatrixA(arr));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>

        </div>
        <div className="container">
          <div>
            <DimTracker
              key="rows"
              heading="Rows"
              value={store.getState().rows}
              onIncrement={ () => store.dispatch(incrementRows())}
              onDecrement={ () => store.dispatch(decrementRows())}
            />
            <DimTracker
              key="cols"
              heading="Cols"
              value={store.getState().cols}
              onIncrement={ () => store.dispatch(incrementCols())}
              onDecrement={ () => store.dispatch(decrementCols())}
            />
          </div>
          <div>
            <Matrix
              rows={store.getState().rows}
              cols={store.getState().cols}
              store={store}
            />
          </div>
        </div>
      </div>
    );
  }
}

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
};

store.subscribe(render);


export default App;
