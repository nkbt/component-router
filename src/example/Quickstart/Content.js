import React from 'react';
import {Motion, spring} from 'react-motion';
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
    const chartHeight = expanded === 'chart' ? 400 : 100;
    const dataHeight = expanded === 'chart' ? 100 : 400;

    return (
      <div className={styles.content}>

        <Motion style={{height: spring(chartHeight)}}>
          {style => <Chart height={style.height} />}
        </Motion>

        <Url className={styles.expander}
          query={{expanded: expanded === 'chart' ? 'data' : 'chart'}}>
          {expanded === 'chart' ? <span>&uarr;</span> : <span>&darr;</span>}
        </Url>

        <Motion style={{height: spring(dataHeight)}}>
          {style => <Data height={style.height} />}
        </Motion>
      </div>
    );
  }
});


export default Content;
