import React from 'react';
import {actions, store} from '../../..';


export default ({namespace, notFound, defaultValue}) => handlers => React.createClass({
  propTypes: {
    params: React.PropTypes.object.isRequired
  },


  componentWillMount() {
  },


  componentDidMount() {
    if (defaultValue) {
      store.dispatch(actions.addDefaultParam(namespace, defaultValue));
    }
  },


  componentWillUnmount() {
    if (defaultValue) {
      store.dispatch(actions.removeParam(namespace));
    }
  },


  render() {
    const {params, ...props} = this.props;
    const currentValue = params[namespace];

    if (currentValue === undefined || !handlers.hasOwnProperty(currentValue)) {
      return notFound ? React.createElement(notFound) : null;
    }

    return React.createElement(handlers[currentValue], {...props});
  }
});