import React from 'react';


const DynamicListContainer = React.createClass({
  propTypes: {
    componentRouter: React.PropTypes.object,
    values: React.PropTypes.arrayOf(React.PropTypes.number).isRequired
  },


  render() {
    const {Component} = this.props.componentRouter;

    return (
      <div>
        <h3>List Container</h3>
        <div style={{background: 'rgba(0, 0, 255, 0.2)', padding: 20}}>
          <Component {...this.props} values={this.props.values} />
        </div>
      </div>
    );
  }
});


export default DynamicListContainer;
