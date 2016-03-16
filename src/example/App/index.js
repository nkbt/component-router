import React from 'react';
import {locationHistory as location} from '../..';
import Url from './Bindings/Url';
import ComponentRouteContainer from './Bindings/ComponentRouteContainer';
import componentRouteHandler from './Bindings/componentRouteHandler';
import pathnameRouteHandler from './Bindings/pathnameRouteHandler';
import css from './App.css';


const ComponentHeader = React.createClass({
  render() {
    return (
      <header className={css.header}>
        <nav className={css.nav}>
          <ul>
            <li>
              <Url query={{page: 'quickstart'}} className={css.tab}>Quickstart</Url>
            </li>
            <li>
              <Url query={{page: 'foobar'}} className={css.tab}>FooBar</Url>
            </li>
            <li className={css.github}>
              <a
                href="https://github.com/in-flux/component-router"
                target="_blank"
                className={css.tab}>GitHub</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
});


const PathnameHeader = React.createClass({
  render() {
    return (
      <header className={css.header}>
        <nav className={css.nav}>
          <ul>
            <li>
              <Url href="/quickstart" className={css.tab}>Quickstart</Url>
            </li>
            <li>
              <Url href="/foobar" className={css.tab}>FooBar</Url>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
});


const NotFound = () => <h1>Not Found.</h1>;


const ComponentRouteHandler = componentRouteHandler({
  namespace: 'page',
  defaultValue: 'quickstart',
  notFound: NotFound
})({
  quickstart: () => <p>Quickstart</p>,
  foobar: () => <p>FooBar</p>
});


const PathnameRouteHandler = pathnameRouteHandler({
  notFound: NotFound
})({
  '/quickstart': () => <p>Quickstart</p>,
  '/foobar': () => <p>FooBar</p>
});


const App = React.createClass({
  componentDidMount() {
    this.unsubscribe = location();
  },


  componentWillUnmount() {
    this.unsubscribe();
  },

  render() {
    return (
      <div className={css.app}>
        <ComponentRouteContainer>
          {({query, currentRoute: {route, params}}) => (
            <div>
              <h1>ComponentRouteHandler</h1>
              <ComponentHeader />
              <ComponentRouteHandler params={query} />

              <h1>PathnameRouteHandler</h1>
              <PathnameHeader />
              <PathnameRouteHandler route={route} params={params} />
            </div>
          )}
        </ComponentRouteContainer>


      </div>
    );
  }
});


export default App;
