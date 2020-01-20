import {
  NAVIGATE_TO,
  RESTORE_LOCATION,
  ADD_DEFAULT_PARAM,
  ADD_OFF_RECORD_PARAM,
  REMOVE_PARAM,
  ADD_ROUTE,
  REMOVE_ROUTE
} from './constants';


export const navigateTo = ({pathname, query}) => ({
  type: NAVIGATE_TO,
  pathname,
  query
});


export const restoreLocation = ({pathname, query, hash}, locationType) => ({
  type: RESTORE_LOCATION,
  pathname,
  query,
  hash,
  locationType
});


export const addDefaultParam = (namespace, value) => ({
  type: ADD_DEFAULT_PARAM,
  namespace,
  value
});


export const addOffRecordParam = namespace => ({
  type: ADD_OFF_RECORD_PARAM,
  namespace
});


export const removeParam = namespace => ({
  type: REMOVE_PARAM,
  namespace
});


export const addRoute = route => ({
  type: ADD_ROUTE,
  route
});


export const removeRoute = route => ({
  type: REMOVE_ROUTE,
  route
});
