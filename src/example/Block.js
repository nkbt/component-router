import React from 'react';
import Tabs from './Tabs';


const Block = React.createClass({
  propTypes: {
    componentRouter: React.PropTypes.object
  },


  render() {
    const {keys, namespace, Component} = this.props.componentRouter;

    return (
      <div style={{background: 'rgba(0, 0, 0, 0.1)', minHeight: 100}}>
        <Tabs tabs={keys} namespace={namespace} />
        <Component />
      </div>
    );
  }
});


export default Block;


