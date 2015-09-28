import React from 'react';
import Store from './Store';
import * as Actions from './Actions';
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


  getInitialState() {
    return {
      query: Store.getQuery()
    };
  },


  componentDidMount() {
    this.unsubscribe = Store.subscribe(this.onChange);
    this.checkDefaultParam(this.props);
  },


  componentWillReceiveProps(props) {
    this.checkDefaultParam(props);
  },


  shouldComponentUpdate(newProps, {query = {}}) {
    const config = newProps.config || {};

    return !shallowEqual(newProps, this.props) || !shallowEqual(config,
        this.props.config) || !shallowEqual(query, this.state.query);
  },


  componentWillUnmount() {
    this.unsubscribe();
    Store.dispatch(Actions.removeParam({
      namespace: this.props.namespace}));
  },


  checkDefaultParam(props) {
    const {namespace, config: {[getDefault()]: value}} = props;
    const defaultParams = Store.getDefaultParams();

    if (value && (!defaultParams.hasOwnProperty(namespace) || defaultParams[namespace] !== value)) {
      Store.dispatch(Actions.addDefaultParam({namespace, value}));
    }
  },


  onChange() {
    this.setState({
      query: Store.getQuery()
    });
  },


  render() {
    const {namespace, config, ...props} = this.props;
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

        return <Child {...props} componentRouter={componentRouter} />;
      }

      // In case of non-empty children, we should pass Component from config
      return React.cloneElement(React.Children.only(this.props.children), {
        ...props,
        componentRouter: {...componentRouter, Component: config}
      });
    }

    const keys = Object.keys(config).filter(key => key !== getDefault());

    if (!React.Children.count(this.props.children)) {
      // React will render custom component only if it starts from capital letter
      const Child = value && config[value] || Empty;

      return <Child {...props} componentRouter={{...componentRouter, keys, config}} />;
    }

    const Component = value && config[value] || Empty;

    // For static values we can pass config, keys and try to find active component
    return React.cloneElement(React.Children.only(this.props.children), {
      ...props,
      componentRouter: {...componentRouter, keys, config, Component}
    });
  }
});


export default ComponentRouter;
