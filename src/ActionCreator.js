import Constants from './Constants';
import Dispatcher from './Dispatcher';


export default {
  navigateTo({pathname, query}) {
    Dispatcher.dispatch({
      actionType: Constants.NAVIGATE_TO,
      payload: {pathname, query}
    });
  },


  addDefaultParam({namespace, value}) {
    Dispatcher.dispatch({
      actionType: Constants.ADD_DEFAULT_PARAM,
      payload: {namespace, value}
    });
  },


  removeParam({namespace}) {
    Dispatcher.dispatch({
      actionType: Constants.REMOVE_PARAM,
      payload: {namespace}
    });
  },


  restoreLocation({location, type}) {
    Dispatcher.dispatch({
      actionType: Constants.RESTORE_LOCATION,
      payload: {location, type}
    });
  }
};
