import React from 'react';


const InFlux = React.createClass({
  render() {
    return React.Children.only(this.props.children);
  }
});


export default InFlux;
