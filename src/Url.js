import React from 'react';
import Store from './Store';
import ActionCreator from './ActionCreator';
import LocationUtil from './LocationUtil';


const Url = React.createClass({
  propTypes: {
    href: React.PropTypes.string,
    pathname: React.PropTypes.string,
    query: React.PropTypes.object,
    partial: React.PropTypes.object,
    children: React.PropTypes.node
  },

  getDefaultProps() {
    return {
      partial: {}
    };
  },


  getInitialState() {
    return {
      query: Store.getQuery(),
      pathname: Store.getPathname()
    };
  },


  componentDidMount() {
    this.unsubscribe = Store.addChangeListener(this.onChange);
  },


  componentWillUnmount() {
    this.unsubscribe();
  },


  onClick(event) {
    event.preventDefault();
    const oldParams = this.state;
    const newParams = this.props;
    const {pathname, query} = LocationUtil.merge(oldParams, newParams);
    ActionCreator.navigateTo({pathname, query});
  },


  onChange() {
    this.setState({
      query: Store.getQuery(),
      pathname: Store.getPathname()
    });
  },


  render() {
    const oldParams = this.state;
    const newParams = this.props;
    const {href} = LocationUtil.merge(oldParams, newParams);
    return <a {...this.props} href={href} onClick={this.onClick} />;
  }
});


export default Url;
