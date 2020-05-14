import { combineReducers } from 'redux';
import navReducer from './redux/nav/navReducer';
import wcagReducer from './redux/wcag/wcagReducer';

export default combineReducers({
  nav: navReducer,
  wcag: wcagReducer,
});
