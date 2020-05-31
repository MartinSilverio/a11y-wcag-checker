import FilterActionTypes from './filterTypes';

const INITIAL_STATE = {
  success_criteria: {
    A: true,
    AA: true,
    AAA: true,
  },
  tags: {
    video: false,
  },
};

const filterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FilterActionTypes.TOGGLE_COMPLIANCE_LEVEL:
      return {
        ...state,
        success_criteria: {
          ...state.success_criteria,
          [action.payload]: !state.success_criteria[action.payload],
        },
      };
    case FilterActionTypes.TOGGLE_TAG:
      return {
        ...state,
        tags: {
          ...state.tags,
          [action.payload]: !state.tags[action.payload],
        },
      };
    default:
      return state;
  }
};

export default filterReducer;
