import qs from 'qs';


const {parse, stringify} = qs;


export const safeQuery = (query = {}) => {
  const newQuery = query === null ? {} : query;

  Object.keys(newQuery).forEach(key => {
    newQuery[key] = `${newQuery[key]}`;
  });

  return newQuery;
};


export const queryToSearch = query => {
  const search = stringify({...query}, {strictNullHandling: true});

  return search.length > 0 ? `?${search}` : '';
};


export const searchToQuery = search => safeQuery(
  parse(search.substr(1), {strictNullHandling: true})
);
