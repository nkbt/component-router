import {
  navigateTo, restoreLocation, addDefaultParam, removeParam, addRoute, removeRoute
} from './actions';

export {componentRouter, href, isActive} from './reducer';
export {location} from './location';
export {locationHash} from './adapters/hash';
export {locationHistory} from './adapters/history';
export {locationNode} from './adapters/node';
export {default as Constants} from './Constants';
export const actions = {
  navigateTo, restoreLocation, addDefaultParam, removeParam, addRoute, removeRoute
};
