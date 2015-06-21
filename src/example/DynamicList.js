import {Url} from '../InFlux';
import React from 'react';

const DynamicList = React.createClass({
  propTypes: {
    inFlux: React.PropTypes.object,
    values: React.PropTypes.arrayOf(React.PropTypes.number)
  },

  getDefaultProps() {
    return {
      values: [1, 2, 3]
    };
  },


  render() {
    const {namespace, value} = this.props.inFlux;

    const isActive = id => <b>{id === parseInt(value, 10) ? '(Active)' : ''}</b>;

    const item = id => (
      <p key={id}>
        <Url partial={{[namespace]: id}}>{id} {isActive(id)}</Url>
      </p>
    );

    return (
      <div>
        {this.props.values.map(item)}
      </div>
    );
  }
});


export default DynamicList;
