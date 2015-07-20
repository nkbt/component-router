import React from 'react';
import {ComponentRouter, getDefault} from '..';

import Tabs from './Tabs';


const GreenBlock = React.createClass({
  render() {
    return <div style={{background: 'rgba(0, 255, 0, 0.3)', minHeight: 100}}>Green Block</div>;
  }
});


const RedBlock = React.createClass({
  render() {
    return <div style={{background: 'rgba(255, 0, 0, 0.3)', minHeight: 100}}>Red Block</div>;
  }
});


const Block = React.createClass({
  propTypes: {
    componentRouter: React.PropTypes.object
  },


  render() {
    const {keys, namespace, Component} = this.props.componentRouter;

    return (
      <div style={{background: 'rgba(0, 0, 0, 0.1)', minHeight: 100}}>
        <Tabs tabs={keys} namespace={namespace} />
        <Component />
      </div>
    );
  }
});

/*


import ReactSwap from 'react-swap';
import RedBlock from './RedBlock';
import GreenBlock from './GreenBlock';
import DynamicList from './DynamicList';
import Block from './Block';
import DynamicListContainer from './DynamicListContainer';

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

const Blocks = React.createClass({
  render() {
    return (
      <div>
        <h2>Block 1</h2>
        <ComponentRouter namespace="block1" config={{
            [getDefault()]: 'Second',
            First: GreenBlock,
            Second: RedBlock
          }}>
          <Block />
        </ComponentRouter>
      </div>
    );
  }
});

export default Blocks;
