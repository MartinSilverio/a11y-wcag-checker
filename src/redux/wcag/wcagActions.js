import WcagActionTypes from './wcagTypes';

export const toggleSuccessCriteria = (id) => ({
  type: WcagActionTypes.TOGGLE_SUCCESS_CRITERIA,
  payload: id,
});
