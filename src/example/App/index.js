import React from 'react';
import {locationHistory as location, store, actions, href, isActive} from '../..';
import css from './App.css';

const Header = React.createClass({
  propTypes: {
    links: React.PropTypes.array
  },

  getInitialState() {
    return store.getState();
  },


  componentDidMount() {
    this.unsubscribe = store.subscribe(this.onChange);
  },


  componentWillUnmount() {
    this.unsubscribe();
  },


  onChange() {
    this.replaceState(store.getState());
  },


  navigateTo(params) {
    return event => {
      event.preventDefault();
      store.dispatch(actions.navigateTo(params));
    }
  },


  render() {
    const {links} = this.props;

    const makeLink = params => {
      const {query, pathname} = this.state;
      const mergedParams = {
        pathname,
        ...params,
        query: {...query, ...params.query}
      };
      return (
        <a className={css.tab}
          href={href(mergedParams)}
          data-active={isActive(mergedParams)}
          onClick={this.navigateTo(mergedParams)}>
          {JSON.stringify(mergedParams)}
        </a>
      )
    };

    return (
      <header className={css.header}>
        <nav className={css.nav}>
          <ul>
            {links.map(params => <li key={JSON.stringify(params)}>{makeLink(params)}</li>)}
          </ul>
        </nav>
      </header>
    );
  }
});


const Component = React.createClass({
  getInitialState() {
    return store.getState();
  },


  componentDidMount() {
    this.unsubscribe = store.subscribe(this.onChange);
  },


  componentWillUnmount() {
    this.unsubscribe();
  },


  onChange() {
    this.replaceState(store.getState());
  },


  render() {
    return (
      <div>
        <p>Pathname: {this.state.pathname}</p>
        <p>Query: {JSON.stringify(this.state.query)}</p>
        <p>Defaults: {JSON.stringify(this.state.defaultParams)}</p>
        <p>Cleaned query (no defaults): {JSON.stringify(this.state.cleanQuery)}</p>
      </div>
    );
  }
});

const links = [
  {pathname: '/quickstart'},
  {pathname: '/foobar'},
  {query: {page: 'quickstart'}},
  {query: {page: 'foobar'}}
];


const App = React.createClass({
  componentDidMount() {
    this.unsubscribe = location();

    links
      .filter(({pathname}) => pathname)
      .forEach(({pathname}) => store.dispatch(actions.addRoute(pathname)));

    store.dispatch(actions.addDefaultParam('page', 'quickstart'));
  },


  componentWillUnmount() {
    this.unsubscribe();

    links
      .filter(({pathname}) => pathname)
      .forEach(({pathname}) => store.dispatch(actions.removeRoute(pathname)));

    store.dispatch(actions.removeParam('page'));
  },

  render() {

    return (
      <div className={css.app}>
        <Header links={links} />
        <Component />
      </div>
    );
  }
});


export default App;
