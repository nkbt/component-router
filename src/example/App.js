import React from 'react';

import {ComponentRouter, LocationHtml4, getDefault, Url} from '..';
import styles from './App.css';

import FooBar from './FooBar';
import Quickstart from './Quickstart';
import RandomLinks from './RandomLinks';
import Blocks from './Blocks';


const Header = React.createClass({
  render() {
    return (
      <header className={styles.header}>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Url query={{page: 'foobar'}} isActiveClass={styles.active}>FooBar</Url>
            </li>
            <li>
              <Url query={{page: 'quickstart'}} isActiveClass={styles.active}>Quickstart</Url>
            </li>
            <li>
              <Url query={{page: 'links'}} isActiveClass={styles.active}>Random Links</Url>
            </li>
            <li>
              <Url query={{page: 'blocks'}} isActiveClass={styles.active}>Blocks</Url>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
});


const Content = React.createClass({
  propTypes: {
    componentRouter: React.PropTypes.object
  },


  render() {
    const {Component} = this.props.componentRouter;

    return (
      <div className={styles.content}>
        <Component />
      </div>
    );
  }
});


const App = React.createClass({
  render() {
    return (
      <div className={styles.app}>
        <LocationHtml4 />
        <Header />

        <ComponentRouter namespace="page" config={{
          [getDefault()]: 'foobar',
          foobar: FooBar,
          quickstart: Quickstart,
          links: RandomLinks,
          blocks: Blocks
        }}>
          <Content />
        </ComponentRouter>

      </div>
    );
  }
});


export default App;
