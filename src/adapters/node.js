import {restoreLocation, addRoute} from '../actions';
import {searchToQuery} from '../codec';


export const locationNode = ({store, routes}) => ({url}) => {
  const [pathname, search = ''] = url.split('?');
  const query = searchToQuery(`?${search}`);

  store.dispatch(restoreLocation({pathname, query}));

  routes.forEach(route => store.dispatch(addRoute(route)));
};
