import {
  navigateTo,
  restoreLocation,
  addDefaultParam,
  addOffRecordParam,
  removeParam,
  addRoute,
  removeRoute
} from './actions';

export const actions = {
  navigateTo,
  restoreLocation,
  addDefaultParam,
  addOffRecordParam,
  removeParam,
  addRoute,
  removeRoute
};

import {
  ADD_DEFAULT_PARAM,
  ADD_OFF_RECORD_PARAM,
  ADD_ROUTE,
  REMOVE_PARAM,
  REMOVE_ROUTE,
  NAVIGATE_TO,
  RESTORE_LOCATION,
  LOCATION_HASH,
  LOCATION_HISTORY
} from './constants';

export const Constants = {
  ADD_DEFAULT_PARAM,
  ADD_OFF_RECORD_PARAM,
  ADD_ROUTE,
  REMOVE_PARAM,
  REMOVE_ROUTE,
  NAVIGATE_TO,
  RESTORE_LOCATION,
  LOCATION_HASH,
  LOCATION_HISTORY
};


export {componentRouter, href, isActive} from './reducer';
export {location} from './location';
export {locationHash} from './adapters/hash';
export {locationHistory} from './adapters/history';
export {locationNode} from './adapters/node';
