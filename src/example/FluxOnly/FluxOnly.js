import React from 'react';
import {Store, Url, ActionCreator} from '../..';
import styles from './FluxOnly.css';

const Switch = React.createClass({

  getInitialState() {
    return Store.getQuery();
  },

  componentDidMount() {
    this.unsubscribe =
      Store.addThrottledChangeListener(this.onChange, 50);
  },

  componentWillUnmount() {
    this.unsubscribe();
  },

  switchComponents() {
    let query = 'Nothing';

    if ('switch' in this.state) {
      query = this.state.switch;
    }
    return query;
  },

  onChange() {
    this.setState(Store.getQuery());
  },

  render() {
    return (
      <div className={styles.content}>
        <p>Current state is: {this.switchComponents()} Clicked</p>
      </div>
    );
  }
});

const FluxWithUrls = React.createClass({

  render() {
    return (
      <div className={styles.fluxonly}>
        <div>
          <h2>Using component-router's Urls</h2>
        </div>
        <div>
          <Url query={{switch: 'First'}}>
            Render First Component
          </Url>
          <Url query={{switch: 'Second'}}>
            Render Second Component
          </Url>
          <Switch />
        </div>
      </div>
    );
  }

});

const PureFlux = React.createClass({

  getInitialState() {
    return Store.getQuery();
  },

  componentDidMount() {
    this.unsubscribe =
      Store.addThrottledChangeListener(this.onChange, 50);
  },

  componentWillUnmount() {
    this.unsubscribe();
  },

  onChange() {
    this.setState(Store.getQuery());
  },

  onClick(newVal = {switch: 'nothing'}, event) {
    event.preventDefault();
    Store.dispatch(ActionCreator.navigateTo({pathname: '/', query: newVal}));
  },

  activeClass({switch: val}) {
    let cName = '';

    if (this.state[`switch`] === val) {
      cName = 'active';
    }
    return cName;
  },

  render() {
    const first = {switch: 'First'};
    const second = {switch: 'Second'};

    return (
      <div className={styles.fluxonly}>
        <div>
          <h2>Using only anchor elements</h2>
        </div>
        <div>
          <a className={this.activeClass(first)} onClick={this.onClick.bind(this, first)}>
            Render First Component
          </a>
          <a className={this.activeClass(second)} onClick={this.onClick.bind(this, second)}>
            Render Second Component
          </a>
          <Switch />
        </div>
      </div>
    );
  }
});

const CompoundFlux = React.createClass({
  render() {
    return (
      <div>
        <h1>Switch Components by subscribing directly to the Flux Store</h1>
        <div>
          <FluxWithUrls />
        </div>
        <div className={styles.container}>
          <PureFlux />
        </div>
      </div>
    );
  }
});

export default CompoundFlux;
