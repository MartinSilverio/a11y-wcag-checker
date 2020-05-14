import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './rootReducer';

const middlwares = [];

if (process.env.NODE_ENV === 'development') {
  middlwares.push(logger);
}
const store = createStore(rootReducer, applyMiddleware(...middlwares));

export default store;
