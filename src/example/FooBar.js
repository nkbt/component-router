import React from 'react';
import {InFlux, Url, LocationHtml5} from '..';

const Foo = React.createClass({
  render() {
    return <h1>Foo</h1>;
  }
});

const Bar = React.createClass({
  render() {
    return <h1>Bar</h1>;
  }
});

const Baz = React.createClass({
  propTypes: {
    inFlux: React.PropTypes.object
  },

  render() {
    const {Component} = this.props.inFlux;
    return <Component />;
  }
});

const App = React.createClass({
  render() {
    return (
      <div>
        <LocationHtml5 />
        <Url query={{baz: 'foo'}}>Foo</Url>
        &nbsp;|&nbsp;
        <Url query={{baz: 'bar'}}>Bar</Url>
        <InFlux config={{foo: Foo, bar: Bar}} namespace="baz">
          <Baz />
        </InFlux>
      </div>
    );
  }
});

React.render(<App />, document.body);
