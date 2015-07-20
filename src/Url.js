import React from 'react';
import classnames from 'classnames';
import Store from './Store';
import ActionCreator from './ActionCreator';
import urlUtil from './urlUtil';
import shallowEqual from 'react/lib/shallowEqual';


const Url = React.createClass({
  propTypes: {
    pathname: React.PropTypes.string,
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
    return {
      query: Store.getQuery(),
      pathname: Store.getPathname()
    };
  },


  shouldComponentUpdate(newProps, newState) {
    return !shallowEqual(newProps, this.props) || !shallowEqual(newState,
        this.state) || !shallowEqual(newProps.query,
        this.props.query) || !shallowEqual(newState.query, this.state.query);
  },


  componentDidMount() {
    this.unsubscribe = Store.addThrottledChangeListener(this.onChange, 50);
  },


  componentWillUnmount() {
    this.unsubscribe();
  },


  onClick(event) {
    event.preventDefault();
    ActionCreator.navigateTo(this.props);
  },


  onChange() {
    this.setState({
      query: Store.getQuery(),
      pathname: Store.getPathname()
    });
  },


  render() {
    const oldParams = this.state;
    const {query, pathname, isActiveClass, ...props} = this.props;
    const {href} = urlUtil.merge(oldParams, {query, pathname});
    const isActive = urlUtil.isActive(oldParams, {query, pathname});
    const linkClasses = classnames(this.props.className, {
      [isActiveClass]: isActive
    });

    return <a {...props} href={href} onClick={this.onClick} className={linkClasses} />;
  }
});


export default Url;
