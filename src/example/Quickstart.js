import React from 'react';
import {InFlux, Url, LocationHtml5} from '..';


const Chart = React.createClass({
  propTypes: {
    inFlux: React.PropTypes.object
  },

  render() {
    const {namespace, Component} = this.props.inFlux;
    return (
      <div>
        <h2>Chart</h2>
        <Url query={{[namespace]: 'bar'}}>Bar</Url>
        &nbsp;|&nbsp;
        <Url query={{[namespace]: 'pie'}}>Pie</Url>
        <Component />
      </div>
    );
  }
});


const Filter = React.createClass({
  propTypes: {
    inFlux: React.PropTypes.object
  },

  render() {
    const {namespace, Component} = this.props.inFlux;
    return (
      <div>
        <h2>Filter</h2>
        <Url query={{[namespace]: 'opened'}}>Open</Url>
        &nbsp;|&nbsp;
        <Url query={{[namespace]: 'closed'}}>Close</Url>
        <Component />
      </div>
    );
  }
});


const Data = React.createClass({
  propTypes: {
    inFlux: React.PropTypes.object
  },

  render() {
    const {namespace, Component} = this.props.inFlux;
    return (
      <div>
        <h2>Data</h2>
        <Url query={{[namespace]: 'sources'}}>Sources</Url>
        &nbsp;|&nbsp;
        <Url query={{[namespace]: 'destinations'}}>Destinations</Url>
        <Component />
      </div>
    );
  }
});


const ChartBar = React.createClass({
  render() {
    return <h3>Bar</h3>;
  }
});

const ChartPie = React.createClass({
  render() {
    return <h3>Pie</h3>;
  }
});

const FilterClosed = React.createClass({
  render() {
    return <h3>Closed</h3>;
  }
});

const FilterOpened = React.createClass({
  render() {
    return <h3>Opened</h3>;
  }
});

const DataSources = React.createClass({
  render() {
    return <h3>Sources</h3>;
  }
});

const DataDestinations = React.createClass({
  render() {
    return <h3>Destinations</h3>;
  }
});


const App = React.createClass({
  render() {
    return (
      <div>
        <LocationHtml5 />

        <InFlux config={{bar: ChartBar, pie: ChartPie}} namespace="chart">
          <Chart />
        </InFlux>
        <InFlux config={{opened: FilterOpened, closed: FilterClosed}} namespace="filter">
          <Filter />
        </InFlux>
        <InFlux config={{sources: DataSources, destinations: DataDestinations}} namespace="data">
          <Data />
        </InFlux>
      </div>
    );
  }
});

React.render(<App />, document.body);
