import React from 'react';
import {actions, store} from '../../..';


export const NOT_FOUND = '__NOT_FOUND__';
export const routeHandler = namespace => handlers => React.createClass({
  propTypes: {
    defaultValue: React.PropTypes.string,
    [namespace]: React.PropTypes.string
  },


  componentWillMount() {
  },


  componentDidMount() {
    if (this.props.defaultValue) {
      store.dispatch(actions.addDefaultParam(namespace, this.props.defaultValue));
    }
  },


  componentWillUnmount() {
    if (this.props.defaultValue) {
      store.dispatch(actions.removeParam(namespace));
    }
  },


  render() {
    const {defaultValue, ...props} = this.props;
    const currentValue = props[namespace] === undefined ? defaultValue : props[namespace];

    if (currentValue === undefined || !handlers.hasOwnProperty(currentValue)) {
      return handlers[NOT_FOUND] ? React.createElement(handlers[NOT_FOUND]) : null;
    }

    return React.createElement(handlers[currentValue], {...props, [namespace]: currentValue});
  }
});