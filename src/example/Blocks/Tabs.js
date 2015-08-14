import React from 'react';
import {Url} from '../..';
import styles from './Tabs.css';


const Tabs = React.createClass({
  propTypes: {
    tabs: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    namespace: React.PropTypes.string.isRequired
  },


  render() {
    const {tabs, namespace, ...props} = this.props;

    return (
      <ul {...props} className={styles.tabs}>
        {tabs.map(tab => (
          <li key={tab}>
            <Url query={{[namespace]: tab}}>{tab}</Url>
          </li>
        ))}
      </ul>
    );
  }
});


export default Tabs;
