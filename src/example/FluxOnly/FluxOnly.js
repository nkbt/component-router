import React from 'react';
import {Store, Url, LocationHtml4, ActionCreator} from '../..';
import styles from './FluxOnly.css';

const Switch = React.createClass({

  getInitialState() {
    return {
      query: Store.getQuery()
    };
  },

  // shouldComponentUpdate(newProps, {query = {}}) {
  //   return true;
  //   // const config = newProps.config || {};

  //   // return !shallowEqual(newProps, this.props) || !shallowEqual(config,
  //   //     this.props.config) || !shallowEqual(query, this.state.query);
  // },

  componentDidMount() {
    this.unsubscribe =
      Store.addThrottledChangeListener(this.onChange, 50);
  },

  componentWillUnmount() {
    this.unsubscribe();
  },

  switchComponents() {
    // let query = Store.getQuery;
    console.log(`Switch: switchComponents...`);
    if ('switch' in this.state.query) {
      // return <p> Bub </p>;
      // return 'Bub';
      // return this.state.query.switch;
      return <p>{this.state.query.switch}</p>;
    } else {
      // return <p> Sub </p>;
      return 'Sub';
    }
  },

  onChange() {
    console.log(`Switch: onChange...`);
    this.setState({
      query: Store.getQuery()
    });
  },

  render() {
    // console.log(`Switch: render...`);
      // <div className="content">
    // console.dir(this.switchComponents(this.state.query));
    console.log(`Switch: render...${this.switchComponents(this.state.query)}`);
    return (
      <div className={styles.content}>
        Hey there....
        <div>
          {this.switchComponents()}
        </div>
      </div>
    );
  }
});

const FluxWithUrls = React.createClass({

  render() {
    return (
      <div className={styles.fluxonly}>
        <div>
          <h2>Switch Between Different Components Using component-router's Urls</h2>
        </div>
        <div>
          <Url query={{switch: 'first'}}>
            Render First Component
          </Url>
          <Url query={{switch: 'second'}}>
            Render Second Component
          </Url>
          <Switch />
        </div>
      </div>
    );
  }

});

const PureFlux = React.createClass({

  onClick(newVal = {switch: "nothing"}, event) {
    event.preventDefault();
    Store.dispatch(ActionCreator.navigateTo({pathname: '/', query: newVal}));
  },

  render() {
    return (
      <div className={styles.fluxonly}>
        <div>
          <h2>Switch Between Different Components Without Using any component-router Components</h2>
        </div>
        <div>
          <a onClick={this.onClick.bind(this, {switch: 'first'})}>
            Render First Component
          </a>
          <a onClick={this.onClick.bind(this, {switch: 'second'})}>
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
        <div>
          <FluxWithUrls />
        </div>
        <div>
          <PureFlux />
        </div>
      </div>
    );
  }
});

export default CompoundFlux;
