import WcagActionTypes from './wcagTypes';

export const toggleSuccessCriteria = (id) => ({
  type: WcagActionTypes.TOGGLE_SUCCESS_CRITERIA,
  payload: id,
});

export const deleteTag = (tagNdx, wcagId) => ({
  type: WcagActionTypes.REMOVE_TAG,
  payload: { tagNdx, wcagId },
});

export const addTag = (tag, wcagId) => ({
  type: WcagActionTypes.ADD_TAG,
  payload: { tag, wcagId },
});
