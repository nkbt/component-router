import React from 'react'
import UrlContainer from '../UrlContainer'


const Url = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    query: React.PropTypes.object.isRequired
  },


  render() {
    const {query, children, ...props} = this.props;

    return (
      <UrlContainer {...query}>
        {urlProps => <a {...urlProps} {...props}>{children}</a>}
      </UrlContainer>
    );
  }
});


export default Url;