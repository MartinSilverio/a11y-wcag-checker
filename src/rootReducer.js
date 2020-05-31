import { combineReducers } from 'redux';
import navReducer from './redux/nav/navReducer';
import wcagReducer from './redux/wcag/wcagReducer';
import filterReducer from './redux/filter/filterReducer';
// import tagsReducer from './redux/tags/tagsReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['filter', 'wcag'],
};

const rootReducer = combineReducers({
  nav: navReducer,
  wcag: wcagReducer,
  filter: filterReducer,
});

export default persistReducer(persistConfig, rootReducer);
