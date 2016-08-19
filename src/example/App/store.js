import {createStore as createReduxStore, combineReducers, applyMiddleware, compose} from 'redux';
import logger from 'redux-logger';
import {componentRouter} from './../../reducer';


const factory = initialState => {
  const rootReducer = combineReducers({
    componentRouter
  });

  const devTools = typeof window !== 'undefined' && window.devToolsExtension;
  const middleware = applyMiddleware(
    logger({
      level: 'info',
      collapsed: true,
      timestamp: false,
      duration: true
    })
  );

  if (!devTools) {
    return createReduxStore(rootReducer, initialState, middleware);
  }

  return createReduxStore(rootReducer, initialState, compose(middleware, devTools()));
};


export const createStore = factory;
