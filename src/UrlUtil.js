import url from 'url';


const parseHref = (href) => {
  const {pathname, query} = url.parse(href, true);
  return {pathname, query, href: url.format({pathname, query})};
};


const merge = (oldParams, newParams) => {
  if (newParams.href) {
    return parseHref(newParams.href);
  }
  const pathname = newParams.pathname || oldParams.pathname;
  const query = Object.assign({}, newParams.query || oldParams.query, newParams.partial);
  const href = url.format({pathname, query});
  return {pathname, query, href};
};


/**
 * Naive implementation
 * Just checks if url will be changed, if not, then this url is active.
 * TODO: Optimize speed by not rendering href to compare
 *
 * @param {Object} oldParams Effectively, current URL state
 * @param {Object} newParams What we will have if follow the link
 * @returns {boolean} isActive
 */
const isActive = (oldParams, newParams) => {
  const oldHref = url.format(oldParams);
  const {href} = merge(oldParams, newParams);
  return oldHref === href;
};


export default {parseHref, merge, isActive};
