import React from 'react';
import createComponent from '../utils/createComponent';


// const TestUtils = React.addons.TestUtils;
const w = global.mockedWindow;


describe('LocationHtml4', () => {
  const Html4Injector = require('imports?window=>mockedWindow!inject!../../src/Location/Html4');
  let Store, ActionCreator, Html4, div;
  let storeUnsubscribe;


  beforeEach(() => {
    storeUnsubscribe = jasmine.createSpy('storeUnsubscribe');
    Store = jasmine.createSpyObj('Store', ['addChangeListener', 'getCleanQuery', 'getPathname']);
    Store.addChangeListener.and.returnValue(storeUnsubscribe);
    Store.getPathname.and.returnValue('/test');
    Store.getCleanQuery.and.returnValue({x: 1, y: 2});

    ActionCreator = jasmine.createSpyObj('ActionCreator', ['restoreLocation']);

    w.location = {hash: ''};
    w.addEventListener = jasmine.createSpy('addEventListener');
    w.removeEventListener = jasmine.createSpy('removeEventListener');
    w.history = jasmine.createSpyObj('history', ['pushState']);
  });


  beforeEach(() => Html4 = Html4Injector({
    '../Store': Store,
    '../ActionCreator': ActionCreator
  }));


  it('should not render anything', () => {
    const {out} = createComponent(Html4);
    expect(out).toBeNull();
  });


  describe('Lifecycle', () => {
    beforeEach(() => {
      div = document.createElement('div');
      document.documentElement.appendChild(div);
      React.render(<Html4 />, div);
    });

    it('should restore url on load', () => {
      expect(ActionCreator.restoreLocation).toHaveBeenCalled();
    });


    it('should subscribe to location hash change', () => {
      expect(w.addEventListener).toHaveBeenCalled();
      expect(w.addEventListener.calls.mostRecent().args[0]).toEqual('hashchange');
    });


    it('should subscribe to Store changes', () => {
      expect(Store.addChangeListener).toHaveBeenCalled();
    });


    it('should unsubscribe from Store changes when unmounted', () => {
      React.unmountComponentAtNode(div);
      expect(storeUnsubscribe).toHaveBeenCalled();
    });


    it('should unsubscribe from location hash change', () => {
      React.unmountComponentAtNode(div);
      expect(w.removeEventListener).toHaveBeenCalled();
      expect(w.removeEventListener.calls.mostRecent().args[0]).toEqual('hashchange');
    });
  });


//  describe('URL manipulations', () => {
//    beforeEach(() => html4 = TestUtils.renderIntoDocument(<Html4 />));
//  });
});
