import React from 'react';
import Store from './Store';
import isFunction from 'lodash/lang/isFunction';
import getDefault from './getDefault';


const Empty = React.createClass({
  render() {
    return false;
  }
});


const InFlux = React.createClass({
  propTypes: {
    config: React.PropTypes.object.isRequired,
    namespace: React.PropTypes.string.isRequired
  },


  getInitialState() {
    return {
      query: Store.getQuery()
    };
  },


  componentDidMount() {
    this.unsubscribe = Store.addChangeListener(this.onChange);
  },


  componentWillUnmount() {
    this.unsubscribe();
  },


  onChange() {
    this.setState({
      query: Store.getQuery()
    });
  },


  render() {
    const {namespace} = this.props;
    const config = this.props.config[namespace];

    const inFlux = {
      namespace,
      keys: [],
      config: {},
      value: this.state.query[namespace],
      Component: Empty
    };

    // For dynamic values we pass a whole component instead of map of components,
    // so it will effectively have `namespace` only
    if (isFunction(config)) {
      if (!React.Children.count(this.props.children)) {
        // React will render custom component only if it starts from capital letter
        const Child = config;
        return <Child inFlux={Object.assign(inFlux, {Component: Empty})} />;
      }

      // In case of non-empty children, we should pass Component from config
      return React.cloneElement(React.Children.only(this.props.children),
        {inFlux: Object.assign(inFlux, {Component: config})});
    }


    // For static values we can pass config, keys and try to find active component
    return React.cloneElement(React.Children.only(this.props.children), {
      inFlux: Object.assign(inFlux, {
        keys: Object.keys(config).filter(key => key !== getDefault()),
        config,
        Component: this.state.query[namespace] && config[this.state.query[namespace]]
        || config[getDefault()] || Empty
      })
    });
  }
});


export default InFlux;
