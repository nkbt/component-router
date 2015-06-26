import React from 'react';
import ReactSwap from 'react-swap';
import {InFlux, LocationHtml4} from '../index';
import styles from './Example.css';


import {getDefault} from '../index';
import RedBlock from './RedBlock';
import GreenBlock from './GreenBlock';
import DynamicList from './DynamicList';

import Block from './Block';
import DynamicListContainer from './DynamicListContainer';
import RandomLinks from './RandomLinks';


const App = React.createClass({
  render() {
    return (
      <div className={styles.Example}>
        <LocationHtml4 />

        <h1>In Flux</h1>

        <h2>Block 1</h2>
        <InFlux config={{
            [getDefault()]: 'Second',
            First: GreenBlock,
            Second: RedBlock
          }} namespace="block1">
          <Block />
        </InFlux>

        <h2>Block 2</h2>
        <InFlux config={{
            X: GreenBlock,
            Y: RedBlock
          }} namespace="block2">
          <Block />
        </InFlux>

        <h2>Block 3</h2>
        <p>Adds and removes query params</p>
        <ReactSwap>
          <div>
            <button data-swap-handler>Open</button>
          </div>
          <div>
            <button data-swap-handler>Close</button>
            <InFlux config={{
                [getDefault()]: 'Hello',
                Hello: GreenBlock,
                World: RedBlock
              }} namespace="block3">
              <Block />
            </InFlux>
          </div>
        </ReactSwap>

        <h2>Dynamic list example</h2>
        <InFlux config={DynamicList} namespace="list" />

        <h2>Dynamic list with children example</h2>
        <InFlux config={DynamicList} namespace="list2">
          <DynamicListContainer values={[1, 2, 3, 4]} />
        </InFlux>

        <h2>Links examples</h2>
        <RandomLinks />
      </div>
    );
  }
});


React.render(<App />, document.body);
