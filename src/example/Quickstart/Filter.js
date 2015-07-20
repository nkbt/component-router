import React from 'react';
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
          <span className={styles.filtersIcon} />
        </Url>
      );
    }

    return (
      <div className={styles.filter} style={this.props.style}>
        <span className={styles.filtersIcon} />

        <div className={styles.content}>
          <div className={styles.filtersHeading}>
            <h4>Filters</h4>
            <Url className={styles.hideButton} query={{filter: 'closed'}} />
          </div>
        </div>
      </div>
    );
  }
});


import {Spring} from 'react-motion';


const Filter = React.createClass({
  propTypes: {
    isOpened: React.PropTypes.bool
  },


  render() {
    const {isOpened} = this.props;
    let width;

    if (isOpened) {
      width = Math.min(window.innerWidth / 5, 550);
    } else {
      width = 68;
    }

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
