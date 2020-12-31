import NavActionTypes from './navTypes';

const INITIAL_STATE = {
  openNav: false,
};

const navReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NavActionTypes.TOGGLE_NAV_MENU:
      return {
        ...state,
        openNav: !state.openNav,
      };
    default:
      return state;
  }
};

export default navReducer;
