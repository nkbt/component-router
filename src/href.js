import {url} from './location';
import {changeParams} from './reducer';
import {store} from './store';
import shallowEqual from 'fbjs/lib/shallowEqual';


export const href = query => {
  const {pathname, cleanQuery, hash} = changeParams(store.getState(), {query});

  return url({pathname, query: cleanQuery, hash});
};


export const isActive = query =>
  shallowEqual(changeParams(store.getState(), {query}).cleanQuery, store.getState().cleanQuery);
