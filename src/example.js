import React from 'react';
import {Url} from './InFlux';


const App = React.createClass({
  render() {
    return (
      <div>
        <h1>In Flux</h1>
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
          <Url partial={{y: 2}}>
            {`<Url partial={{y: 2}}>`}
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
          <Url pathname="/test" query={{x: 1}} partial={{y: 2}}>
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


React.render(<App />, document.body);
