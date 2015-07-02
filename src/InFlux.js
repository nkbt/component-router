import React from 'react';
import Store from './Store';
import ActionCreator from './ActionCreator';
import isFunction from 'lodash/lang/isFunction';
import getDefault from './getDefault';


const Empty = React.createClass({
  render() {
    return false;
  }
});


const InFlux = React.createClass({
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


  componentWillMount() {
    this.checkDefaultParam(this.props);
  },


  componentWillReceiveProps(props) {
    this.checkDefaultParam(props);
  },


  componentDidMount() {
    this.unsubscribe = Store.addChangeListener(this.onChange);
  },


  componentWillUnmount() {
    ActionCreator.removeParam({namespace: this.props.namespace});
    this.unsubscribe();
  },


  checkDefaultParam(props) {
    const {namespace, config: {[getDefault()]: value}} = props;

    if (value) {
      ActionCreator.addDefaultParam({namespace, value});
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

    const inFlux = {
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
        Component: value && config[value] || Empty
      })
    });
  }
});


export default InFlux;
