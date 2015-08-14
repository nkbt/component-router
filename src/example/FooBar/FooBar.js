import React from 'react';
import {ComponentRouter, Url} from '../..';


const Baz = React.createClass({
  propTypes: {
    componentRouter: React.PropTypes.object
  },

  render() {
    const {value} = this.props.componentRouter;

    return <h1>{value && value.toUpperCase()}</h1>;
  }
});

const FooBar = React.createClass({
  render() {
    return (
      <div {...this.props}>
        <Url query={{baz: 'foo'}}>Foo</Url> | <Url query={{baz: 'bar'}}>Bar</Url>
        <ComponentRouter config={Baz} namespace="baz" />
      </div>
    );
  }
});


export default FooBar;
