import {RESTORE_LOCATION, ADD_ROUTE} from '../actions';
import {searchToQuery} from '../codec';


export const locationNode = ({store, routes}) => ({url}) => {
  const [pathname, search = ''] = url.split('?');
  const query = searchToQuery(`?${search}`);
  store.dispatch({type: RESTORE_LOCATION, pathname, query});
  routes.forEach(route => store.dispatch({type: ADD_ROUTE, route}));
};
