import FilterActionTypes from './filterTypes';

const INITIAL_STATE = {
  A: true,
  AA: true,
  AAA: true,
};

const filterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FilterActionTypes.TOGGLE_COMPLIANCE_LEVEL:
      return { ...state, [action.payload]: !state[action.payload] };
    default:
      return state;
  }
};

export default filterReducer;
