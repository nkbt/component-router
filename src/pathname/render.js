import {routePartsRegex} from './parse';


export const renderRoute = (route = '/') => (params = {}) => {
  const parts = route.match(routePartsRegex);

  if (!parts || !parts.length) {
    return '/';
  }

  return parts.reduce((pathname, part) => {
    if (part.substr(0, 1) !== ':') {
      return `${pathname}/${encodeURIComponent(part)}`;
    }

    const name = part.substr(1);

    if (process.env.NODE_ENV !== 'production') {
      require('fbjs/lib/invariant')(params.hasOwnProperty(name),
        `Param :${name} is not specified for route ${route}`);
    }

    return `${pathname}/${encodeURIComponent(params[name])}`;
  }, '');
};
