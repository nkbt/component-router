import shallowEqual from 'fbjs/lib/shallowEqual';
import {restoreLocation} from './actions';
import {stringify} from 'qs/dist/qs';
import {store} from './store';


export const url = ({pathname, query, hash}) => {
  const qs = stringify(query, {strictNullHandling: true});
  const search = qs.length > 0 ? `?${qs}` : '';

  return [pathname, search, hash].join('');
};


const updated = callback => {
  let lastQuery;

  return ({pathname, query, hash}) => {
    if (shallowEqual(lastQuery, query)) {
      return;
    }

    lastQuery = query;
    callback(url({pathname, query, hash}));
  };
};


const push = history => updated(href => history.pushState({}, href));


export const location = (createHistory, type) => () => {
  const history = createHistory();
  const historyPush = push(history);

  const historyUnsubscribe = history.listen(({pathname, search, hash}) => {
    store.dispatch(restoreLocation({pathname, search, hash}, type));
  });

  const storeUnsubscribe = store.subscribe(() => historyPush({
    pathname: store.getState().pathname,
    query: store.getState().cleanQuery,
    hash: store.getState().hash
  }));

  return () => {
    historyUnsubscribe();
    storeUnsubscribe();
  };
};
