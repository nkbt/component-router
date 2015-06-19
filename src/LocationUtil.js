import url from 'url';


const getUrl = () => window.location.href;


const setUrl = (newUrl, state, title) => window.history.replaceState(
  state || {},
  title || window.document.title,
  newUrl);


const parseHref = (href) => {
  const {pathname, query} = url.parse(href);
  return {pathname, query, href};
};


const merge = (oldParams, newParams) => {
  if (newParams.href) {
    return parseHref(newParams.href);
  }
  const {pathname} = newParams;
  const query = Object.assign({}, newParams.query || oldParams.query, newParams.partial);
  const href = url.format({pathname, query});
  return {pathname, query, href};
};


export default {getUrl, setUrl, merge};
