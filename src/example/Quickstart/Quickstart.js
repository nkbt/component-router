import React from 'react';
import {ComponentRouter} from '../..';
import styles from './Quickstart.css';

import Filter from './Filter';
import Content from './Content';


const FilterWrapper = React.createClass({
  propTypes: {
    componentRouter: React.PropTypes.object
  },


  shouldComponentUpdate({componentRouter: {value}}) {
    return value !== this.props.componentRouter.value;
  },


  render() {
    const {value} = this.props.componentRouter;

    return <Filter isOpened={value === 'opened'} />;
  }
});


const ContentWrapper = React.createClass({
  propTypes: {
    componentRouter: React.PropTypes.object
  },


  shouldComponentUpdate({componentRouter: {value}}) {
    return value !== this.props.componentRouter.value;
  },


  render() {
    const {value} = this.props.componentRouter;

    return <Content expanded={value} />;
  }
});


const Quickstart = React.createClass({
  shouldComponentUpdate() {
    return false;
  },


  render() {
    return (
      <div className={styles.quickstart}>

        <ComponentRouter config={FilterWrapper} namespace="filter" />

        <div className={styles.content}>

          <ComponentRouter config={ContentWrapper} namespace="expanded" />

        </div>
      </div>
    );
  }
});


export default Quickstart;
