import {Url} from '../index';
import React from 'react';

const DynamicList = React.createClass({
  propTypes: {
    componentRouter: React.PropTypes.object,
    values: React.PropTypes.arrayOf(React.PropTypes.number)
  },

  getDefaultProps() {
    return {
      values: [1, 2, 3]
    };
  },


  render() {
    const {namespace, value} = this.props.componentRouter;

    const isActive = id => <b>{id === parseInt(value, 10) ? '(Active)' : ''}</b>;

    const item = id => (
      <p key={id}>
        <Url query={{[namespace]: id}}>{id} {isActive(id)}</Url>
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
