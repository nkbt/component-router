import React from 'react';
import classnames from 'classnames';
import Constants from './Constants';
import Store from './Store';
import * as Actions from './Actions';
import urlUtil from './urlUtil';
import shallowEqual from 'react/lib/shallowEqual';


const Url = React.createClass({
  propTypes: {
    query: React.PropTypes.object,
    children: React.PropTypes.node,
    isActiveClass: React.PropTypes.string,
    className: React.PropTypes.string
  },


  getDefaultProps() {
    return {
      query: {},
      isActiveClass: 'active',
      className: ''
    };
  },


  getInitialState() {
    return Store.getQuery();
  },


  componentDidMount() {
    this.unsubscribe = Store.subscribe(this.onChange);
  },


  shouldComponentUpdate(newProps, newState) {
    return !shallowEqual(newProps, this.props) || !shallowEqual(newState,
        this.state) || !shallowEqual(newProps.query, this.props.query);
  },


  componentWillUnmount() {
    this.unsubscribe();
  },


  onClick(event) {
    event.preventDefault();
    Store.dispatch(Actions.navigateTo(this.props));
  },


  onChange() {
    this.replaceState(Store.getQuery());
  },


  render() {
    const {query, isActiveClass, ...props} = this.props;
    const {href} = urlUtil.merge({query: this.state}, {query});
    const isActive = urlUtil.isActive({query: this.state}, {query});
    const linkClasses = classnames(this.props.className, {
      [isActiveClass]: isActive
    });
    const type = Store.getType();

    return (
      <a {...props}
        href={type === Constants.TYPE_HTML4 ? `#${href}` : href}
        onClick={this.onClick}
        className={linkClasses} />
    );
  }
});


export default Url;
