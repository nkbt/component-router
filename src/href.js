import {url} from './location';
import {changeParams} from './reducer';
import {store} from './store';
import shallowEqual from 'fbjs/lib/shallowEqual';


export const href = ({pathname, query}) => {
  const {pathname: newPathname, cleanQuery, hash} = changeParams(store.getState(),
    {pathname, query});

  return url({pathname: newPathname, query: cleanQuery, hash});
};


export const isActive = query =>
  shallowEqual(changeParams(store.getState(), {query}).cleanQuery, store.getState().cleanQuery);
