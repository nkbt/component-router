import React from 'react';
import {Spring} from 'react-motion';
import {Url} from '../..';
import styles from './Filter.css';


const Content = React.createClass({
  propTypes: {
    style: React.PropTypes.object,
    isOpened: React.PropTypes.bool
  },

  render() {
    if (!this.props.isOpened) {
      return (
        <Url className={styles.filter} style={this.props.style} query={{filter: 'opened'}}>
          <span className={styles.toggle}>&rarr;</span>
        </Url>
      );
    }

    return (
      <div className={styles.filter} style={this.props.style}>
        <span className={styles.filtersIcon} />

        <div className={styles.content}>
          <h4 className={styles.header}>Filters</h4>
          <Url query={{filter: 'closed'}}><span className={styles.toggle}>&larr;</span></Url>
        </div>
      </div>
    );
  }
});


const Filter = React.createClass({
  propTypes: {
    isOpened: React.PropTypes.bool
  },


  render() {
    const {isOpened} = this.props;
    const width = isOpened ? Math.min(window.innerWidth / 5, 550) : 65;

    return (
      <Spring endValue={{val: width}}>
        {({val}) => (
          <Content style={{width: val}} isOpened={isOpened} />
        )}
      </Spring>
    );
  }
});


export default Filter;
