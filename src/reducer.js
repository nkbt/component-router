import sortedObject from './sortedObject';
import Constants from './Constants';
import shallowEqual from 'fbjs/lib/shallowEqual';
import {parse, stringify} from 'qs';
import {parseRoute, defaultRoute} from './pathname/parse';
import {matchRoute} from './pathname/match';


export const initialState = {
  pathname: '/',
  hash: '',
  query: {},
  cleanQuery: {},
  defaultParams: {},
  routes: {},
  currentRoute: defaultRoute,
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
  const {defaultParams, query, pathname} = state;
  const newQuery = sortedObject({...defaultParams, ...query, ...safeQuery(params.query)});
  const newPathname = params.pathname || pathname;

  if (shallowEqual(newQuery, query) && newPathname === pathname) {
    return state;
  }

  const cleanQuery = cleanupQuery({query: newQuery, defaultParams});
  const currentRoute = matchRoute(state.routes, defaultRoute)(newPathname);

  return {
    ...state,
    query: newQuery,
    pathname: newPathname,
    cleanQuery,
    currentRoute
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
    ...safeQuery(parse(search.substr(1), {strictNullHandling: true}))
  });

  return {
    ...state,
    pathname,
    hash,
    query: newQuery,
    cleanQuery: cleanupQuery({query: newQuery, defaultParams}),
    currentRoute: matchRoute(state.routes, defaultRoute)(pathname),
    locationType
  };
};


export const addRoute = (state, payload) => {
  const routes = {...state.routes, [payload.route]: parseRoute(payload.route)};
  const currentRoute = matchRoute(routes, defaultRoute)(state.pathname);

  return {...state, routes, currentRoute};
};


export const removeRoute = (state, payload) => ({
  ...state,
  routes: Object.keys(state.routes)
    .filter(key => key !== payload.route)
    .reduce((result, key) => ({...result, [key]: state.routes[key]}), {})
});


export const href = (state, payload) => {
  const {pathname, cleanQuery, hash} = changeParams(state, payload);
  const search = stringify(cleanQuery, {strictNullHandling: true});

  return [pathname, search.length > 0 ? `?${search}` : '', hash].join('');
};


export const isActive = (state, {pathname, query}) => {
  const {
    pathname: newPathname, cleanQuery
  } = changeParams(state, {pathname, query});


  return shallowEqual(cleanQuery, state.cleanQuery) &&
    newPathname === state.pathname;
};


const reduce = (state, {type, payload}) => {
  switch (type) {
    case Constants.NAVIGATE_TO:
      return changeParams(state, payload);

    case Constants.ADD_DEFAULT_PARAM:
      return addDefaultParam(state, payload);

    case Constants.REMOVE_PARAM:
      return removeParam(state, payload);

    case Constants.RESTORE_LOCATION:
      return restoreLocation(state, payload);

    case Constants.ADD_ROUTE:
      return addRoute(state, payload);

    case Constants.REMOVE_ROUTE:
      return removeRoute(state, payload);

    default:
      return state;
  }
};


export const componentRouter = (state = initialState, {type, payload}) => {
  const newState = reduce(state, {type, payload});

  return shallowEqual(state, newState) ? state : newState;
};
