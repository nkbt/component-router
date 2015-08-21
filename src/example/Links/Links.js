import React from 'react';
import {Url} from '../..';
import styles from './Links.css';


const test = [
  {query: {x: 1}},
  {query: {x: 100}},
  {query: {y: 2}},
  {query: {y: 200}},
  {query: {x: 1}},
  {query: {x: 100}},
  {query: {y: 1}},
  {query: {y: 100}}
];


const LinkExample = React.createClass({
  propTypes: {
    query: React.PropTypes.object
  },

  render() {
    const query = this.props.query ? `query="${JSON.stringify(this.props.query)}"` : '';

    return <p><Url {...this.props}>{`<Url ${query} />`}</Url></p>;
  }
});


const Links = React.createClass({
  render() {
    return (
      <div {...this.props}>
        <div className={styles.links}>
          <h2>Links examples</h2>
          {test.map((props, i) => <LinkExample key={i} {...props} />)}
        </div>
      </div>
    );
  }
});


export default Links;
