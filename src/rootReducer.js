import { combineReducers } from 'redux';
import navReducer from './redux/nav/navReducer';
import wcagReducer from './redux/wcag/wcagReducer';
import filterReducer from './redux/filter/filterReducer';

export default combineReducers({
  nav: navReducer,
  wcag: wcagReducer,
  filter: filterReducer,
});
