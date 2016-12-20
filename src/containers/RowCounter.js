import { connect } from 'react-redux';
import { incrementRows, decrementRows } from '../actions/rows_cols';
import { addNewRow, removeRow } from '../actions/matrices';
import DimTracker from '../components/DimTracker';

const mapStateToProps = (state) => {
  return {
    heading: 'Rows',
    value: state.rows
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => {
      dispatch(incrementRows());
      dispatch(addNewRow());
    },
    onDecrement: () => {
      dispatch(decrementRows());
      dispatch(removeRow());
    }
  }
}

const RowCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(DimTracker);

export default RowCounter;
