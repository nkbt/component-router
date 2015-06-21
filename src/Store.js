import FluxCommonStore from 'flux-common-store';
import Constants from './Constants';
import Dispatcher from './Dispatcher';
import LocationUtil from './LocationUtil';
import url from 'url';
import isNull from 'lodash/lang/isNull';
import isUndefined from 'lodash/lang/isUndefined';


const safeParams = params => {
  return {
    pathname: isNull(params.pathname) || isUndefined(params.pathname) ? '/' : params.pathname,
    query: isNull(params.query) || isUndefined(params.query) ? {} : params.query
  };
};


let {pathname, query} = safeParams(LocationUtil.parseHref(LocationUtil.getUrl()));

const changeState = params => {
  pathname = params.pathname;
  query = params.query;
  LocationUtil.setUrl(url.format(params));
};


const Store = Object.assign({}, FluxCommonStore, {
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
      changeState(safeParams(payload));
      Store.emitChange();
      break;

    default:
    // empty
  }
});


export default Store;
