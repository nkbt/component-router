import Constants from './Constants';


export default {
  navigateTo({pathname, query}) {
    return {
      actionType: Constants.NAVIGATE_TO,
      payload: {pathname, query}
    };
  },

  addDefaultParam({namespace, value}) {
    return {
      actionType: Constants.ADD_DEFAULT_PARAM,
      payload: {namespace, value}
    };
  },

  removeParam({namespace}) {
    return {
      actionType: Constants.REMOVE_PARAM,
      payload: {namespace}
    };
  },

  restoreLocation({location, type}) {
    return {
      actionType: Constants.RESTORE_LOCATION,
      payload: {location, type}
    };
  }
};
