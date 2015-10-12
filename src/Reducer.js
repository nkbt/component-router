import sortedObject from './sortedObject';
import Constants from './Constants';
import urlUtil from './urlUtil';
import isNull from 'lodash.isnull';
import isUndefined from 'lodash.isundefined';
import shallowEqual from 'fbjs/lib/shallowEqual';


const initialState = {
  query: {},
  defaultParams: {},
  locationType: Constants.TYPE_HTML5
};


const changeParams = ({defaultParams, query, locationType}, params) => {
  const newParams = urlUtil.merge({query}, params);
  const newQuery = sortedObject({...defaultParams, ...newParams.query});

  if (!shallowEqual(newQuery, query)) {
    return {
      locationType,
      defaultParams: {...defaultParams},
      query: {...newQuery}
    };
  }

  return {defaultParams, query, locationType};
};


const addDefaultParam = ({defaultParams, query, locationType}, {namespace, value}) => {
  const stringValue = `${value}`;

  if (!defaultParams.hasOwnProperty(namespace) || defaultParams[namespace] !== stringValue) {
    return {
      locationType,
      defaultParams: {...defaultParams, [namespace]: stringValue},
      query: sortedObject({...defaultParams, [namespace]: stringValue, ...query})
    };
  }

  return {defaultParams, query, locationType};
};


const removeParam = ({defaultParams, query, locationType}, {namespace}) => {
  const defaultParamsCopy = {...defaultParams};

  if (defaultParamsCopy.hasOwnProperty(namespace)) {
    delete defaultParamsCopy[namespace];
  }

  const queryCopy = {...query};
  let newQuery;

  if (queryCopy.hasOwnProperty(namespace)) {
    delete queryCopy[namespace];
    newQuery = sortedObject({...queryCopy});
  } else {
    newQuery = {...queryCopy};
  }

  return {defaultParams: defaultParamsCopy, query: newQuery, locationType};
};


const safeParams = ({query}) => {
  const newQuery = isNull(query) || isUndefined(query) ? {} : query;

  Object.keys(newQuery).forEach(key => newQuery[key] = `${newQuery[key]}`);

  return {
    query: newQuery
  };
};


const restoreLocation = ({defaultParams, query}, url, locationType = Constants.TYPE_HTML5) => {
  const {query: newQuery} = safeParams(urlUtil.parseHref(url));
  const updatedParams = changeParams({defaultParams, query, locationType}, {
    query: {...defaultParams, ...newQuery}
  });

  return {...updatedParams, locationType};
};


export default ({defaultParams, query, locationType} = {
  defaultParams: {...initialState.defaultParams},
  query: {...initialState.query},
  locationType: initialState.locationType
}, {type, payload}) => {
  switch (type) {
    case Constants.NAVIGATE_TO:
      return changeParams({defaultParams, query, locationType}, safeParams(payload));

    case Constants.ADD_DEFAULT_PARAM:
      return addDefaultParam({defaultParams, query, locationType}, payload);

    case Constants.REMOVE_PARAM:
      return removeParam({defaultParams, query, locationType}, payload);

    case Constants.RESTORE_LOCATION:
      return restoreLocation({defaultParams, query, locationType},
        payload.location, payload.locationType);

    default:
      return {defaultParams, query, locationType};
  }
};
