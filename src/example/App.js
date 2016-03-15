import React from 'react';

import {actions, store, locationHistory as location, href, isActive} from '../index';
import styles from './App.css';


// TODO: move to a separate npm package
const UrlContainer = React.createClass({
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


  isLMB(event) {
    const {button, metaKey, shiftKey, ctrlKey, altKey} = event;

    return button === 0 && !metaKey && !shiftKey && !ctrlKey && !altKey;
  },


  onClick(props) {
    return event => {
      // React only on normal left-button clicks
      if (this.isLMB(event)) {
        event.preventDefault();
        store.dispatch(actions.navigateTo(props));
      }
    };
  },


  onChange() {
    this.replaceState(store.getState());
  },


  render() {
    const {children: render, ...props} = this.props;

    return render({
      href: href(props),
      onClick: this.onClick(props),
      'data-active': isActive(props)
    });
  }
});

const Url = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    query: React.PropTypes.object.isRequired
  },


  render() {
    const {query, children, ...props} = this.props;

    return (
      <UrlContainer {...query}>
        {urlProps => <a {...urlProps} {...props}>{children}</a>}
      </UrlContainer>
    );
  }
});


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
      store.dispatch(actions.addDefaultParam(namespace, this.props.defaultValue));
    }
  },


  componentWillUnmount() {
    if (this.props.defaultValue) {
      store.dispatch(actions.removeParam(namespace));
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
    page: React.PropTypes.string.isRequired
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
              <Url query={{page: 'quickstart'}} className={styles.tab}>Quickstart</Url>
            </li>
            <li>
              <Url query={{page: 'foobar'}} className={styles.tab}>FooBar</Url>
            </li>
            <li className={styles.github}>
              <a
                href="https://github.com/in-flux/component-router"
                target="_blank"
                className={styles.tab}>GitHub</a>
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
    this.unsubscribe = location();
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
