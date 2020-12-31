import { combineReducers } from 'redux';
import navReducer from './redux/nav/navReducer';
import wcagReducer from './redux/wcag/wcagReducer';
import filterReducer from './redux/filter/filterReducer';
import ormReducer from './redux/orm/ormReducer';
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
  orm: ormReducer,
});

export default persistReducer(persistConfig, rootReducer);
