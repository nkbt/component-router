export const ADD_DEFAULT_PARAM = 'ADD_DEFAULT_PARAM';
export const ADD_OFF_RECORD_PARAM = 'ADD_OFF_RECORD_PARAM';
export const ADD_ROUTE = 'ADD_ROUTE';
export const REMOVE_PARAM = 'REMOVE_PARAM';
export const REMOVE_ROUTE = 'REMOVE_ROUTE';
export const NAVIGATE_TO = 'NAVIGATE_TO';
export const RESTORE_LOCATION = 'RESTORE_LOCATION';
export const LOCATION_HASH = 'LOCATION_HASH';
export const LOCATION_HISTORY = 'LOCATION_HISTORY';


export const navigateTo = ({pathname, query}) => ({type: NAVIGATE_TO, pathname, query});
export const restoreLocation = ({pathname, query, hash}, locationType) => ({
  type: RESTORE_LOCATION,
  pathname,
  query,
  hash,
  locationType
});
export const addDefaultParam = (namespace, value) => ({type: ADD_DEFAULT_PARAM, namespace, value});
export const addOffRecordParam = namespace => ({type: ADD_OFF_RECORD_PARAM, namespace});
export const removeParam = namespace => ({type: REMOVE_PARAM, namespace});
export const addRoute = route => ({type: ADD_ROUTE, route});
export const removeRoute = route => ({type: REMOVE_ROUTE, route});
