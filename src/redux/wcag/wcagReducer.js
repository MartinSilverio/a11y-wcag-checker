//TODO Move this server-side
import WcagActionTypes from './wcagTypes';
import { SUCCESS_CRITERIA } from '../../data';
import { removeTagFromWcag, addTagToWcag } from './wcagUtils';

const wcagReducer = (state = SUCCESS_CRITERIA, action) => {
  switch (action.type) {
    case WcagActionTypes.TOGGLE_SUCCESS_CRITERIA:
      return state.map((successCriteria) =>
        successCriteria.ref_id === action.payload
          ? { ...successCriteria, checked: !successCriteria.checked }
          : successCriteria
      );
    case WcagActionTypes.REMOVE_TAG:
      return removeTagFromWcag(state, action.payload);
    case WcagActionTypes.ADD_TAG:
      return addTagToWcag(state, action.payload);
    default:
      return state;
  }
};

export default wcagReducer;
