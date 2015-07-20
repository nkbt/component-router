import React from 'react';
import {Spring} from 'react-motion';
import {Url} from '../..';
import styles from './Filter.css';


const Opened = React.createClass({
  shouldComponentUpdate() {
    return false;
  },


  render() {
    return (
      <div className={styles.content}>
        <h4 className={styles.header}>Filters</h4>
        <Url query={{filter: 'closed'}}><span className={styles.toggle}>&larr;</span></Url>
      </div>
    );
  }
});


const Closed = React.createClass({
  shouldComponentUpdate() {
    return false;
  },


  render() {
    return (
      <Url query={{filter: 'opened'}}>
        <span className={styles.toggle}>&rarr;</span>
      </Url>
    );
  }
});


const Content = React.createClass({
  propTypes: {
    width: React.PropTypes.number,
    isOpened: React.PropTypes.bool
  },


  shouldComponentUpdate({isOpened, width}) {
    return isOpened !== this.props.isOpened || width !== this.props.width;
  },


  render() {
    const {isOpened, width} = this.props;

    return (
      <div className={styles.filter} style={{width}}>
        {isOpened ? <Opened /> : <Closed />}
      </div>
    );
  }
});


const Filter = React.createClass({
  propTypes: {
    isOpened: React.PropTypes.bool
  },


  shouldComponentUpdate({isOpened}) {
    return isOpened !== this.props.isOpened;
  },


  render() {
    const {isOpened} = this.props;

    return (
      <Spring endValue={{val: isOpened ? Math.min(window.innerWidth / 5, 550) : 65}}>
        {({val: width}) => (
          <Content width={width} isOpened={isOpened} />
        )}
      </Spring>
    );
  }
});


export default Filter;
