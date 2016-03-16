export const routePartsRegex = /(:?[^/]+)/ig;


export const defaultRoute = {route: '/', regex: '^/$', params: {}};


const escapeRegExp = string => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');


export const parseRoute = (route = '/') => {
  const parts = route.match(routePartsRegex);

  if (!parts) {
    return defaultRoute;
  }

  const parsedRoute = parts.reduce(({regex, params}, part) => {
    if (part.substr(0, 1) === ':') {
      return {
        regex: regex.concat('/([^/]+)'),
        params: {...params, [part.substr(1)]: null}
      };
    }

    return {
      regex: regex.concat(escapeRegExp(`/${part}`)),
      params
    };
  }, {regex: '', params: {}});

  return {
    route,
    regex: `^${parsedRoute.regex}$`,
    params: parsedRoute.params
  };
};
