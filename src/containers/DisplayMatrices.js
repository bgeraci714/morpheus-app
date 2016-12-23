import { connect } from 'react-redux';
import MatrixDisplay from '../components/MatrixDisplay';
import { getColumnSpace, getNullspace, getRowSpace, transpose } from '../matrixFunctions/matrixFunctions';

const mapStateToProps = (state) => {
  if (state.hasData)
    return {
      matrixU: state.matrices.matrixU,
      matrixR: state.matrices.matrixR,
      hasData: state.hasData,

      colSpace: getColumnSpace(state.matrices.matrixA),
      rowSpace: getRowSpace(state.matrices.matrixA),
      nullspace: getNullspace(state.matrices.matrixA),
      leftNullspace: getNullspace(transpose(state.matrices.matrixA))
    };
  else {
    return {
      hasData: state.hasData
    };
  }
};

const DisplayMatrices = connect(
  mapStateToProps,
  null
)(MatrixDisplay)

export default DisplayMatrices;
