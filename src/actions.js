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
  payload: {pathname, query}
});


export const restoreLocation = ({pathname, search, hash}, locationType) => ({
  type: RESTORE_LOCATION,
  payload: {location: {pathname, search, hash}, locationType}
});


export const addDefaultParam = (namespace, value) => ({
  type: ADD_DEFAULT_PARAM,
  payload: {namespace, value}
});

export const addOffRecordParam = namespace => ({
  type: ADD_OFF_RECORD_PARAM,
  payload: {namespace}
});

export const removeParam = namespace => ({
  type: REMOVE_PARAM,
  payload: {namespace}
});


export const addRoute = route => ({
  type: ADD_ROUTE,
  payload: {route}
});


export const removeRoute = route => ({
  type: REMOVE_ROUTE,
  payload: {route}
});

