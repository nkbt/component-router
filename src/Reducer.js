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


const changeParams = (state, params) => {
  const newParams = urlUtil.merge({
    query: state.query
  }, params);
  const newQuery = sortedObject({...state.defaultParams, ...newParams.query});
  const newState = {...state};

  if (!shallowEqual(newQuery, newState.query)) {
    newState.query = newQuery;
  }

  return newState;
};

const addDefaultParam = (state, {namespace, value}) => {
  const stringValue = `${value}`;
  const newState = {...state};

  if (!newState.defaultParams.hasOwnProperty(namespace) ||
    newState.defaultParams[namespace] !== stringValue) {
    newState.defaultParams[namespace] = stringValue;
    newState.query = sortedObject({...newState.defaultParams, ...newState.query});
  }

  return newState;
};

const removeParam = (state, {namespace}) => {
  const newState = {...state};

  if (newState.defaultParams.hasOwnProperty(namespace)) {
    delete newState.defaultParams[namespace];
  }

  if (newState.query.hasOwnProperty(namespace)) {
    delete newState.query[namespace];
    newState.query = sortedObject(newState.query);
  }

  return newState;
};

const safeParams = params => {
  const newQuery = isNull(params.query) || isUndefined(params.query) ? {} : params.query;

  Object.keys(newQuery).forEach(key => newQuery[key] = `${newQuery[key]}`);

  return {
    query: newQuery
  };
};

const restoreLocation = (state, url, type = Constants.TYPE_HTML5) => {
  const {query: newQuery} = safeParams(urlUtil.parseHref(url));
  const updatedParams = changeParams(state, {
    query: {...state.defaultParams, ...newQuery}
  });

  return {...updatedParams, type};
};

export default (state = initialState, {actionType, payload}) => {
  switch (actionType) {
    case Constants.NAVIGATE_TO:
      return changeParams(state, safeParams(payload));

    case Constants.ADD_DEFAULT_PARAM:
      return addDefaultParam(state, payload);

    case Constants.REMOVE_PARAM:
      return removeParam(state, payload);

    case Constants.RESTORE_LOCATION:
      return restoreLocation(state, payload.location, payload.type);

    default:
      return state;
  }
};
