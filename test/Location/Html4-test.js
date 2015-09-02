import React from 'react';
import createComponent from '../utils/createComponent';


const TestUtils = React.addons.TestUtils;
const w = global.mockedWindow;


describe('LocationHtml4', () => {
  const Html4Injector = require('imports?window=>mockedWindow!inject!../../src/Location/Html4');
  let Store, ActionCreator, Html4, div;
  let storeUnsubscribe;


  beforeEach(() => {
    storeUnsubscribe = jasmine.createSpy('storeUnsubscribe');
    Store = jasmine.createSpyObj('Store', [
      'addThrottledChangeListener', 'dispatch', 'getCleanQuery']);
    Store.addThrottledChangeListener.and.returnValue(storeUnsubscribe);
    Store.TYPE_HTML4 = 'html4';

    ActionCreator = jasmine.createSpyObj('ActionCreator', ['restoreLocation']);

    w.location = {hash: ''};
    w.addEventListener = jasmine.createSpy('addEventListener');
    w.removeEventListener = jasmine.createSpy('removeEventListener');
    w.history = jasmine.createSpyObj('history', ['pushState']);
    w.document = {title: 'title'};
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
      expect(Store.addThrottledChangeListener).toHaveBeenCalled();
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


  describe('URL manipulations', () => {
    let html4;

    beforeEach(() => html4 = TestUtils.renderIntoDocument(<Html4 />));


    it('should return default "?" if no hash present', () => {
      expect(html4.getUrl()).toEqual('?');
    });


    it('should simplify hash url to only query', () => {
      w.location.hash = '#?x=1#anchor';
      expect(html4.getUrl()).toEqual('?x=1');
    });


    it('should set url pushing new state to history', () => {
      html4.setUrl('/test?x=1', {}, 'OMG!');
      expect(w.history.pushState).toHaveBeenCalled();
      expect(w.history.pushState).toHaveBeenCalledWith({}, 'OMG!', '#/test?x=1');
    });


    it('should use current window title if one not provided', () => {
      w.document.title = 'OMG!';
      html4.setUrl('/test?x=1', {});
      expect(w.history.pushState).toHaveBeenCalledWith({}, 'OMG!', '#/test?x=1');
    });


    it('should use default empty state if one not provided', () => {
      w.document.title = 'OMG!';
      html4.setUrl('/test?x=1');
      expect(w.history.pushState).toHaveBeenCalled();
      expect(w.history.pushState).toHaveBeenCalledWith({}, 'OMG!', '#/test?x=1');
    });


    it('should not push new state if url is the same', () => {
      w.location.hash = '#?x=1';
      html4.setUrl('?x=1');
      expect(w.history.pushState).not.toHaveBeenCalled();
    });


    it('should restore url when hash updated', () => {
      const onHashChange = w.addEventListener.calls.mostRecent().args[1];

      w.location.hash = '#?x=1';
      onHashChange();

      expect(ActionCreator.restoreLocation).toHaveBeenCalled();
      expect(ActionCreator.restoreLocation).toHaveBeenCalledWith({
        location: '?x=1',
        type: Store.TYPE_HTML4
      });
    });


    it('should set url when store updated', () => {
      spyOn(html4, 'setUrl');
      Store.getCleanQuery.and.returnValue({x: 1, y: 2});
      const onChange = Store.addThrottledChangeListener.calls.mostRecent().args[0];

      onChange();
      expect(html4.setUrl).toHaveBeenCalled();
      expect(html4.setUrl).toHaveBeenCalledWith('?x=1&y=2');
    });
  });
});
