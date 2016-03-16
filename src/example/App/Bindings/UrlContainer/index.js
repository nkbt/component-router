import React from 'react';
import {actions, store, href, isActive} from '../../../..';


const UrlContainer = React.createClass({
  propTypes: {
    children: React.PropTypes.func.isRequired,
    query: React.PropTypes.object,
    pathname: React.PropTypes.string
  },


  getInitialState() {
    return store.getState();
  },


  componentDidMount() {
    this.unsubscribe = store.subscribe(this.onChange);
  },


  componentWillUnmount() {
    this.unsubscribe();
  },


  isLMB(event) {
    const {button, metaKey, shiftKey, ctrlKey, altKey} = event;

    return button === 0 && !metaKey && !shiftKey && !ctrlKey && !altKey;
  },


  onClick({query, pathname}) {
    return event => {
      // React only on normal left-button clicks
      if (this.isLMB(event)) {
        event.preventDefault();
        store.dispatch(actions.navigateTo({query, pathname}));
      }
    };
  },


  onChange() {
    this.replaceState(store.getState());
  },


  render() {
    const {children: render, query, pathname} = this.props;

    return render({
      href: href({query, pathname}),
      onClick: this.onClick({query, pathname}),
      'data-active': isActive({query, pathname})
    });
  }
});


export default UrlContainer;