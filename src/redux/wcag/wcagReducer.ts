//TODO Move this server-side
import WcagActionTypes from './wcagTypes';
import { SUCCESS_CRITERIA } from '../../data';
import { removeTagFromWcag, addTagToWcag } from './wcagUtils';

const wcagReducer = (state = SUCCESS_CRITERIA, action: any) => {
  switch (action.type) {
    case WcagActionTypes.TOGGLE_SUCCESS_CRITERIA:
      // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
      const toggledCritera = state.byId[action.payload];
      const byId = {
        ...state.byId,
        [action.payload]: {
          ...toggledCritera,
          checked: !toggledCritera.checked,
        },
      };
      return { byId, allIds: [...state.allIds] };
    case WcagActionTypes.REMOVE_TAG:
      return removeTagFromWcag(state, action.payload);
    case WcagActionTypes.ADD_TAG:
      return addTagToWcag(state, action.payload);
    default:
      return state;
  }
};

export default wcagReducer;
