import React from 'react';
import ReactSwap from 'react-swap';
import {ComponentRouter, getDefault} from '../..';
import Tabs from './Tabs';
import styles from './Blocks.css';


const GreenBlock = React.createClass({
  render() {
    return <div className={styles.green}>Green Block</div>;
  }
});


const RedBlock = React.createClass({
  render() {
    return <div className={styles.red}>Red Block</div>;
  }
});


const Block = React.createClass({
  propTypes: {
    componentRouter: React.PropTypes.object
  },


  render() {
    const {keys, namespace, Component} = this.props.componentRouter;

    return (
      <div className={styles.block}>
        <Tabs tabs={keys} namespace={namespace} />
        <Component />
      </div>
    );
  }
});


const Blocks = React.createClass({
  render() {
    return (
      <div className={styles.blocks}>

        <h2>Block 1</h2>
        <p>With default value `Red`</p>
        <ComponentRouter namespace="block1" config={{
            [getDefault()]: 'Red',
            Green: GreenBlock,
            Red: RedBlock
          }}>
          <Block />
        </ComponentRouter>

        <h2>Block 2</h2>
        <ComponentRouter config={{
            Green: GreenBlock,
            Red: RedBlock
          }} namespace="block2">
          <Block />
        </ComponentRouter>

        <h2>Block 3</h2>
        <p>Removes query params (if not rendered)</p>
        <ReactSwap>
          <div>
            <button data-swap-handler={1}>Open</button>
          </div>
          <div>
            <button data-swap-handler={1}>Close</button>
            <ComponentRouter config={{
                Green: GreenBlock,
                Red: RedBlock
              }} namespace="block3">
              <Block />
            </ComponentRouter>
          </div>
        </ReactSwap>

      </div>
    );
  }
});

export default Blocks;
