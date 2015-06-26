import React from 'react';
import classnames from 'classnames';
import Store from './Store';
import ActionCreator from './ActionCreator';
import UrlUtil from './UrlUtil';


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
      pathname: Store.getPathname(),
      defaultParams: Store.getDefaultParams()
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
    const {pathname, query} = UrlUtil.merge(oldParams, newParams);
    ActionCreator.navigateTo({pathname, query});
  },


  onChange() {
    this.setState({
      query: Store.getQuery(),
      pathname: Store.getPathname(),
      defaultParams: Store.getDefaultParams()
    });
  },


  render() {
    const oldParams = this.state;
    const newParams = this.props;
    const {href} = UrlUtil.merge(oldParams, newParams);
    const isActive = UrlUtil.isActive(oldParams, newParams);
    const linkClasses = classnames(this.props.className, {
      [this.props.isActiveClass]: isActive
    });
    return <a {...this.props} href={href} onClick={this.onClick} className={linkClasses} />;
  }
});


export default Url;
