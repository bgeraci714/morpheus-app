import { connect } from 'react-redux';

import { calcMatrixU, calcMatrixR } from '../actions/matrices';
import { hasData } from '../actions/fetching';
import CalcButton from '../components/CalcButton';

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(calcMatrixU());
      dispatch(calcMatrixR());
      dispatch(hasData());
    }
  }
}

const CalculateUR = connect(
  null,
  mapDispatchToProps
)(CalcButton)

export default CalculateUR;
