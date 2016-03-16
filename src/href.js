import {url} from './location';
import {changeParams} from './reducer';
import {store} from './store';
import shallowEqual from 'fbjs/lib/shallowEqual';


export const href = ({pathname, query}) => {
  const {
    pathname: newPathname, cleanQuery, hash
  } = changeParams(store.getState(), {pathname, query});

  return url({pathname: newPathname, query: cleanQuery, hash});
};


export const isActive = ({pathname, query}) => {
  const {
    pathname: newPathname, cleanQuery
  } = changeParams(store.getState(), {pathname, query});


  return shallowEqual(cleanQuery, store.getState().cleanQuery) &&
    newPathname === store.getState().pathname;
};
