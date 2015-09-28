import React from 'react';
import url from 'url';
import Constants from '../Constants';
import Store from '../Store';
import {restoreLocation} from '../ActionCreator';


const Html5 = React.createClass({
  componentWillMount() {
    this.restoreUrl();
  },


  componentDidMount() {
    this.paramsUnsubscribe = Store.subscribe(this.onChange);
    window.addEventListener('popstate', this.restoreUrl);
  },


  componentWillUnmount() {
    this.paramsUnsubscribe();
    window.removeEventListener('popstate', this.restoreUrl);
  },


  restoreUrl() {
    Store.dispatch(restoreLocation({location: this.getUrl(), locationType: Constants.TYPE_HTML5}));
  },


  getUrl() {
    return window.location.search;
  },


  setUrl(newUrl, state, title) {
    // If url is the same, we don't want to push it
    // This may happen after restoreUrl
    if (newUrl !== this.getUrl()) {
      window.history.pushState(
        state || {},
        title || window.document.title,
        newUrl);
    }
  },


  onChange() {
    this.setUrl(url.format({
      query: Store.getCleanQuery()
    }));
  },


  render() {
    return false;
  }
});


export default Html5;
