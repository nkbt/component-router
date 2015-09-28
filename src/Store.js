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


  addChangeListener(...args) {
    return this.subscribe(...args);
  }
};

export default Store;
