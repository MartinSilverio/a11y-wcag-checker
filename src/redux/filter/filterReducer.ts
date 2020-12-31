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

const filterReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case FilterActionTypes.TOGGLE_COMPLIANCE_LEVEL:
      return {
        ...state,
        success_criteria: {
          ...state.success_criteria,
          // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
          [action.payload]: !state.success_criteria[action.payload],
        },
      };
    case FilterActionTypes.TOGGLE_TAG:
      return {
        ...state,
        tags: {
          ...state.tags,
          // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
          [action.payload]: !state.tags[action.payload],
        },
      };
    default:
      return state;
  }
};

export default filterReducer;
