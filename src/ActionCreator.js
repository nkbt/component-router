import Constants from './Constants';


export const navigateTo = ({query}) => ({
  actionType: Constants.NAVIGATE_TO,
  payload: {query}
});


export const addDefaultParam = ({namespace, value}) => ({
  actionType: Constants.ADD_DEFAULT_PARAM,
  payload: {namespace, value}
});


export const removeParam = ({namespace}) => ({
  actionType: Constants.REMOVE_PARAM,
  payload: {namespace}
});


export const restoreLocation = ({location, type}) => ({
  actionType: Constants.RESTORE_LOCATION,
  payload: {location, type}
});
