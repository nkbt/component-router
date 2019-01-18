import shallowEqual from './shallowEqual';
import {RESTORE_LOCATION} from './actions';
import {queryToSearch, searchToQuery} from './codec';


const isReplace = (prevQuery, nextQuery, offRecord) => {
  if (!offRecord.length) {
    return false;
  }
  const prevQueryOnRecord = {...prevQuery};
  const nextQueryOnRecord = {...nextQuery};

  offRecord.forEach(param => {
    delete prevQueryOnRecord[param];
    delete nextQueryOnRecord[param];
  });

  return shallowEqual(prevQueryOnRecord, nextQueryOnRecord);
};

export const location = (createHistory, type) => ({
  store, namespace = 'componentRouter', debounceTimeout = 50
}) => {
  const history = createHistory();
  const initialLocation = history.location;


  let prevQuery = searchToQuery(initialLocation.search);
  let prevPathname = initialLocation.pathname;
  const historyPush = () => {
    const state = store.getState()[namespace];

    if (shallowEqual(prevQuery, state.cleanQuery) && prevPathname === state.pathname) {
      return;
    }

    const nextLocation = {
      pathname: state.pathname,
      search: queryToSearch(state.cleanQuery),
      hash: state.hash
    };

    if (isReplace(prevQuery, state.cleanQuery, state.offRecordParams)) {
      history.replace(nextLocation);
    } else {
      history.push(nextLocation);
    }

    prevQuery = state.cleanQuery;
    prevPathname = state.pathname;
  };


  let timer;
  const historyPushDebounced = () => {
    clearTimeout(timer);
    timer = setTimeout(historyPush, debounceTimeout);
  };


  const maybeRestoreLocation = ({pathname, search, hash}) => {
    const state = store.getState()[namespace];
    const nextCleanQuery = searchToQuery(search);

    if (!shallowEqual(nextCleanQuery, state.cleanQuery)
      || pathname !== state.pathname || hash !== state.hash) {
      store.dispatch({
        type: RESTORE_LOCATION,
        pathname,
        query: nextCleanQuery,
        hash,
        locationType: type
      });
    }
  };


  maybeRestoreLocation(history.location);


  const historyUnsubscribe = history.listen(maybeRestoreLocation);
  const storeUnsubscribe = store.subscribe(historyPushDebounced);


  return () => {
    clearTimeout(timer);
    timer = null;
    historyUnsubscribe();
    storeUnsubscribe();
  };
};
