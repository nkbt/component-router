import {url} from './location';
import {changeParams} from './reducer';
import {store} from './store';


export const href = query => {
  const {pathname, cleanQuery, hash} = changeParams(store.getState(), {query});

  return url({pathname, query: cleanQuery, hash});
};
