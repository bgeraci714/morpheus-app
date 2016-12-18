import { combineReducers } from 'redux';
import rows from './rows';
import cols from './cols';
import matrices from './matrices';

export default combineReducers({
  matrices,
  rows,
  cols
})
