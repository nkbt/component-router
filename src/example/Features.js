import React from 'react';

import ReactSwap from 'react-swap';
import {ComponentRouter} from '..';
import styles from './Features.css';

import {getDefault} from '../index';
import RedBlock from './RedBlock';
import GreenBlock from './GreenBlock';
import DynamicList from './DynamicList';

import Block from './Block';
import DynamicListContainer from './DynamicListContainer';
import RandomLinks from './RandomLinks';

/*



<h2>Block 2</h2>
<ComponentRouter config={{
    X: GreenBlock,
    Y: RedBlock
  }} namespace="block2">
  <Block />
</ComponentRouter>

<h2>Block 3</h2>
<p>Adds and removes query params</p>
<ReactSwap>
  <div>
    <button data-swap-handler={1}>Open</button>
  </div>
  <div>
    <button data-swap-handler={1}>Close</button>
    <ComponentRouter config={{
        [getDefault()]: 'Hello',
        Hello: GreenBlock,
        World: RedBlock
      }} namespace="block3">
      <Block />
    </ComponentRouter>
  </div>
</ReactSwap>

<h2>Dynamic list example</h2>
<ComponentRouter config={DynamicList} namespace="list" />

<h2>Dynamic list with children example</h2>
<ComponentRouter config={DynamicList} namespace="list2">
  <DynamicListContainer values={[1, 2, 3, 4]} />
</ComponentRouter>





        <h2>Block 1</h2>
        <ComponentRouter namespace="block1" config={{
            [getDefault()]: 'Second',
            First: GreenBlock,
            Second: RedBlock
          }}>
          <Block />
        </ComponentRouter>
*/

const Features = React.createClass({
  render() {
    return (
      <div className={styles.features}>
        <RandomLinks />
      </div>
    );
  }
});

export default Features;
