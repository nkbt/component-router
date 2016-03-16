import Constants from './Constants';


export const navigateTo = ({pathname, query}) => ({
  type: Constants.NAVIGATE_TO,
  payload: {pathname, query}
});


export const restoreLocation = ({pathname, search, hash}, locationType) => ({
  type: Constants.RESTORE_LOCATION,
  payload: {location: {pathname, search, hash}, locationType}
});


export const addDefaultParam = (namespace, value) => ({
  type: Constants.ADD_DEFAULT_PARAM,
  payload: {namespace, value}
});


export const removeParam = namespace => ({
  type: Constants.REMOVE_PARAM,
  payload: {namespace}
});


export const addRoute = route => ({
  type: Constants.ADD_ROUTE,
  payload: {route}
});


export const removeRoute = route => ({
  type: Constants.REMOVE_ROUTE,
  payload: {route}
});

