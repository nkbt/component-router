import sortedObject from './sortedObject';
import Constants from './Constants';
import urlUtil from './urlUtil';
import isNull from 'lodash.isnull';
import isUndefined from 'lodash.isundefined';
import shallowEqual from 'react/lib/shallowEqual';


const initialState = {
  query: {},
  defaultParams: {},
  type: Constants.TYPE_HTML5
};


const changeParams = ({defaultParams, query, type}, params) => {
  const newParams = urlUtil.merge({query}, params);
  const newQuery = sortedObject({...defaultParams, ...newParams.query});

  if (!shallowEqual(newQuery, query)) {
    return {
      type,
      defaultParams: {...defaultParams},
      query: {...newQuery}
    };
  }

  return {defaultParams, query, type};
};


const addDefaultParam = ({defaultParams, query, type}, {namespace, value}) => {
  const stringValue = `${value}`;

  if (!defaultParams.hasOwnProperty(namespace) || defaultParams[namespace] !== stringValue) {
    return {
      type,
      defaultParams: {...defaultParams, [namespace]: stringValue},
      query: sortedObject({...defaultParams, [namespace]: stringValue, ...query})
    };
  }

  return {defaultParams, query, type};
};


const removeParam = ({defaultParams, query, type}, {namespace}) => {
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

  return {defaultParams: defaultParamsCopy, query: newQuery, type};
};


const safeParams = ({query}) => {
  const newQuery = isNull(query) || isUndefined(query) ? {} : query;

  Object.keys(newQuery).forEach(key => newQuery[key] = `${newQuery[key]}`);

  return {
    query: newQuery
  };
};


const restoreLocation = ({defaultParams, query}, url, type = Constants.TYPE_HTML5) => {
  const {query: newQuery} = safeParams(urlUtil.parseHref(url));
  const updatedParams = changeParams({defaultParams, query, type}, {
    query: {...defaultParams, ...newQuery}
  });

  return {...updatedParams, type};
};


export default ({defaultParams, query, type} = {
  defaultParams: {...initialState.defaultParams},
  query: {...initialState.query},
  type: initialState.type
}, {actionType, payload}) => {
  switch (actionType) {
    case Constants.NAVIGATE_TO:
      return changeParams({defaultParams, query, type}, safeParams(payload));

    case Constants.ADD_DEFAULT_PARAM:
      return addDefaultParam({defaultParams, query, type}, payload);

    case Constants.REMOVE_PARAM:
      return removeParam({defaultParams, query, type}, payload);

    case Constants.RESTORE_LOCATION:
      return restoreLocation({defaultParams, query, type}, payload.location, payload.type);

    default:
      return {defaultParams, query, type};
  }
};
