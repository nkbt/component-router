import Constants from './Constants';


export const navigateTo = query => ({
  type: Constants.NAVIGATE_TO,
  payload: {query}
});


export const addDefaultParam = (namespace, value) => ({
  type: Constants.ADD_DEFAULT_PARAM,
  payload: {namespace, value}
});


export const removeParam = namespace => ({
  type: Constants.REMOVE_PARAM,
  payload: {namespace}
});


export const restoreLocation = ({pathname, search, hash}, locationType) => ({
  type: Constants.RESTORE_LOCATION,
  payload: {location: {pathname, search, hash}, locationType}
});
