/* global window */

import {createStore as createReduxStore, combineReducers, applyMiddleware, compose} from 'redux';
import {createLogger} from 'redux-logger';
import {componentRouter} from '../../src';


const factory = initialState => {
  const rootReducer = combineReducers({
    componentRouter
  });

  const devTools = typeof window !== 'undefined' && window.devToolsExtension;
  const middleware = applyMiddleware(createLogger({
    level: 'info',
    collapsed: true,
    timestamp: false,
    duration: true
  }));

  if (!devTools) {
    return createReduxStore(rootReducer, initialState, middleware);
  }

  return createReduxStore(rootReducer, initialState, compose(middleware, devTools()));
};


export const createStore = factory;
