import sortedObject from './sortedObject';
import Constants from './Constants';
import shallowEqual from 'fbjs/lib/shallowEqual';
import {parse} from 'qs';


export const initialState = {
  pathname: '/',
  hash: '',
  query: {},
  cleanQuery: {},
  defaultParams: {},
  locationType: Constants.LOCATION_HISTORY
};


export const cleanupQuery = ({query, defaultParams}) =>
  sortedObject(Object.keys(query)
    .reduce((clean, key) => {
      if (defaultParams.hasOwnProperty(key) && query[key] === defaultParams[key]) {
        return clean;
      }
      return {...clean, [key]: query[key]};
    }, {}));


export const safeQuery = (query = {}) => {
  const newQuery = query === null ? {} : query;

  Object.keys(newQuery).forEach(key => {
    newQuery[key] = `${newQuery[key]}`;
  });

  return newQuery;
};


export const changeParams = (state, params) => {
  const {defaultParams, query} = state;
  const newQuery = sortedObject({...defaultParams, ...query, ...safeQuery(params.query)});

  if (shallowEqual(newQuery, query)) {
    return state;
  }

  const cleanQuery = cleanupQuery({query: newQuery, defaultParams});

  return {
    ...state,
    query: newQuery,
    cleanQuery
  };
};


export const addDefaultParam = (state, {namespace, value}) => {
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


export const removeParam = (state, {namespace}) => {
  const {defaultParams, query} = state;
  const newDefaultParams = {...defaultParams};
  const newQuery = sortedObject({...defaultParams, ...query});

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


export const restoreLocation = (state, {location, locationType = Constants.LOCATION_HISTORY}) => {
  const {defaultParams} = state;
  const {pathname, search, hash} = location;

  const newQuery = sortedObject({
    ...defaultParams,
    ...safeQuery(parse(search.substr(1), {strictNullHandling: true}))});

  return {
    ...state,
    pathname,
    hash,
    query: newQuery,
    cleanQuery: cleanupQuery({query: newQuery, defaultParams}),
    locationType
  };
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
