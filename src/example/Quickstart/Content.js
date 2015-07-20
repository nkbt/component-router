import React from 'react';
import {Spring} from 'react-motion';
import {Url} from '../..';
import Chart from './Chart';
import Data from './Data';
import styles from './Content.css';


const Content = React.createClass({
  propTypes: {
    expanded: React.PropTypes.string.isRequired
  },


  shouldComponentUpdate({expanded}) {
    return expanded !== this.props.expanded;
  },


  render() {
    const {expanded} = this.props;

    return (
      <div className={styles.content}>

        <Spring
          endValue={{val: expanded === 'chart' ? 400 : 100}}>
          {({val: height}) => <Chart height={height} />}
        </Spring>

        <Url className={styles.expander}
          query={{expanded: expanded === 'chart' ? 'data' : 'chart'}}>
          {expanded === 'chart' ? <span>&uarr;</span> : <span>&darr;</span>}
        </Url>

        <Spring endValue={{val: expanded === 'chart' ? 100 : 400}}>
          {({val: height}) => <Data height={height} />}
        </Spring>

      </div>
    );
  }
});


export default Content;
