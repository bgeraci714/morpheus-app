import { connect } from 'react-redux';
import { setEntry } from '../actions/matrices';
import Matrix from '../components/Matrix';

const mapStateToProps = (state) => {
  return {
    matrixA: state.matrices.matrixA,
    rows: state.rows,
    cols: state.cols
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onEntryChange: (row, col, value) => {
      dispatch(setEntry(row, col, value))
    }
  }
}

const MatrixA = connect(
  mapStateToProps,
  mapDispatchToProps
)(Matrix)

export default MatrixA;
