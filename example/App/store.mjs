/* global window */

import redux from 'redux';
import reduxLogger from 'redux-logger';
import {componentRouter} from '../..';


const {
  createStore: createReduxStore,
  combineReducers,
  applyMiddleware,
  compose
} = redux;


const {createLogger} = reduxLogger;


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
