// import React from 'react';
import React from 'react/addons';
import createComponent from './utils/createComponent';


fdescribe('ComponentRouter', () => {
  const ComponentRouterInjector = require('inject!../src/ComponentRouter');
  let Actions, Store, getDefault, ComponentRouter;


  beforeEach(() => {
    Actions = jasmine.createSpyObj('Actions', ['']);
  // let Actions, Store, getDefault, ComponentRouter;
  // let storeUnsubscribe, initProps;


  // beforeEach(() => {
  //   Actions = jasmine.createSpyObj('Actions', ['removeParam']);
    Store = jasmine.createSpyObj('Store', ['']);
    getDefault = jasmine.createSpy('getDefault')
      .and.returnValue('pacman');
  });


  beforeEach(() => ComponentRouter = ComponentRouterInjector({
    './Actions': Actions,
    './Store': Store,
    './getDefault': getDefault
  }));
  // beforeEach(() => {
  //   storeUnsubscribe = jasmine.createSpy('storeUnsubscribe');
  //   // const initState = {
  //   //   query: {},
  //   //   defaultParams: {},
  //   //   type: Constants.TYPE_HTML5
  //   // };
  //   Store = jasmine.createSpyObj('Store', [
  //     'addThrottledChangeListener', 'dispatch', 'getQuery', 'getDefaultParams']);
  //   Store.addThrottledChangeListener.and.returnValue(storeUnsubscribe);
  //   Store.getQuery.and.returnValue({});
  //   initProps = {
  //     namespace: 'page',
  //     config: {}
  //   };
  //   ComponentRouter = ComponentRouterInjector({
  //     './ActionCreator': ActionCreator,
  //     './Store': Store,
  //     './getDefault': getDefault
  //   });
  // });

  it('should be ok', () => {
    expect(ComponentRouter).toBeTruthy();
  });

  // it('should not render anything', () => {
  //   const {out} = createComponent(ComponentRouter, initProps);
  //
  //   expect(out).toBeNull();
  // });
  describe('Lifecycle', () => {
    let div;
    let mock;

    beforeEach(() => {
      div = document.createElement('div');
      React.render(<ComponentRouter {...initProps}/>, div);
      // mock = React.addons.TestUtils.mockComponent(ComponentRouter);
      mock = React.addons.TestUtils.renderIntoDocument(<ComponentRouter {...initProps} />);
    });

    it('should add a listener on mount', () => {
      expect(Store.addThrottledChangeListener).toHaveBeenCalled();
      // const {out} = createComponent(ComponentRouter, initProps);
      // expect(Store.addThrottledChangeListener.calls.mostRecent().args[0]).toEqual(createComponent(ComponentRouter, initProps).onChange);
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

    });

  });

});
