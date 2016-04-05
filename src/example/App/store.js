import {createStore as createReduxStore, combineReducers} from 'redux';
import {componentRouter} from './../../reducer';


const factory = initialState => {
  if (process.env.NODE_ENV === 'production') {
    return createReduxStore(combineReducers({
      componentRouter
    }), initialState);
  }

  const devTools = typeof global.window === 'object' &&
    typeof global.window.devToolsExtension !== 'undefined' &&
    global.window.devToolsExtension;

  if (!devTools) {
    return createReduxStore(combineReducers({
      componentRouter
    }), initialState);
  }

  return createReduxStore(combineReducers({
    componentRouter
  }), initialState, devTools());
};


export const createStore = factory;
