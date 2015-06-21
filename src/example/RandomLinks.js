import React from 'react';
import {Url} from '../InFlux';


const RandomLinks = React.createClass({
  render() {
    return (
      <div>
        <p>
          <Url href="/test">
            {`<Url href="/test">`}
          </Url>
        </p>
        <p>
          <Url href="/">
            {`<Url href="/">`}
          </Url>
        </p>
        <p>
          <Url query={{x: 1}}>
            {`<Url query={{x: 1}}>`}
          </Url>
        </p>
        <p>
          <Url query={{x: 100}}>
            {`<Url query={{x: 100}}>`}
          </Url>
        </p>
        <p>
          <Url query={{y: 1}}>
            {`<Url query={{y: 1}}>`}
          </Url>
        </p>
        <p>
          <Url query={{y: 100}}>
            {`<Url query={{y: 100}}>`}
          </Url>
        </p>
        <p>
          <Url partial={{x: 1}}>
            {`<Url partial={{x: 1}}>`}
          </Url>
        </p>
        <p>
          <Url partial={{x: 100}}>
            {`<Url partial={{x: 100}}>`}
          </Url>
        </p>
        <p>
          <Url partial={{y: 1}}>
            {`<Url partial={{y: 1}}>`}
          </Url>
        </p>
        <p>
          <Url partial={{y: 100}}>
            {`<Url partial={{y: 100}}>`}
          </Url>
        </p>
        <p>
          <Url query={{x: 1}} partial={{y: 2}}>
            {`<Url query={{x: 1}} partial={{y: 2}}>`}
          </Url>
        </p>
        <p>
          <Url pathname="/test" query={{x: 1}}>
            {'<Url pathname="/test" query={{x: 1}}>'}
          </Url>
        </p>
        <p>
          <Url pathname="/test" partial={{y: 2}}>
            {`<Url pathname="/test" partial={{y: 2}}>`}
          </Url>
        </p>
        <p>
          <Url pathname="/test" query={{x: 1}} partial={{y: 4}}>
            {`<Url pathname="/test" query={{x: 1}} partial={{y: 2}}>`}
          </Url>
        </p>
        <p>
          <Url pathname="/test" query={{x: 1}} partial={{y: 100}}>
            {`<Url pathname="/test" query={{x: 1}} partial={{y: 100}}>`}
          </Url>
        </p>
      </div>
    );
  }
});


export default RandomLinks;
