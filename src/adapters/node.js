import {restoreLocation, addRoute} from '../actions';


export const locationNode = ({store, routes}) => ({url}) => {
  const [pathname, search = ''] = url.split('?');

  store.dispatch(restoreLocation({
    pathname,
    search: search.length > 0 ? `?${search}` : ''
  }));

  routes.forEach(route => store.dispatch(addRoute(route)));
};
