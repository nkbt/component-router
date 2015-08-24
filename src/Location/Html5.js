import React from 'react';
import url from 'url';
import Store from '../Store';
import ActionCreator from '../ActionCreator';


const Html5 = React.createClass({
  componentWillMount() {
    this.restoreUrl();
  },


  componentDidMount() {
    this.paramsUnsubscribe = Store.addThrottledChangeListener(this.onChange, 50);
    window.addEventListener('popstate', this.restoreUrl);
  },


  componentWillUnmount() {
    this.paramsUnsubscribe();
    window.removeEventListener('popstate', this.restoreUrl);
  },


  restoreUrl() {
    Store.dispatch(ActionCreator.restoreLocation({location: this.getUrl(), type: Store.TYPE_HTML5}));
  },


  getUrl() {
    return [window.location.pathname, window.location.search].join('');
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
      query: Store.getCleanQuery(),
      pathname: Store.getPathname()
    }));
  },


  render() {
    return false;
  }
});


export default Html5;
