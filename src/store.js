import {createStore as createReduxStore} from 'redux';
import {componentRouter} from './reducer';


const factory = initialState => {
  if (process.env.NODE_ENV === 'production') {
    return createReduxStore(componentRouter, initialState);
  }

  const devTools = typeof global.window === 'object' &&
    typeof global.window.devToolsExtension !== 'undefined' &&
    global.window.devToolsExtension;

  if (!devTools) {
    return createReduxStore(componentRouter, initialState);
  }

  return createReduxStore(componentRouter, initialState, devTools());
};


export const createStore = factory;
