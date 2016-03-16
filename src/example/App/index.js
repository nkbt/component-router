import React from 'react';
import {locationHistory as location} from '../..';
import Url from './Bindings/Url';
import ComponentRouteContainer from './Bindings/ComponentRouteContainer';
import {routeHandler, NOT_FOUND} from './Bindings/routeHandler';
import css from './App.css';




const Header = React.createClass({
  propTypes: {
    page: React.PropTypes.string.isRequired
  },


  getClassName(page) {
    return page === this.props.page ? css.active : '';
  },


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


const Handler = routeHandler('page')({
  [NOT_FOUND]: () => <h1>Not Found.</h1>,
  quickstart: () => <h1>Quickstart</h1>,
  foobar: () => <h1>FooBar</h1>
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
          {({query: {page}}) => (
            <div>
              {page ? <Header page={page} /> : null}
              <Handler defaultValue="quickstart" page={page} />
            </div>
          )}
        </ComponentRouteContainer>
      </div>
    );
  }
});


export default App;
