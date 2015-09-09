import React from 'react/addons';
import createComponent from './utils/createComponent';
import FooBar from '../src/example/FooBar/FooBar';


describe('ComponentRouter', () => {
  const ComponentRouterInjector = require('inject!../src/ComponentRouter');
  let Actions, Store, getDefault, ComponentRouter;

  const Chart = React.createClass({
    render: function() {
      return (
        <div />
      );
    }
  });

  beforeEach(() => {
    // Actions = jasmine.createSpyObj('Actions', ['']);
  // let Actions, Store, getDefault, ComponentRouter;
  // let storeUnsubscribe, initProps;


  // beforeEach(() => {
  //   Actions = jasmine.createSpyObj('Actions', ['removeParam']);
    Actions = jasmine.createSpyObj('Actions', ['removeParam', 'addDefaultParam']);
    Store = jasmine.createSpyObj('Store', ['']);
    getDefault = jasmine.createSpy('getDefault')
      .and.returnValue('pacman');
  });


  // beforeEach(() => ComponentRouter = ComponentRouterInjector({
  //   './Actions': Actions,
  //   './Store': Store,
  //   './getDefault': getDefault
  // }));
  // // beforeEach(() => {
  // //   storeUnsubscribe = jasmine.createSpy('storeUnsubscribe');
  // //   // const initState = {
  // //   //   query: {},
  // //   //   defaultParams: {},
  // //   //   type: Constants.TYPE_HTML5
  // //   // };
  // //   Store = jasmine.createSpyObj('Store', [
  // //     'addThrottledChangeListener', 'dispatch', 'getQuery', 'getDefaultParams']);
  // //   Store.addThrottledChangeListener.and.returnValue(storeUnsubscribe);
  // //   Store.getQuery.and.returnValue({});
  // //   initProps = {
  // //     namespace: 'page',
  // //     config: {}
  // //   };
  // //   ComponentRouter = ComponentRouterInjector({
  // //     './ActionCreator': ActionCreator,
  // //     './Store': Store,
  // //     './getDefault': getDefault
  // //   });
  // // });
  beforeEach(() => {
    storeUnsubscribe = jasmine.createSpy('storeUnsubscribe');
    Store = jasmine.createSpyObj('Store', [
      'addThrottledChangeListener', 'dispatch', 'getQuery', 'getDefaultParams']);
    Store.addThrottledChangeListener.and.returnValue(storeUnsubscribe);
    Store.getQuery.and.returnValue({});
    initProps = {
      namespace: 'page',
      config: {}
    };
    ComponentRouter = ComponentRouterInjector({
      './Actions': Actions,
      './Store': Store,
      './getDefault': getDefault
    });
  });


  it('should be ok', () => {
    expect(ComponentRouter).toBeTruthy();
  });

  describe('Lifecycle', () => {
    let comp;
    let div;
    let mock;

    beforeEach(() => {
      div = document.createElement('div');
      React.render(<ComponentRouter {...initProps}/>, div);
      mock = React.addons.TestUtils.renderIntoDocument(<ComponentRouter {...initProps} />);
    });

    it('should add a listener on mount', () => {
      expect(Store.addThrottledChangeListener).toHaveBeenCalled();
      expect(Store.addThrottledChangeListener.calls.mostRecent().args[0]).toEqual(mock.onChange);
      expect(Store.addThrottledChangeListener.calls.mostRecent().args[1]).toEqual(50);
    });

    it('should check default params on render', () => {
      expect(Store.getDefaultParams).toHaveBeenCalled();
    });

    it('should unsubscribe from Store changes when unmounted', () => {
      React.unmountComponentAtNode(div);
      expect(storeUnsubscribe).toHaveBeenCalled();
      expect(ActionCreator.removeParam).toHaveBeenCalled();
      expect(ActionCreator.removeParam.calls.mostRecent().args[0]).toEqual({namespace: initProps.namespace});
    });

    describe('checkDefaultParam', () => {
      describe('when we have a default config value', () => {
        beforeEach(() => {
          initProps = {
            namespace: 'page',
            config: {
              [getDefault()]: 'santa'
            }
          };
        });

        it('should add a Default parameter if not already set', () => {
          Store.getDefaultParams.and.returnValue({page: 'not santa'});
          div = document.createElement('div');
          React.render(<ComponentRouter {...initProps}/>, div);
          expect(ActionCreator.addDefaultParam).toHaveBeenCalled();
        });

        it('should not add a Default parameter if already set', () => {
          Store.getDefaultParams.and.returnValue({page: 'santa'});
          div = document.createElement('div');
          React.render(<ComponentRouter {...initProps}/>, div);
          expect(ActionCreator.addDefaultParam).not.toHaveBeenCalled();
        });
      });
    });

  describe("render", () => {
    describe("when passed a React Component as config", function () {
      describe("without any children", function () {
        it("should render that Component", function () {
          const namespace = {namespace: 'zoo'};
          const config = {config: FooBar};
          const cr = createComponent(ComponentRouter, {...namespace, ...config}).out;
          expect(cr.type).toBe(<FooBar />.type);
        });
      });

      describe("and it has children", function () {
        it("should render the children", function () {
          // Store.getQuery.and.returnValue({page: 'foo'});
          const config = {config: FooBar};
          const namespace = {namespace: 'page'};
          const cr = createComponent(ComponentRouter, {...namespace, ...config}, <div></div>).out;
          expect(cr.type).toEqual('div');
          expect(cr.props.componentRouter.namespace).toEqual('page');
          expect(cr.props.componentRouter.value).toBeUndefined();
          expect(cr.props.componentRouter.config).toEqual({});
          expect(cr.props.componentRouter.keys).toEqual([]);
          expect(cr.props.componentRouter.Component).toEqual(FooBar);
        });
      });
    });

    describe("when passed an object as config", function () {
      describe("without any children", function () {
        it("should render that Component", function () {
          Store.getQuery.and.returnValue({page: 'foo'});
          const namespace = {namespace: 'page'};
          const config = {foo: Chart, bar: FooBar};
          const cr = createComponent(ComponentRouter, {...namespace, config}).out;
          expect(cr.type).toBe(<Chart />.type);
        });
      });

      describe("and it has children", function () {
        it("should render the children", function () {
          Store.getQuery.and.returnValue({page: 'foo'});
          const config = {page: Chart, foo: FooBar};
          const namespace = {namespace: 'page'};
          const cr = createComponent(ComponentRouter, {...namespace, config}, <div></div>).out;
          expect(cr.type).toEqual('div');
          expect(cr.props.componentRouter.namespace).toEqual('page');
          expect(cr.props.componentRouter.value).toEqual('foo');
          expect(cr.props.componentRouter.config).toEqual(config);
          expect(cr.props.componentRouter.keys).toEqual(Object.keys(config));
          expect(cr.props.componentRouter.Component).toEqual(FooBar);
        });

      });
    });
  });
  });
});
