import React from 'react';
import {locationHistory as location, createStore, actions, href, isActive} from '../..';
import css from './App.css';


const navigateTo = (store, params) => event => {
  event.preventDefault();
  store.dispatch(actions.navigateTo(params));
};


const Header = React.createClass({
  propTypes: {
    store: React.PropTypes.object
  },


  getInitialState() {
    return this.props.store.getState();
  },


  componentDidMount() {
    const {store} = this.props;

    this.unsubscribe = store.subscribe(() => this.replaceState(store.getState()));
  },


  componentWillUnmount() {
    this.unsubscribe();
  },

  render() {
    const {store} = this.props;

    return (
      <header className={css.header}>
        <nav className={css.nav}>
          <ul>
            <li>
              <a
                className={`${css.tab}
                  ${isActive(this.state, {pathname: '/foo'}) ? css.active : null}`}
                href={href(this.state, {pathname: '/foo'})}
                onClick={navigateTo(store, {pathname: '/foo'})}>/foo</a>
            </li>
            <li>
              <a
                className={`${css.tab}
                  ${isActive(this.state, {pathname: '/bar'}) ? css.active : null}`}
                href={href(this.state, {pathname: '/bar'})}
                onClick={navigateTo(store, {pathname: '/bar'})}>/bar</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
});


const Component = React.createClass({
  propTypes: {
    store: React.PropTypes.object
  },


  getInitialState() {
    return this.props.store.getState();
  },


  componentDidMount() {
    const {store} = this.props;

    this.unsubscribe = store.subscribe(() => this.replaceState(store.getState()));
  },


  componentWillUnmount() {
    this.unsubscribe();
  },


  render() {
    const {store} = this.props;

    return (
      <div className={css.content}>
        <section>
          <a
            className={`${css.link}
              ${isActive(this.state, {query: {component: 'bla'}}) ? css.active : null}`}
            href={href(this.state, {query: {component: 'bla'}})}
            onClick={navigateTo(store, {query: {component: 'bla'}})}>component: bla</a>
          <a
            className={`${css.link}
              ${isActive(this.state, {query: {component: 'baz'}}) ? css.active : null}`}
            href={href(this.state, {query: {component: 'baz'}})}
            onClick={navigateTo(store, {query: {component: 'baz'}})}>component: baz</a>
        </section>
        <section>
          Pathname: {this.state.pathname}
        </section>
        <section>
          Query:
          <pre>{JSON.stringify(this.state.query, null, 2)}</pre>
        </section>
        <section>
          Defaults:
          <pre>{JSON.stringify(this.state.defaultParams, null, 2)}</pre>
        </section>
        <section>
          Cleaned query (no defaults):
          <pre>{JSON.stringify(this.state.cleanQuery, null, 2)}</pre>
        </section>
      </div>
    );
  }
});


const App = React.createClass({
  componentWillMount() {
    this.store = createStore();

    // Add defaults for component routing
    this.store.dispatch(actions.addDefaultParam('component', 'baz'));

    // Add routes
    this.store.dispatch(actions.addRoute('/foo'));
    this.store.dispatch(actions.addRoute('/bar'));
  },


  componentDidMount() {
    this.locationUnsubscribe = location({store: this.store});
  },


  componentWillUnmount() {
    this.locationUnsubscribe();
  },


  render() {
    return (
      <div className={css.app}>
        <Header store={this.store} />
        <Component store={this.store} />
      </div>
    );
  }
});


export default App;
