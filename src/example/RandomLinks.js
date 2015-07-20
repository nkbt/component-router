import React from 'react';
import {Url} from '..';
import styles from './RandomLinks.css';


const test = [
  {pathname: '/test'},
  {pathname: '/'},
  {query: {x: 1}},
  {query: {x: 100}},
  {query: {y: 2}},
  {query: {y: 200}},
  {pathname: '/', query: {x: 1}},
  {pathname: '/', query: {x: 100}},
  {pathname: '/', query: {y: 1}},
  {pathname: '/', query: {y: 100}},
  {pathname: '/test', query: {x: 1}},
  {pathname: '/test', query: {x: 100}},
  {pathname: '/test', query: {y: 1}},
  {pathname: '/test', query: {y: 100}}
];


const LinkExample = React.createClass({
  propTypes: {
    pathname: React.PropTypes.string,
    query: React.PropTypes.object
  },

  render() {
    const pathname = this.props.pathname ? `pathname="${this.props.pathname}"` : '';
    const query = this.props.query ? `query="${JSON.stringify(this.props.query)}"` : '';

    return <p><Url {...this.props}>{`<Url ${pathname} ${query} />`}</Url></p>;
  }
});


const RandomLinks = React.createClass({
  render() {
    return (
      <div className={styles.links}>
        <h2>Links examples</h2>
        {test.map((props, i) => <LinkExample key={i} {...props} />)}
      </div>
    );
  }
});


export default RandomLinks;
