import createHistory from 'history/lib/createBrowserHistory';
import shallowEqual from 'fbjs/lib/shallowEqual';
import {restoreLocation} from './actions';
import Constants from './Constants';
import {format} from 'url';

const updated = callback => {
  let lastQuery;

  return ({pathname, query, hash}) => {
    if (shallowEqual(lastQuery, query)) {
      return;
    }

    lastQuery = query;
    callback(format({pathname, query, hash}));
  };
};


const push = history => updated(url => history.pushState({}, url));


export const locationHistory = store => {
  const history = createHistory();
  const historyPush = push(history);
  let currentPathname;
  let currentHash;

  const historyUnsubscribe = history.listen(({pathname, search, hash}) => {
    currentPathname = pathname;
    currentHash = hash;
    store.dispatch(restoreLocation(search, Constants.LOCATION_HISTORY));
  });

  const storeUnsubscribe = store.subscribe(() => historyPush({
    pathname: currentPathname,
    query: store.getState().cleanQuery,
    hash: currentHash
  }));

  return () => {
    historyUnsubscribe();
    storeUnsubscribe();
  };
};
