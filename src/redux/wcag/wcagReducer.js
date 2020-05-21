//TODO Move this server-side
import WcagActionTypes from './wcagTypes';
import { SUCCESS_CRITERIA } from '../../data';

const wcagReducer = (state = SUCCESS_CRITERIA, action) => {
  switch (action.type) {
    case WcagActionTypes.TOGGLE_SUCCESS_CRITERIA:
      return state.map((successCriteria) =>
        successCriteria.ref_id === action.payload
          ? { ...successCriteria, checked: !successCriteria.checked }
          : successCriteria
      );
    default:
      return state;
  }
};

export default wcagReducer;
