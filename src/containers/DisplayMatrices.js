import { connect } from 'react-redux';
import MatrixDisplay from '../components/MatrixDisplay';

const mapStateToProps = (state) => {
  return {
    matrixU: state.matrices.matrixU,
    matrixR: state.matrices.matrixR,
    hasData: state.hasData
  };
};

const DisplayMatrices = connect(
  mapStateToProps,
  null
)(MatrixDisplay)

export default DisplayMatrices;
