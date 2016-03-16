import React from 'react';
import {actions, store} from '../../..';


export default ({notFound}) => handlers => React.createClass({
  propTypes: {
    route: React.PropTypes.string.isRequired,
    params: React.PropTypes.object.isRequired
  },


  componentWillMount() {
  },


  componentDidMount() {
    Object.keys(handlers).forEach(route =>
      store.dispatch(actions.addRoute(route)));
  },


  componentWillUnmount() {
    Object.keys(handlers).forEach(route =>
      store.dispatch(actions.removeRoute(route)));
  },


  render() {
    const {route, params, ...props} = this.props;
    const currentValue = route;

    if (currentValue === undefined || !handlers.hasOwnProperty(currentValue)) {
      return notFound ? React.createElement(notFound) : null;
    }

    return React.createElement(handlers[currentValue], {...params, ...props});
  }
});