import React from 'react';
const TestUtils = React.addons.TestUtils;

import createComponent from './utils/createComponent';


describe('Url', () => {
  const UrlInjector = require('inject!../src/Url');
  let Store, ActionCreator, urlUtil, Url;
  let storeUnsubscribe;


  beforeEach(() => {
    storeUnsubscribe = jasmine.createSpy('storeUnsubscribe');
    Store = jasmine.createSpyObj('Store', [
      'subscribe', 'dispatch', 'getState', 'getQuery', 'getType']);
    Store.getState.and.returnValue({
      query: {},
      defaultParams: {}
    });
    Store.getQuery.and.returnValue({});
    Store.getType.and.returnValue('HTML6');

    Store.subscribe.and.returnValue(storeUnsubscribe);
    ActionCreator = jasmine.createSpyObj('ActionCreator', ['navigateTo']);
    urlUtil = jasmine.createSpyObj('urlUtil', ['merge', 'isActive']);
  });


  beforeEach(() => Url = UrlInjector({
    './Store': Store,
    './ActionCreator': ActionCreator,
    './urlUtil': urlUtil
  }));


  describe('Init', () => {
    let url;

    beforeEach(() => {
      urlUtil.merge.and.returnValue({href: '/'});
    });

    it('should render link', () => {
      url = createComponent(Url).out;
      expect(TestUtils.isElement(url)).toBeTruthy();
      expect(url.type).toEqual('a');
    });


    it('should render passed children and apply arbitrary props', () => {
      url = createComponent(Url, {x: 1, y: 2, className: 'link'}, 'Test').out;
      expect(url.props.x).toEqual(1);
      expect(url.props.y).toEqual(2);
      expect(url.props.className).toEqual('link');
      expect(url.props.children).toEqual('Test');
    });


    it('should add active class to the link', () => {
      urlUtil.isActive.and.returnValue(true);
      url = createComponent(Url, {className: 'link'}).out;
      expect(url.props.className).toEqual('link active');
    });


    it('should use custom active class', () => {
      urlUtil.isActive.and.returnValue(true);
      url = createComponent(Url, {isActiveClass: 'test'}).out;
      expect(url.props.className).toEqual('test');
    });
  });


  describe('Store interaction', () => {
    let url, div;


    beforeEach(() => {
      urlUtil.merge.and.returnValue({href: '/'});
      Store.getQuery.and.returnValue({x: 1});

      div = document.createElement('div');
      url = React.render(<Url />, div);
    });


    it('should subscribe to Store changes', () => {
      expect(Store.subscribe).toHaveBeenCalled();
    });


    it('should unsubscribe from Store changes when unmounted', () => {
      React.unmountComponentAtNode(div);
      expect(storeUnsubscribe).toHaveBeenCalled();
    });


    it('should set inititial state from Store', () => {
      expect(url.state).toEqual({x: 1});
    });


    it('should update state from Store on change', () => {
      const onChange = Store.subscribe.calls.mostRecent().args[0];

      Store.getQuery.and.returnValue({y: 10});
      onChange();
      expect(url.state).toEqual({y: 10});
    });
  });


  describe('User interaction', () => {
    let url;


    beforeEach(() => {
      urlUtil.merge.and.returnValue({href: '/'});
      url = TestUtils.renderIntoDocument(<Url query={{x: 1}} />);
    });


    it('should prevent default operation', () => {
      const a = React.findDOMNode(url);
      const event = jasmine.createSpyObj('event', ['preventDefault']);

      TestUtils.Simulate.click(a, event);

      expect(event.preventDefault).toHaveBeenCalled();
    });


    it('should navigate on click', () => {
      const a = React.findDOMNode(url);

      TestUtils.Simulate.click(a);

      expect(ActionCreator.navigateTo).toHaveBeenCalled();
      expect(ActionCreator.navigateTo)
        .toHaveBeenCalledWith(jasmine.objectContaining({query: {x: 1}}));
    });
  });
});

