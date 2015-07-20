import React from 'react';
import {ComponentRouter, Url} from '../..';
import styles from './DynamicList.css';


const Items = React.createClass({
  propTypes: {
    componentRouter: React.PropTypes.object,
    values: React.PropTypes.arrayOf(React.PropTypes.number)
  },

  getDefaultProps() {
    return {
      values: [1, 2, 3]
    };
  },


  render() {
    const {namespace, value} = this.props.componentRouter;

    const isActive = id => <b>{id === parseInt(value, 10) ? '(Active)' : ''}</b>;

    const item = id => (
      <p key={id}>
        <Url query={{[namespace]: id}}>{id} {isActive(id)}</Url>
      </p>
    );

    return (
      <div>
        {this.props.values.map(item)}
      </div>
    );
  }
});


const DynamicListContainer = React.createClass({
  propTypes: {
    componentRouter: React.PropTypes.object,
    values: React.PropTypes.arrayOf(React.PropTypes.number).isRequired
  },


  render() {
    const {Component} = this.props.componentRouter;

    return (
      <div>
        <div className={styles.container}>
          <h3>List Container</h3>
          <Component {...this.props} values={this.props.values} />
        </div>
      </div>
    );
  }
});


const DynamicList = React.createClass({
  render() {
    return (
      <div className={styles.list}>

        <h2>Dynamic list</h2>
        <ComponentRouter config={Items} namespace="list" />

        <h2>Dynamic list with container</h2>
        <ComponentRouter config={Items} namespace="list2">
          <DynamicListContainer values={[1, 2, 3, 4]} />
        </ComponentRouter>

      </div>
    );
  }
});

export default DynamicList;
