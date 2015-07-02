import sortedObject from 'sorted-object';
import FluxCommonStore from 'flux-common-store';
import Constants from './Constants';
import Dispatcher from './Dispatcher';
import urlUtil from './urlUtil';
import isNull from 'lodash/lang/isNull';
import isUndefined from 'lodash/lang/isUndefined';


const safeParams = params => {
  return {
    pathname: isNull(params.pathname) || isUndefined(params.pathname) ? '/' : params.pathname,
    query: isNull(params.query) || isUndefined(params.query) ? {} : params.query
  };
};


let location = '';
let {pathname, query} = safeParams(urlUtil.parseHref(location));


const defaultParams = {};


const changeParams = params => {
  const newParams = urlUtil.merge({pathname, query}, params);

  pathname = newParams.pathname;
  query = sortedObject(Object.assign({}, defaultParams, newParams.query));
};


const addDefaultParam = ({namespace, value}) => {
  defaultParams[namespace] = value;
  query = sortedObject(Object.assign({}, defaultParams, query));
};


const removeParam = ({namespace}) => {
  delete defaultParams[namespace];
  delete query[namespace];
  query = sortedObject(query);
};


const changeLocation = url => {
  const newParams = safeParams(urlUtil.parseHref(url));

  location = url;
  pathname = newParams.pathname;
  query = sortedObject(Object.assign({}, defaultParams, newParams.query));
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
      changeParams(safeParams(payload));
      Store.emitChange();
      break;

    case Constants.ADD_DEFAULT_PARAM:
      addDefaultParam(payload);
      Store.emitChange();
      break;

    case Constants.REMOVE_PARAM:
      removeParam(payload);
      Store.emitChange();
      break;

    case Constants.RESTORE_LOCATION:
      changeLocation(payload.location);
      Store.emitChange();
      break;

    default:
    // empty
  }
});


export default Store;
