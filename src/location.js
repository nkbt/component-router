import shallowEqual from 'fbjs/lib/shallowEqual';
import {restoreLocation} from './actions';
import {stringify} from 'qs';
import {store} from './store';


const queryToSearch = query => {
  const qs = stringify(query, {strictNullHandling: true});

  return qs.length > 0 ? `?${qs}` : '';
};


export const url = ({pathname, query, hash}) =>
  [pathname, queryToSearch(query), hash].join('');


const updated = callback => {
  let lastQuery;

  return ({pathname, query, hash}) => {
    if (shallowEqual(lastQuery, query)) {
      return;
    }

    lastQuery = query;
    callback({pathname, search: queryToSearch(query), hash});
  };
};


const push = history => updated(href => history.push({}, href));


export const location = (createHistory, type) => () => {
  const history = createHistory();
  const historyPush = push(history);
  let timer;

  const batchedHistoryPush = (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => historyPush(...args), 0);
  };

  const historyUnsubscribe = history.listen(({pathname, search, hash}) =>
    store.dispatch(restoreLocation({pathname, search, hash}, type)));

  const storeUnsubscribe = store.subscribe(() => batchedHistoryPush({
    pathname: store.getState().pathname,
    query: store.getState().cleanQuery,
    hash: store.getState().hash
  }));

  return () => {
    historyUnsubscribe();
    storeUnsubscribe();
  };
};
