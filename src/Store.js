import throttle from 'lodash.throttle';
import sortedObject from './sortedObject';
import {createStore} from 'redux';
import reducer from './Reducer';


const Store = {
  ...createStore(reducer),


  getDefaultParams() {
    return this.getState().defaultParams;
  },


  getCleanQuery() {
    const cleanQuery = {...this.getState().query};

    Object.keys(this.getDefaultParams()).forEach(key => {
      if (cleanQuery[key] === this.getDefaultParams()[key]) {
        delete cleanQuery[key];
      }
    });
    return sortedObject(cleanQuery);
  },


  getQuery() {
    return this.getState().query;
  },


  getType() {
    return this.getState().type;
  },


  addThrottledChangeListener(callback, timeout = 200, options = {leading: false, trailing: true}) {
    const throttledCallback = throttle(callback, timeout, options);
    const unsubscribe = this.subscribe(throttledCallback);

    return () => {
      unsubscribe();
      throttledCallback.cancel();
    };
  },


  addChangeListener(...args) {
    return this.subscribe(...args);
  }
};

export default Store;
