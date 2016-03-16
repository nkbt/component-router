import React from 'react'
import UrlContainer from '../UrlContainer'


const Url = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    href: React.PropTypes.string,
    query: React.PropTypes.object
  },


  render() {
    const {query, href, children, ...props} = this.props;

    return (
      <UrlContainer {...query}>
        {urlProps => <a {...urlProps} {...props}>{children}</a>}
      </UrlContainer>
    );
  }
});


export default Url;