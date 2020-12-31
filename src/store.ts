import { createStore, applyMiddleware } from 'redux';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'redu... Remove this comment to see the full error message
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

import rootReducer from './rootReducer';

const middlwares = [];

if (process.env.NODE_ENV === 'development') {
  middlwares.push(logger);
}
export const store = createStore(rootReducer, applyMiddleware(...middlwares));

export const persistor = persistStore(store);
