import FluxCommonStore from 'flux-common-store';
import Constants from './Constants';
import Dispatcher from './Dispatcher';
import LocationUtil from './LocationUtil';
import url from 'url';


let {query, hash, pathname} = url.parse(LocationUtil.getUrl());


const changeState = params => {
  pathname = typeof params.pathname === 'undefined' ? pathname : params.pathname;
  query = typeof params.query === 'undefined' ? query : params.query;
  hash = typeof params.hash === 'undefined' ? hash : params.hash;
  LocationUtil.setUrl(url.format({pathname, query, hash}));
};


const Store = Object.assign({}, FluxCommonStore, {
  getQuery() {
    return query;
  },
  getHash() {
    return hash;
  },
  getPathname() {
    return pathname;
  }
});


Store.dispatchToken = Dispatcher.register(({actionType, payload}) => {
  switch (actionType) {
    case Constants.NAVIGATE_TO:
      changeState(payload);
      Store.emitChange();
      break;

    default:
    // empty
  }
});


export default Store;
