import React from 'react';
import {locationHistory as location, actions, href, isActive} from '../..';
import {createStore} from './store';
import css from './App.css';


const store = createStore();

// Add routes
store.dispatch(actions.addRoute('/foo'));
store.dispatch(actions.addRoute('/bar'));


location({store, getComponentRouterState: state => state.componentRouter});


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
      </ul>
    );
  }
});


const ComponenentLinks = React.createClass({
  propTypes: {
    routingState: React.PropTypes.object
  },

  componentDidMount() {
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


const Header = ({...props}) => (
  <header className={css.header}>
    <nav className={css.nav}>
      <GlobalLinks {...props} />
    </nav>
  </header>
);


const Foo = ({...props}) => (
  <div className={css.content}>
    <h1>Foo</h1>
    <section>
      <ComponenentLinks {...props} />
    </section>
  </div>
);

const Bar = () => (
  <div className={css.content}>
    <h1>Bar</h1>
  </div>
);

const routes = {
  '/foo': Foo,
  '/bar': Bar
};

const App = React.createClass({
  getInitialState() {
    return {routingState: store.getState().componentRouter};
  },


  componentDidMount() {
    this.unsubscribe = store.subscribe(() =>
      this.setState({routingState: store.getState().componentRouter}));
  },


  componentWillUnmount() {
    this.unsubscribe();
  },


  render() {
    const {routingState} = this.state;
    const CurrentComponent = routes[routingState.currentRoute.route];

    return (
      <div className={css.app}>
        <Header routingState={routingState} />
        <CurrentComponent routingState={routingState} />
        <section>
          Routing state:
          <pre>{JSON.stringify(routingState, null, 2)}</pre>
        </section>
      </div>
    );
  }
});


export default App;
