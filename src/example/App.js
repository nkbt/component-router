import React from 'react';

import {ComponentRouter, LocationHtml5, getDefault, Url} from '..';
import styles from './App.css';

import FooBar from './FooBar/FooBar';
import Quickstart from './Quickstart/Quickstart';
import Links from './Links/Links';
import Blocks from './Blocks/Blocks';
import DynamicList from './DynamicList/DynamicList';


const Header = React.createClass({
  render() {
    return (
      <header className={styles.header}>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Url query={{page: 'quickstart'}} isActiveClass={styles.active}>Quickstart</Url>
            </li>
            <li>
              <Url query={{page: 'foobar'}} isActiveClass={styles.active}>FooBar</Url>
            </li>
            <li>
              <Url query={{page: 'links'}} isActiveClass={styles.active}>Random Links</Url>
            </li>
            <li>
              <Url query={{page: 'blocks'}} isActiveClass={styles.active}>Blocks</Url>
            </li>
            <li>
              <Url query={{page: 'dynamic'}} isActiveClass={styles.active}>Dynamic values</Url>
            </li>
            <li className={styles.github}>
              <a href="https://github.com/in-flux/component-router" target="_blank">GitHub</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
});


const App = React.createClass({
  render() {
    return (
      <div className={styles.app}>
        <LocationHtml5 />

        <Header />

        <ComponentRouter namespace="page" config={{
          [getDefault()]: 'quickstart',
          foobar: FooBar,
          quickstart: Quickstart,
          links: Links,
          blocks: Blocks,
          dynamic: DynamicList
        }} className={styles.content} />

      </div>
    );
  }
});


export default App;
