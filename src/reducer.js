import sortedObject from './sortedObject';
import Constants from './Constants';
import urlUtil from './urlUtil';
import shallowEqual from 'fbjs/lib/shallowEqual';


const initialState = {
  query: {},
  cleanQuery: {},
  defaultParams: {},
  locationType: Constants.TYPE_HTML5
};


export const cleanupQuery = ({query, defaultParams}) => {
  return sortedObject(Object.keys(query).reduce((clean, key) => {
    if (defaultParams.hasOwnProperty(key) && query[key] === defaultParams[key]) {
      return clean;
    }
    return {...clean, [key]: query[key]};
  }, {}));
};


const safeParams = ({query}) => {
  const newQuery = query === null || query === undefined ? {} : query;

  Object.keys(newQuery).forEach(key => newQuery[key] = `${newQuery[key]}`);

  return {query: newQuery};
};


const changeParams = (state, params) => {
  const {defaultParams, query} = state;
  const newParams = urlUtil.merge({query}, safeParams(params));
  const newQuery = sortedObject({...defaultParams, ...newParams.query});

  if (shallowEqual(newQuery, query)) {
    return state;
  }

  return {
    ...state,
    query: newQuery,
    cleanQuery: cleanupQuery({query: newQuery, defaultParams})
  };
};


const addDefaultParam = (state, {namespace, value}) => {
  const {defaultParams, query} = state;
  const stringValue = `${value}`;

  if (defaultParams.hasOwnProperty(namespace) && defaultParams[namespace] === stringValue) {
    return state;
  }

  const newDefaultParams = {...defaultParams, [namespace]: stringValue};
  const newQuery = sortedObject({...newDefaultParams, ...query});

  return {
    ...state,
    defaultParams: newDefaultParams,
    query: newQuery,
    cleanQuery: cleanupQuery({query: newQuery, defaultParams: newDefaultParams})
  };
};


const removeParam = (state, {namespace}) => {
  const {defaultParams, query} = state;
  const newDefaultParams = {...defaultParams};
  const newQuery = {...query};

  if (newDefaultParams.hasOwnProperty(namespace)) {
    delete newDefaultParams[namespace];
  }
  if (newQuery.hasOwnProperty(namespace)) {
    delete newQuery[namespace];
  }

  return {
    ...state,
    defaultParams: newDefaultParams,
    query: newQuery,
    cleanQuery: cleanupQuery({query: newQuery, defaultParams: newDefaultParams})
  };
};


const restoreLocation = (state, {location, locationType = Constants.TYPE_HTML5}) => {
  const {defaultParams} = state;
  const {query: newQuery} = safeParams(urlUtil.parseHref(location));
  const newState = changeParams({...state, locationType}, {
    query: {...defaultParams, ...newQuery}
  });

  return {...newState, locationType};
};


export const componentRouter = (state = initialState, {type, payload}) => {
  switch (type) {
    case Constants.NAVIGATE_TO:
      return changeParams(state, payload);

    case Constants.ADD_DEFAULT_PARAM:
      return addDefaultParam(state, payload);

    case Constants.REMOVE_PARAM:
      return removeParam(state, payload);

    case Constants.RESTORE_LOCATION:
      return restoreLocation(state, payload);

    default:
      return state;
  }
};
