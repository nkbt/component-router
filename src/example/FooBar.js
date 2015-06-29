import React from 'react';
import {InFlux, Url, LocationHtml5} from '..';


const Baz = React.createClass({
  propTypes: {
    inFlux: React.PropTypes.object
  },

  render() {
    const {value} = this.props.inFlux;
    return <h1>{value && value.toUpperCase()}</h1>;
  }
});

const App = React.createClass({
  render() {
    return (
      <div>
        <LocationHtml5 />
        <Url query={{baz: 'foo'}}>Foo</Url> | <Url query={{baz: 'bar'}}>Bar</Url>
        <InFlux config={Baz} namespace="baz" />
      </div>
    );
  }
});

React.render(<App />, document.body);
