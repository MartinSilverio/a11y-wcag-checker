import WcagActionTypes from './wcagTypes';

export const toggleSuccessCriteria = (id: any) => ({
  type: WcagActionTypes.TOGGLE_SUCCESS_CRITERIA,
  payload: id
});

export const deleteTag = (tagNdx: any, wcagId: any) => ({
  type: WcagActionTypes.REMOVE_TAG,
  payload: { tagNdx, wcagId },
});

export const addTag = (tag: any, wcagId: any) => ({
  type: WcagActionTypes.ADD_TAG,
  payload: { tag, wcagId },
});
