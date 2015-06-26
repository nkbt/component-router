import sortedObject from 'sorted-object';
import FluxCommonStore from 'flux-common-store';
import Constants from './Constants';
import Dispatcher from './Dispatcher';
import UrlUtil from './UrlUtil';
import isNull from 'lodash/lang/isNull';
import isUndefined from 'lodash/lang/isUndefined';


const safeParams = params => {
  return {
    pathname: isNull(params.pathname) || isUndefined(params.pathname) ? '/' : params.pathname,
    query: isNull(params.query) || isUndefined(params.query) ? {} : params.query
  };
};


let location = '';
let {pathname, query} = safeParams(UrlUtil.parseHref(location));

const defaultParams = {};


const changeParams = params => {
  pathname = params.pathname;
  query = sortedObject(Object.assign({}, defaultParams, params.query));
};


const addDefaultParam = ({namespace, value}) => {
  defaultParams[namespace] = value;
  query = sortedObject(Object.assign({}, defaultParams, query));
};


const changeLocation = url => {
  location = url;
  changeParams(safeParams(UrlUtil.parseHref(location)));
};


const Store = Object.assign({}, FluxCommonStore, {
  getDefaultParams() {
    return defaultParams;
  },
  getQuery() {
    return query;
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

    case Constants.RESTORE_LOCATION:
      changeLocation(payload.location);
      Store.emitChange();
      break;

    default:
    // empty
  }
});


export default Store;
