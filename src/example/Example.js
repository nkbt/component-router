import React from 'react';
import {InFlux, LocationHtml5} from '../InFlux';
import styles from './Example.css';


import inFluxConfig from './.inFlux.config';
import Block from './Block';
import DynamicListContainer from './DynamicListContainer';
import RandomLinks from './RandomLinks';


const App = React.createClass({
  render() {
    return (
      <div className={styles.Example}>
        <LocationHtml5 />

        <h1>In Flux</h1>
        <InFlux config={inFluxConfig} namespace="block1">
          <Block />
        </InFlux>
        <InFlux config={inFluxConfig} namespace="block2">
          <Block />
        </InFlux>
        <InFlux config={inFluxConfig} namespace="block3">
          <Block />
        </InFlux>

        <h2>Dynamic list example</h2>
        <InFlux config={inFluxConfig} namespace="list" />

        <h2>Dynamic list with children example</h2>
        <InFlux config={inFluxConfig} namespace="list2">
          <DynamicListContainer values={[1, 2, 3, 4]} />
        </InFlux>

        <h2>Links examples</h2>
        <RandomLinks />
      </div>
    );
  }
});


React.render(<App />, document.body);
