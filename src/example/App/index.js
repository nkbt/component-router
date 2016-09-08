import React from 'react';
import {locationHistory as location, actions, href, isActive} from '../..';
import {createStore} from './store';
import css from './App.css';


const store = createStore();


location({store, namespace: 'componentRouter'});


const navigateTo = params => event => {
  event.preventDefault();
  store.dispatch(actions.navigateTo(params));
};


const GlobalLinks = React.createClass({
  propTypes: {
    routingState: React.PropTypes.object
  },


  render() {
    const {routingState} = this.props;

    return (
      <ul>
        <li>
          <a
            className={css.tab}
            data-active={isActive(routingState, {pathname: '/'})}
            href={href(routingState, {pathname: '/'})}
            onClick={navigateTo({pathname: '/'})}>Home</a>
        </li>
        <li>
          <a
            className={css.tab}
            data-active={isActive(routingState, {pathname: '/foo'})}
            href={href(routingState, {pathname: '/foo'})}
            onClick={navigateTo({pathname: '/foo'})}>/foo</a>
        </li>
        <li>
          <a
            className={css.tab}
            data-active={isActive(routingState, {pathname: '/bar'})}
            href={href(routingState, {pathname: '/bar'})}
            onClick={navigateTo({pathname: '/bar'})}>/bar</a>
        </li>
        <li>
          <a
            className={css.tab}
            data-active={isActive(routingState, {pathname: '/cleanHistory'})}
            href={href(routingState, {pathname: '/cleanHistory'})}
            onClick={navigateTo({pathname: '/cleanHistory'})}>/cleanHistory</a>
        </li>
        <li>
          <a
            className={css.tab}
            data-active={isActive(routingState, {pathname: '/404'})}
            href={href(routingState, {pathname: '/404'})}
            onClick={navigateTo({pathname: '/404'})}>/404</a>
        </li>
      </ul>
    );
  }
});


const ComponentLinks = React.createClass({
  propTypes: {
    routingState: React.PropTypes.object
  },

  componentWillMount() {
    store.dispatch(actions.addDefaultParam('component', 'baz'));
  },


  componentWillUnmount() {
    store.dispatch(actions.removeParam('component'));
  },


  render() {
    const {routingState} = this.props;

    return (
      <span>
        <a
          className={css.link}
          data-active={isActive(routingState, {query: {component: 'bla'}})}
          href={href(routingState, {query: {component: 'bla'}})}
          onClick={navigateTo({query: {component: 'bla'}})}>component: bla</a>
        <a
          className={css.link}
          data-active={isActive(routingState, {query: {component: 'baz'}})}
          href={href(routingState, {query: {component: 'baz'}})}
          onClick={navigateTo({query: {component: 'baz'}})}>component: baz</a>
      </span>

    );
  }
});


const SortedComponentLinks = React.createClass({
  propTypes: {
    routingState: React.PropTypes.object
  },

  componentWillMount() {
    store.dispatch(actions.addDefaultParam('offRecord', 'bla'));
    store.dispatch(actions.addOffRecordParam('offRecord'));
  },


  componentWillUnmount() {
    store.dispatch(actions.removeParam('offRecord'));
  },


  render() {
    const {routingState} = this.props;

    return (
      <div>
        <h3>Changes are going to replace browser history</h3>
        <div>
          {['bla', 'baz', 'abc', 'zyx'].map(item =>
            <a
              className={css.link}
              data-active={isActive(routingState, {query: {offRecord: item}})}
              href={href(routingState, {query: {offRecord: item}})}
              key={item}
              onClick={navigateTo({query: {offRecord: item}})}>
              off-record: {item}
            </a>
          )}
        </div>
      </div>
    );
  }
});


const Header = ({...props}) =>
  <header className={css.header}>
    <nav className={css.nav}>
      <GlobalLinks {...props} />
    </nav>
  </header>;


const Foo = ({...props}) =>
  <div className={css.content}>
    <h1>Foo</h1>
    <section>
      <ComponentLinks {...props} />
    </section>
  </div>;


const Bar = () =>
  <div className={css.content}>
    <h1>Bar</h1>
  </div>;


const CleanHistory = ({...props}) =>
  <div className={css.content}>
    <h1>CleanHistory</h1>
    <section>
      <SortedComponentLinks {...props} />
    </section>
  </div>;


const Home = () =>
  <div className={css.content}>
    <h1>Home</h1>
  </div>;


const NotFound = () =>
  <div className={css.content}>
    <h1>Not Found</h1>
  </div>;


const routes = {
  '/': Home,
  '/foo': Foo,
  '/bar': Bar,
  '/cleanHistory': CleanHistory
};


// Add routes
Object.keys(routes).forEach(route => store.dispatch(actions.addRoute(route)));


const App = React.createClass({
  getInitialState() {
    return {routingState: store.getState().componentRouter};
  },


  componentWillMount() {
    this.unsubscribe = store.subscribe(() =>
      this.setState({routingState: store.getState().componentRouter}));
  },


  componentWillUnmount() {
    this.unsubscribe();
  },


  render() {
    const {routingState} = this.state;
    const CurrentComponent = routes[routingState.currentRoute.route] || NotFound;

    return (
      <div className={css.app}>
        <h1>component-router</h1>
        <Header routingState={routingState} />
        <CurrentComponent routingState={routingState} />
        <section className={css.content}>
          Routing state:
          <pre>{JSON.stringify(routingState, null, 2)}</pre>
        </section>
      </div>
    );
  }
});


export default App;
