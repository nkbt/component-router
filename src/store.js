import {createStore} from 'redux';
import {componentRouter} from './reducer';


const factory = () => {
  if (process.env.NODE_ENV === 'production') {
    return createStore(componentRouter);
  }

  const devTools = typeof global.window === 'object' &&
    typeof global.window.devToolsExtension !== 'undefined' &&
    global.window.devToolsExtension;

  if (!devTools) {
    return createStore(componentRouter);
  }

  return createStore(componentRouter, undefined, devTools());
};

export const store = factory();
