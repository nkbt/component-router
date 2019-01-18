import React from 'react';
import PropTypes from 'prop-types';
import {
  locationHistory,
  locationHash,
  href,
  isActive,
  NAVIGATE_TO,
  ADD_OFF_RECORD_PARAM,
  ADD_DEFAULT_PARAM,
  REMOVE_PARAM,
  ADD_ROUTE
} from '../..';
import {createStore} from './store';


const store = createStore();


if (process.env.HISTORY === 'HASH') {
  // When publishing to GitHub Pages we cannon use HTML5 history navigation
  locationHash({store, namespace: 'componentRouter'});
} else {
  locationHistory({store, namespace: 'componentRouter'});
}


const navigateTo = ({pathname, query}) => event => {
  event.preventDefault();
  store.dispatch({type: NAVIGATE_TO, pathname, query});
};


const GlobalLinks = ({routingState}) => (
  <ul>
    <li>
      <a
        className="tab"
        data-active={isActive(routingState, {pathname: '/'})}
        href={href(routingState, {pathname: '/'})}
        onClick={navigateTo({pathname: '/'})}>
        Home
      </a>
    </li>
    <li>
      <a
        className="tab"
        data-active={isActive(routingState, {pathname: '/foo'})}
        href={href(routingState, {pathname: '/foo'})}
        onClick={navigateTo({pathname: '/foo'})}>
        /foo
      </a>
    </li>
    <li>
      <a
        className="tab"
        data-active={isActive(routingState, {pathname: '/bar'})}
        href={href(routingState, {pathname: '/bar'})}
        onClick={navigateTo({pathname: '/bar'})}>
        /bar
      </a>
    </li>
    <li>
      <a
        className="tab"
        data-active={isActive(routingState, {pathname: '/cleanHistory'})}
        href={href(routingState, {pathname: '/cleanHistory'})}
        onClick={navigateTo({pathname: '/cleanHistory'})}>
        /cleanHistory
      </a>
    </li>
    <li>
      <a
        className="tab"
        data-active={isActive(routingState, {pathname: '/404'})}
        href={href(routingState, {pathname: '/404'})}
        onClick={navigateTo({pathname: '/404'})}>
        /404
      </a>
    </li>
    <li>
      <a
        className="tab"
        data-active={isActive(routingState, {pathname: '/bar/x/z'})}
        href={href(routingState, {pathname: '/bar/x/z'})}
        onClick={navigateTo({pathname: '/bar/x/z'})}>
        /bar/x/z
      </a>
    </li>
    <li>
      <a
        className="tab"
        data-active={isActive(routingState, {pathname: '/foo/x/z'})}
        href={href(routingState, {pathname: '/foo/x/z'})}
        onClick={navigateTo({pathname: '/foo/x/z'})}>
        /foo/x/z
      </a>
    </li>
    <li>
      <a
        className="tab"
        data-active={isActive(routingState, {pathname: '/foo/x/z/more'})}
        href={href(routingState, {pathname: '/foo/x/z/more'})}
        onClick={navigateTo({pathname: '/foo/x/z/more'})}>
        /foo/x/z/more
      </a>
    </li>
    <li>
      <a
        className="tab"
        data-active={isActive(routingState, {pathname: '/foo/'})}
        href={href(routingState, {pathname: '/foo/'})}
        onClick={navigateTo({pathname: '/foo/'})}>
        /foo/
      </a>
    </li>
  </ul>
);
GlobalLinks.propTypes = {
  routingState: PropTypes.object.isRequired
};


class ComponentLinks extends React.Component {
  static propTypes = {
    routingState: PropTypes.object.isRequired
  };


  componentDidMount() {
    store.dispatch({type: ADD_DEFAULT_PARAM, namespace: 'component', value: 'baz'});
  }


  componentWillUnmount() {
    store.dispatch({type: REMOVE_PARAM, namespace: 'component'});
  }


  render() {
    const {routingState} = this.props;

    return (
      <span>
        <a
          className="link"
          data-active={isActive(routingState, {query: {component: 'bla'}})}
          href={href(routingState, {query: {component: 'bla'}})}
          onClick={navigateTo({query: {component: 'bla'}})}>
          component: bla
        </a>
        <a
          className="link"
          data-active={isActive(routingState, {query: {component: 'baz'}})}
          href={href(routingState, {query: {component: 'baz'}})}
          onClick={navigateTo({query: {component: 'baz'}})}>
          component: baz
        </a>
      </span>
    );
  }
}


class SortedComponentLinks extends React.Component {
  static propTypes = {
    routingState: PropTypes.object.isRequired
  };


  componentDidMount() {
    store.dispatch({type: ADD_DEFAULT_PARAM, namespace: 'offRecord', value: 'bla'});
    store.dispatch({type: ADD_OFF_RECORD_PARAM, namespace: 'offRecord'});
  }


  componentWillUnmount() {
    store.dispatch({type: REMOVE_PARAM, namespace: 'offRecord'});
  }


  render() {
    const {routingState} = this.props;

    return (
      <div>
        <h3>Changes are going to replace browser history</h3>
        <div>
          {['bla', 'baz', 'abc', 'zyx'].map(item => (
            <a
              className="link"
              data-active={isActive(routingState, {query: {offRecord: item}})}
              href={href(routingState, {query: {offRecord: item}})}
              key={item}
              onClick={navigateTo({query: {offRecord: item}})}>
              off-record: {item}
            </a>
          ))}
        </div>
      </div>
    );
  }
}


const Header = props => (
  <header className="header">
    <nav className="nav">
      <GlobalLinks {...props} />
    </nav>
  </header>
);


const Foo = props => (
  <div className="content">
    <h1>Foo</h1>
    <section>
      <ComponentLinks {...props} />
    </section>
  </div>
);


const Bar = () => (
  <div className="content">
    <h1>Bar</h1>
  </div>
);


const CleanHistory = props => (
  <div className="content">
    <h1>CleanHistory</h1>
    <section>
      <SortedComponentLinks {...props} />
    </section>
  </div>
);


const Home = () => (
  <div className="content">
    <h1>Home</h1>
  </div>
);


const NotFound = () => (
  <div className="content">
    <h1>Not Found</h1>
  </div>
);


// First matching route wins, so they should be ordered
// from the most specific to the least specific in case of overlap
const routes = {
  '/': Home,
  '/foo': Foo,
  '/foo/:*/:something/more': Foo,
  '/foo/:*/:something': Foo,
  '/foo/:*': Foo,
  '/bar/:*': Bar,
  '/cleanHistory': CleanHistory
};


// Add routes
Object.keys(routes).forEach(route => store.dispatch({type: ADD_ROUTE, route}));


class App extends React.Component {
  state = {
    routingState: store.getState().componentRouter
  };


  componentDidMount() {
    this.unsubscribe = store.subscribe(
      () => this.setState({routingState: store.getState().componentRouter})
    );
  }


  componentWillUnmount() {
    this.unsubscribe();
  }


  render() {
    const {routingState} = this.state;
    const CurrentComponent = routes[routingState.currentRoute.route] || NotFound;

    return (
      <div className="app">
        <h1>component-router</h1>
        <Header routingState={routingState} />
        <CurrentComponent routingState={routingState} />
        <section className="content">
          Routing state:
          <pre>{JSON.stringify(routingState, null, 2)}</pre>
        </section>
      </div>
    );
  }
}


export default App;
