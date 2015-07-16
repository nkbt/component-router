import React from 'react';
import {ComponentRouter, Url, LocationHtml5} from '..';


const Baz = React.createClass({
  propTypes: {
    componentRouter: React.PropTypes.object
  },

  render() {
    const {value} = this.props.componentRouter;

    return <h1>{value && value.toUpperCase()}</h1>;
  }
});

const App = React.createClass({
  render() {
    return (
      <div>
        <LocationHtml5 />
        <Url query={{baz: 'foo'}}>Foo</Url> | <Url query={{baz: 'bar'}}>Bar</Url>
        <ComponentRouter config={Baz} namespace="baz" />
      </div>
    );
  }
});

React.render(<App />, document.body);
