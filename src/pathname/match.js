export const emptyRoute = {route: null, regex: null, params: {}};


export const matchRoute = routes => (pathname = '') => {
  let matchedRoute = emptyRoute;

  Object.keys(routes).some(r => {
    const match = pathname.match(new RegExp(routes[r].regex));

    if (!match) {
      return false;
    }

    matchedRoute = {
      ...routes[r],
      params: Object.keys(routes[r].params)
        .reduce((params, param, i) =>
          ({...params, [param]: decodeURIComponent(match[i + 1])}), {})

    };
    return true;
  });

  return matchedRoute;
};
