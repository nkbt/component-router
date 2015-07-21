import React from 'react';
import Store from './Store';
import ActionCreator from './ActionCreator';
import isFunction from 'lodash.isfunction';
import getDefault from './getDefault';
import shallowEqual from 'react/lib/shallowEqual';


const Empty = React.createClass({
  render() {
    return false;
  }
});


const ComponentRouter = React.createClass({
  propTypes: {
    config: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.func]).isRequired,
    children: React.PropTypes.node,
    namespace: React.PropTypes.string.isRequired
  },


  shouldComponentUpdate(newProps, {query = {}}) {
    const config = newProps.config || {};

    return !shallowEqual(newProps, this.props) ||
      !shallowEqual(config, this.props.config) ||
      !shallowEqual(query, this.state.query);
  },


  getInitialState() {
    return {
      query: Store.getQuery()
    };
  },


  componentWillReceiveProps(props) {
    this.checkDefaultParam(props);
  },


  componentDidMount() {
    this.unsubscribe = Store.addThrottledChangeListener(this.onChange, 50);
    this.checkDefaultParam(this.props);
  },


  componentWillUnmount() {
    this.unsubscribe();
    setTimeout(() => ActionCreator.removeParam({namespace: this.props.namespace}), 0);
  },


  checkDefaultParam(props) {
    const {namespace, config: {[getDefault()]: value}} = props;
    const defaultParams = Store.getDefaultParams();

    if (value && (!defaultParams.hasOwnProperty(namespace) || defaultParams[namespace] !== value)) {
      setTimeout(() => ActionCreator.addDefaultParam({namespace, value}), 0);
    }
  },


  onChange() {
    this.setState({
      query: Store.getQuery()
    });
  },


  render() {
    const {namespace} = this.props;
    const config = this.props.config;
    const value = namespace in this.state.query ?
      this.state.query[namespace] : config[getDefault()];

    const componentRouter = {
      namespace,
      value,
      keys: [],
      config: {},
      Component: Empty
    };

    // For dynamic values we pass a whole component instead of map of components,
    // so it will effectively have `namespace` only
    if (isFunction(config)) {
      if (!React.Children.count(this.props.children)) {
        // React will render custom component only if it starts from capital letter
        const Child = config;

        return <Child componentRouter={Object.assign(componentRouter, {Component: Empty})} />;
      }

      // In case of non-empty children, we should pass Component from config
      return React.cloneElement(React.Children.only(this.props.children),
        {componentRouter: Object.assign(componentRouter, {Component: config})});
    }


    // For static values we can pass config, keys and try to find active component
    return React.cloneElement(React.Children.only(this.props.children), {
      componentRouter: Object.assign(componentRouter, {
        keys: Object.keys(config).filter(key => key !== getDefault()),
        config,
        Component: value && config[value] || Empty
      })
    });
  }
});


export default ComponentRouter;
