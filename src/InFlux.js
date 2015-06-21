import React from 'react';
import Config from './Config';
import Url from './Url';
import ActionCreator from './ActionCreator';
import Store from './Store';
import Constants from './Constants';


/**
 * @returns {undefined} default routing value (undefined)
 */
const getDefault = () => '__DEFAULT__';


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


  getChildProps: function () {
    const {namespace} = this.props;
    const config = this.props.config[namespace];
    const Default = config[getDefault()] || Empty;

    return {
      inFlux: {
        keys: Object.keys(config).filter(key => key !== getDefault()),
        config,
        namespace,
        Component: this.state.query[namespace] && config[this.state.query[namespace]]
        || Default
      }
    };
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
    return React.cloneElement(React.Children.only(this.props.children), this.getChildProps());
  }
});

export default {
  InFlux,
  Empty,
  Config,
  Url,
  ActionCreator,
  Store,
  Constants,
  getDefault
};
