import React from 'react';
import {Url} from '../index';
import styles from './Tabs.css';


const Tabs = React.createClass({
  propTypes: {
    tabs: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    namespace: React.PropTypes.string.isRequired
  },


  render() {
    const {tabs, namespace} = this.props;
    const props = Object.assign({}, this.props);
    delete props.tabs;
    return (
      <ul {...props} className={styles.Tabs}>
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
