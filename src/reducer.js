import shallowEqual from 'shallow-equal/objects';
import sortedObject from './sortedObject';
import {
  ADD_DEFAULT_PARAM,
  ADD_OFF_RECORD_PARAM,
  ADD_ROUTE,
  REMOVE_PARAM,
  REMOVE_ROUTE,
  NAVIGATE_TO,
  RESTORE_LOCATION,
  LOCATION_HISTORY
} from './constants';
import {parseRoute} from './pathname/parse';
import {matchRoute, emptyRoute} from './pathname/match';
import {safeQuery, queryToSearch} from './codec';


export const initialState = {
  pathname: '/',
  hash: '',
  offRecordParams: [],
  query: {},
  cleanQuery: {},
  defaultParams: {},
  routes: {},
  currentRoute: emptyRoute,
  locationType: LOCATION_HISTORY
};


export const cleanupQuery = ({query, defaultParams}) => sortedObject(Object.keys(query)
  .reduce((clean, key) => {
    if (key in defaultParams && query[key] === defaultParams[key]) {
      return clean;
    }
    return {...clean, [key]: query[key]};
  }, {}));


export const changeParams = (state, params) => {
  const {defaultParams, query, pathname} = state;
  const newQuery = sortedObject({...defaultParams, ...query, ...safeQuery(params.query)});
  const newPathname = params.pathname || pathname;

  if (shallowEqual(newQuery, query) && newPathname === pathname) {
    return state;
  }

  const cleanQuery = cleanupQuery({query: newQuery, defaultParams});
  const currentRoute = matchRoute(state.routes)(newPathname);

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

  if (namespace in defaultParams && defaultParams[namespace] === stringValue) {
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

export const addOffRecordParam = (state, {namespace}) => {
  const {offRecordParams} = state;

  if (offRecordParams.indexOf(namespace) < 0) {
    offRecordParams.push(namespace);
  }

  return {
    ...state,
    offRecordParams
  };
};

export const removeParam = (state, {namespace}) => {
  const {defaultParams, query} = state;
  const newDefaultParams = {...defaultParams};
  const newQuery = sortedObject({...defaultParams, ...query});

  if (namespace in newDefaultParams) {
    delete newDefaultParams[namespace];
  }
  if (namespace in newQuery) {
    delete newQuery[namespace];
  }

  return {
    ...state,
    defaultParams: newDefaultParams,
    query: newQuery,
    cleanQuery: cleanupQuery({query: newQuery, defaultParams: newDefaultParams})
  };
};


export const restoreLocation = (
  state,
  {
    pathname, query, hash, locationType = LOCATION_HISTORY
  }
) => {
  const {defaultParams} = state;

  const newQuery = sortedObject({
    ...defaultParams,
    ...safeQuery(query)
  });

  return {
    ...state,
    pathname,
    hash,
    query: newQuery,
    cleanQuery: cleanupQuery({query: newQuery, defaultParams}),
    currentRoute: matchRoute(state.routes)(pathname),
    locationType
  };
};


export const addRoute = (state, payload) => {
  const routes = {...state.routes, [payload.route]: parseRoute(payload.route)};
  const currentRoute = matchRoute(routes)(state.pathname);

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

  return [pathname, queryToSearch(cleanQuery), hash].join('');
};


export const isActive = (state, {pathname, query}) => {
  const {
    pathname: prevPathname,
    cleanQuery: prevCleanQuery
  } = state;
  const {
    pathname: nextPathname,
    cleanQuery: nextCleanQuery
  } = changeParams(state, {pathname, query});

  return shallowEqual(nextCleanQuery, prevCleanQuery) && nextPathname === prevPathname;
};


const reduce = (state, {type, ...payload}) => {
  switch (type) {
    case NAVIGATE_TO:
      return changeParams(state, payload);

    case ADD_DEFAULT_PARAM:
      return addDefaultParam(state, payload);

    case ADD_OFF_RECORD_PARAM:
      return addOffRecordParam(state, payload);

    case REMOVE_PARAM:
      return removeParam(state, payload);

    case RESTORE_LOCATION:
      return restoreLocation(state, payload);

    case ADD_ROUTE:
      return addRoute(state, payload);

    case REMOVE_ROUTE:
      return removeRoute(state, payload);

    default:
      return state;
  }
};


export const componentRouter = (state = initialState, {type, ...payload}) => {
  const newState = reduce(state, {type, ...payload});

  return shallowEqual(state, newState) ? state : newState;
};
