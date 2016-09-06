import React from 'react';
import {shouldComponentUpdate} from 'react/lib/ReactComponentWithPureRenderMixin';
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


  shouldComponentUpdate,


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
            data-active={isActive(routingState, {pathname: '/404'})}
            href={href(routingState, {pathname: '/404'})}
            onClick={navigateTo({pathname: '/404'})}>/404</a>
        </li>
      </ul>
    );
  }
});

const componentsList = ['bla', 'baz', 'abc', 'zyx'];
const ComponentLinks = React.createClass({
  propTypes: {
    routingState: React.PropTypes.object
  },

  componentDidMount() {
    store.dispatch(actions.addDefaultParam('component', 'baz'));
    store.dispatch(actions.addDefaultParam('sorting', 'Unsorted'));
    store.dispatch(actions.addOffRecordParam('sorting'));
  },


  shouldComponentUpdate,


  componentWillUnmount() {
    store.dispatch(actions.removeParam('component'));
    store.dispatch(actions.removeParam('sorting'));
  },


  render() {
    const {routingState} = this.props;

    const sortIt = (original, direction) => {
      if (direction === 'Unsorted') return original;

      const sorted = original.slice(0).sort();

      if (direction === 'Descending') {
        sorted.reverse();
      }

      return sorted;
    };

    return (
      <span>
         <div>
           <span>
             <a
               className={css.sorting}
               data-active={isActive(routingState, {query: {sorting: 'Unsorted'}})}
               href={href(routingState, {query: {sorting: 'Unsorted'}})}
               onClick={navigateTo({query: {sorting: 'Unsorted'}})}>No sorting</a>
           </span>
           <span>
             <a
               className={css.sorting}
               data-active={isActive(routingState, {query: {sorting: 'Ascending'}})}
               href={href(routingState, {query: {sorting: 'Ascending'}})}
               onClick={navigateTo({query: {sorting: 'Ascending'}})}>Ascending</a>
           </span>
           <span>
             <a
               className={css.sorting}
               data-active={isActive(routingState, {query: {sorting: 'Descending'}})}
               href={href(routingState, {query: {sorting: 'Descending'}})}
               onClick={navigateTo({query: {sorting: 'Descending'}})}>Descending</a>
           </span>
           <span>(sorting changes are not going into the browser history)</span>
         </div>
        <hr />
        <span>
        {
          sortIt(componentsList, routingState.query.sorting).map(c => (<a
            key={c}
            className={css.link}
            data-active={isActive(routingState, {query: {component: c}})}
            href={href(routingState, {query: {component: c}})}
            onClick={navigateTo({query: {component: c}})}>component: {c}</a>))
        }
        </span>
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
      <ComponentLinks {...props} />
    </section>
  </div>
);

const Bar = () => (
  <div className={css.content}>
    <h1>Bar</h1>
  </div>
);


const Home = () => (
  <div className={css.content}>
    <h1>Home</h1>
  </div>
);


const NotFound = () => (
  <div className={css.content}>
    <h1>Not Found</h1>
  </div>
);


const routes = {
  '/': Home,
  '/foo': Foo,
  '/bar': Bar
};
// Add routes
Object.keys(routes).forEach(route => store.dispatch(actions.addRoute(route)));


const App = React.createClass({
  getInitialState() {
    return {routingState: store.getState().componentRouter};
  },


  shouldComponentUpdate,


  componentDidMount() {
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
