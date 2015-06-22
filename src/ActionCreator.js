import Constants from './Constants';
import Dispatcher from './Dispatcher';


export default {
  navigateTo({pathname, query, hash}) {
    Dispatcher.dispatch({
      actionType: Constants.NAVIGATE_TO,
      payload: {pathname, query, hash}
    });
  },


  restoreLocation({location}) {
    Dispatcher.dispatch({
      actionType: Constants.RESTORE_LOCATION,
      payload: {location}
    });
  }
};
