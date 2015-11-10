import React from 'react';

import {store} from '../store';
import {navigateTo, addDefaultParam, removeParam} from '../actions';
import {locationHistory as location} from '../locationHistory';
import styles from './App.css';


// TODO: move to a separate npm package
const ComponentRouteContainer = React.createClass({
  propTypes: {
    children: React.PropTypes.func.isRequired
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


  onClick(page) {
    store.dispatch(navigateTo({page}));
  },


  onChange() {
    this.replaceState(store.getState());
  },


  render() {
    const {children: render} = this.props;

    return render(this.state);
  }
});


// TODO: move to a separate npm package
const NOT_FOUND = '__NOT_FOUND__';
const createComponentRouteHandler = namespace => handlers => React.createClass({
  propTypes: {
    defaultValue: React.PropTypes.string,
    [namespace]: React.PropTypes.string
  },


  componentWillMount() {
  },


  componentDidMount() {
    if (this.props.defaultValue) {
      store.dispatch(addDefaultParam(namespace, this.props.defaultValue));
    }
  },


  componentWillUnmount() {
    if (this.props.defaultValue) {
      store.dispatch(removeParam(namespace));
    }
  },


  render() {
    const {defaultValue, ...props} = this.props;
    const currentValue = props[namespace] === undefined ? defaultValue : props[namespace];

    if (currentValue === undefined || !handlers.hasOwnProperty(currentValue)) {
      return handlers[NOT_FOUND] ? React.createElement(handlers[NOT_FOUND]) : null;
    }

    return React.createElement(handlers[currentValue], {...props, [namespace]: currentValue});
  }
});


const Header = React.createClass({
  propTypes: {
    page: React.PropTypes.string
  },


  getDefaultProps() {
    store.dispatch(addDefaultParam('page', 'quickstart'));
    return {page: 'quickstart'};
  },


  onClick(page) {
    return event => {
      event.preventDefault();
      store.dispatch(navigateTo({page}));
    };
  },


  getClassName(page) {
    return page === this.props.page ? styles.active : '';
  },


  render() {
    return (
      <header className={styles.header}>
        <nav className={styles.nav}>
          <ul>
            <li>
              <a
                href="#"
                onClick={this.onClick('quickstart')}
                className={this.getClassName('quickstart')}>Quickstart</a>
            </li>
            <li>
              <a
                href="#"
                onClick={this.onClick('foobar')}
                className={this.getClassName('foobar')}>FooBar</a>
            </li>
            <li className={styles.github}>
              <a href="https://github.com/in-flux/component-router" target="_blank">GitHub</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
});


const ComponenentRouteHandler = createComponentRouteHandler('page')({
  [NOT_FOUND]: () => <h1>Not Found.</h1>,
  quickstart: () => <h1>Quickstart</h1>,
  foobar: () => <h1>FooBar</h1>
});


const App = React.createClass({
  componentDidMount() {
    this.unsubscribe = location(store);
  },


  componentWillUnmount() {
    this.unsubscribe();
  },

  render() {
    return (
      <div className={styles.app}>
        <ComponentRouteContainer>
          {({query: {page}}) => (
            <div>
              <Header page={page} />
              <ComponenentRouteHandler defaultValue="quickstart" page={page} />
            </div>
          )}
        </ComponentRouteContainer>
      </div>
    );
  }
});


export default App;
