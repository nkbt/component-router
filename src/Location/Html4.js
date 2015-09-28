import React from 'react';
import url from 'url';
import Constants from '../Constants';
import Store from '../Store';
import {restoreLocation} from '../Actions';


const Html4 = React.createClass({
  componentWillMount() {
    this.restoreUrl();
  },


  componentDidMount() {
    this.paramsUnsubscribe = Store.subscribe(this.onChange);
    window.addEventListener('hashchange', this.restoreUrl, false);
  },


  componentWillUnmount() {
    this.paramsUnsubscribe();
    window.removeEventListener('hashchange', this.restoreUrl);
  },


  restoreUrl() {
    Store.dispatch(restoreLocation({location: this.getUrl(), locationType: Constants.TYPE_HTML4}));
  },


  getUrl() {
    if (window.location.hash.substr(0, 2) !== '#?') {
      return '?';
    }
    const {query} = url.parse(window.location.hash.substr(1), true);

    return url.format({query});
  },


  setUrl(newUrl, state, title) {
    // If url is the same, we don't want to push it
    // This may happen after restoreUrl
    if (newUrl !== this.getUrl()) {
      window.history.pushState(
        state || {},
        title || window.document.title,
        url.format({hash: newUrl})
      );
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


export default Html4;
