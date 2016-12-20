import { connect } from 'react-redux';
import { incrementCols, decrementCols } from '../actions/rows_cols';
import { addNewCol, removeCol } from '../actions/matrices';
import DimTracker from '../components/DimTracker';

const mapStateToProps = (state) => {
  return {
    heading: 'Cols',
    value: state.cols
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => {
      dispatch(incrementCols());
      dispatch(addNewCol());
    },
    onDecrement: () => {
      dispatch(decrementCols());
      dispatch(removeCol());
    }
  }
}

const ColCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(DimTracker);

export default ColCounter;
