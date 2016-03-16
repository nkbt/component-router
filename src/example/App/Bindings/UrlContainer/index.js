import React from 'react';
import {actions, store, href, isActive} from '../../../..';


const UrlContainer = React.createClass({
  propTypes: {
    children: React.PropTypes.func.isRequired
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


  onClick(props) {
    return event => {
      // React only on normal left-button clicks
      if (this.isLMB(event)) {
        event.preventDefault();
        store.dispatch(actions.navigateTo(props));
      }
    };
  },


  onChange() {
    this.replaceState(store.getState());
  },


  render() {
    const {children: render, ...props} = this.props;

    return render({
      href: href(props),
      onClick: this.onClick(props),
      'data-active': isActive(props)
    });
  }
});


export default UrlContainer;