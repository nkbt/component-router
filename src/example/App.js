import React from 'react';

import {store} from '../store';
import {navigateTo} from '../actions';
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


const Header = React.createClass({
  propTypes: {
    page: React.PropTypes.string
  },


  getDefaultProps() {
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


const App = () => (
  <div className={styles.app}>
    <ComponentRouteContainer>
      {({query: {page}}) => <Header page={page} />}
    </ComponentRouteContainer>
  </div>
);


export default App;
