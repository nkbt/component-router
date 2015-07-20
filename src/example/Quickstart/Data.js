import React from 'react';
import {ComponentRouter, Url, getDefault} from '../..';
import styles from './Data.css';


const Sources = React.createClass({
  render() {
    return <h3>Sources</h3>;
  }
});

const Destinations = React.createClass({
  render() {
    return <h3>Destinations</h3>;
  }
});


const Content = React.createClass({
  propTypes: {
    componentRouter: React.PropTypes.object
  },


  render() {
    const {Component} = this.props.componentRouter;

    return <Component />;
  }
});


const Data = React.createClass({
  propTypes: {
    height: React.PropTypes.number
  },

  render() {
    const {height} = this.props;

    return (
      <div style={{height}} className={styles.data}>
        <h2>Data</h2>
        <Url query={{data: 'sources'}}>Sources</Url>
        &nbsp;|&nbsp;
        <Url query={{data: 'destinations'}}>Destinations</Url>


        <ComponentRouter namespace="data" config={{
          [getDefault()]: 'sources',
          sources: Sources,
          destinations: Destinations
        }}>
          <Content />
        </ComponentRouter>


      </div>
    );
  }
});


export default Data;
