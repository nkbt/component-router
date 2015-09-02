import url from 'url';
import sortedObject from './sortedObject';


const parseHref = (href) => {
  const {query} = url.parse(href, true);

  return {query, href: url.format({query})};
};


const merge = (oldParams, newParams) => {
  const query = sortedObject({...oldParams.query, ...newParams.query});
  const href = url.format({query});

  return {query, href};
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
