import sortedObject from './sortedObject';
import FluxCommonStore from 'flux-common-store';
import Constants from './Constants';
import Dispatcher from './Dispatcher';
import urlUtil from './urlUtil';
import isNull from 'lodash.isnull';
import isUndefined from 'lodash.isundefined';
import shallowEqual from 'react/lib/shallowEqual';


const safeParams = params => {
  const newQuery = isNull(params.query) || isUndefined(params.query) ? {} : params.query;

  Object.keys(newQuery).forEach(key => newQuery[key] = `${newQuery[key]}`);

  return {
    pathname: isNull(params.pathname) || isUndefined(params.pathname) ? '/' : params.pathname,
    query: newQuery
  };
};


let pathname = '/';
let query = {};


const defaultParams = {};


const changeParams = params => {
  let isChanged = false;
  const newParams = urlUtil.merge({pathname, query}, params);
  const newQuery = sortedObject(Object.assign({}, defaultParams, newParams.query));


  if (pathname !== newParams.pathname) {
    pathname = newParams.pathname;
    isChanged = true;
  }

  if (!shallowEqual(newQuery, query)) {
    query = newQuery;
    isChanged = true;
  }

  return isChanged;
};


const addDefaultParam = ({namespace, value}) => {
  let isChanged = false;
  const stringValue = `${value}`;

  if (!defaultParams.hasOwnProperty(namespace) || defaultParams[namespace] !== stringValue) {
    defaultParams[namespace] = stringValue;
    query = sortedObject(Object.assign({}, defaultParams, query));
    isChanged = true;
  }

  return isChanged;
};


const removeParam = ({namespace}) => {
  let isChanged = false;

  if (defaultParams.hasOwnProperty(namespace)) {
    delete defaultParams[namespace];
    isChanged = true;
  }

  if (query.hasOwnProperty(namespace)) {
    delete query[namespace];
    query = sortedObject(query);
    isChanged = true;
  }

  return isChanged;
};


const changeLocation = url => {
  const {pathname: newPathname, query: newQuery} = safeParams(urlUtil.parseHref(url));

  return changeParams({pathname: newPathname, query: Object.assign({}, defaultParams, newQuery)});
};


const Store = Object.assign({}, FluxCommonStore, {
  getDefaultParams() {
    return defaultParams;
  },


  getQuery() {
    return query;
  },


  getCleanQuery() {
    const cleanQuery = Object.assign({}, query);

    Object.keys(defaultParams).forEach(key => {
      if (cleanQuery[key] === defaultParams[key]) {
        delete cleanQuery[key];
      }
    });
    return sortedObject(cleanQuery);
  },


  getPathname() {
    return pathname;
  }
});


// We expect a large amount of links on a page, so in this case we want to remove the limit
Store.setMaxListeners(0);


Store.dispatchToken = Dispatcher.register(({actionType, payload}) => {
  switch (actionType) {
    case Constants.NAVIGATE_TO:
      if (changeParams(safeParams(payload))) {
        Store.emitChange();
      }
      break;

    case Constants.ADD_DEFAULT_PARAM:
      if (addDefaultParam(payload)) {
        Store.emitChange();
      }
      break;

    case Constants.REMOVE_PARAM:
      if (removeParam(payload)) {
        Store.emitChange();
      }
      break;

    case Constants.RESTORE_LOCATION:
      if (changeLocation(payload.location)) {
        Store.emitChange();
      }
      break;

    default:
    // empty
  }
});


export default Store;
