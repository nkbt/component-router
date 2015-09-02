import React from 'react';
import createComponent from '../utils/createComponent';


const TestUtils = React.addons.TestUtils;
const w = global.mockedWindow;


describe('LocationHtml5', () => {
  const Html5Injector = require('imports?window=>mockedWindow!inject!../../src/Location/Html5');
  let Store, ActionCreator, Html5, div;
  let storeUnsubscribe;


  beforeEach(() => {
    storeUnsubscribe = jasmine.createSpy('storeUnsubscribe');
    Store = jasmine.createSpyObj('Store', [
      'addThrottledChangeListener', 'dispatch', 'getCleanQuery']);
    Store.addThrottledChangeListener.and.returnValue(storeUnsubscribe);
    Store.TYPE_HTML5 = 'html5';

    ActionCreator = jasmine.createSpyObj('ActionCreator', ['restoreLocation']);

    w.location = {search: ''};
    w.addEventListener = jasmine.createSpy('addEventListener');
    w.removeEventListener = jasmine.createSpy('removeEventListener');
    w.history = jasmine.createSpyObj('history', ['pushState']);
    w.document = {title: 'title'};
  });


  beforeEach(() => Html5 = Html5Injector({
    '../Store': Store,
    '../ActionCreator': ActionCreator
  }));


  it('should not render anything', () => {
    const {out} = createComponent(Html5);

    expect(out).toBeNull();
  });


  describe('Lifecycle', () => {
    beforeEach(() => {
      div = document.createElement('div');
      React.render(<Html5 />, div);
    });

    it('should restore url on load', () => {
      expect(ActionCreator.restoreLocation).toHaveBeenCalled();
    });


    it('should subscribe to location change', () => {
      expect(w.addEventListener).toHaveBeenCalled();
      expect(w.addEventListener.calls.mostRecent().args[0]).toEqual('popstate');
    });


    it('should subscribe to Store changes', () => {
      expect(Store.addThrottledChangeListener).toHaveBeenCalled();
    });


    it('should unsubscribe from Store changes when unmounted', () => {
      React.unmountComponentAtNode(div);
      expect(storeUnsubscribe).toHaveBeenCalled();
    });


    it('should unsubscribe from location change', () => {
      React.unmountComponentAtNode(div);
      expect(w.removeEventListener).toHaveBeenCalled();
      expect(w.removeEventListener.calls.mostRecent().args[0]).toEqual('popstate');
    });
  });


  describe('URL manipulations', () => {
    let html5;

    beforeEach(() => html5 = TestUtils.renderIntoDocument(<Html5 />));


    it('should simplify url to only query', () => {
      w.location.port = 1234;
      w.location.search = '?x=1';
      w.location.hash = '#anchor';
      expect(html5.getUrl()).toEqual('?x=1');
    });


    it('should set url pushing new state to history', () => {
      html5.setUrl('/test?x=1', {}, 'OMG!');
      expect(w.history.pushState).toHaveBeenCalled();
      expect(w.history.pushState).toHaveBeenCalledWith({}, 'OMG!', '/test?x=1');
    });


    it('should use current window title if one not provided', () => {
      w.document.title = 'OMG!';
      html5.setUrl('/test?x=1', {});
      expect(w.history.pushState).toHaveBeenCalledWith({}, 'OMG!', '/test?x=1');
    });


    it('should use default empty state if one not provided', () => {
      w.document.title = 'OMG!';
      html5.setUrl('/test?x=1');
      expect(w.history.pushState).toHaveBeenCalled();
      expect(w.history.pushState).toHaveBeenCalledWith({}, 'OMG!', '/test?x=1');
    });


    it('should not push new state if url is the same', () => {
      w.location.search = '?x=1';
      html5.setUrl('?x=1');
      expect(w.history.pushState).not.toHaveBeenCalled();
    });


    it('should restore url when location updated', () => {
      w.location.search = '?x=1';

      const onPopstate = w.addEventListener.calls.mostRecent().args[1];

      onPopstate();

      expect(ActionCreator.restoreLocation).toHaveBeenCalled();
      expect(ActionCreator.restoreLocation).toHaveBeenCalledWith({
        location: '?x=1',
        type: Store.TYPE_HTML5
      });
    });


    it('should set url when store updated', () => {
      spyOn(html5, 'setUrl');
      Store.getCleanQuery.and.returnValue({x: 1, y: 2});
      const onChange = Store.addThrottledChangeListener.calls.mostRecent().args[0];

      onChange();
      expect(html5.setUrl).toHaveBeenCalled();
      expect(html5.setUrl).toHaveBeenCalledWith('?x=1&y=2');
    });
  });
});
