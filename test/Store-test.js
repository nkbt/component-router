describe('Store', () => {
  const StoreInjector = require('inject!../src/Store');
  let sorted, Constants, Dispatcher, urlUtil, Store, reaction;


  beforeEach(() => sorted = jasmine.createSpy('sorted-object').and.callFake(v => v));


  beforeEach(() => {
    Constants = {};
    Constants.NAVIGATE_TO = 0;
    Constants.ADD_DEFAULT_PARAM = 1;
    Constants.REMOVE_PARAM = 2;
    Constants.RESTORE_LOCATION = 3;

    Dispatcher = jasmine.createSpyObj('Dispatcher', ['register']);
    urlUtil = jasmine.createSpyObj('urlUtil', ['parseHref']);
    urlUtil.parseHref.and.returnValue({pathname: '/test', query: {x: 1}});
  });


  const createStore = () => {
    Store = StoreInjector({
      'sorted-object': sorted,
      './Constants': Constants,
      './Dispatcher': Dispatcher,
      './urlUtil': urlUtil
    });
    reaction = Dispatcher.register.calls.mostRecent().args[0];
  };


  describe('Init', () => {
    it('should initialize with current url data', () => {
      createStore();
      expect(Store.getQuery()).toEqual({x: 1});
      expect(Store.getPathname()).toEqual('/test');
    });


    it('should have no default params', () => {
      createStore();
      expect(Store.getDefaultParams()).toEqual({});
    });


    it('should set default params', () => {
      urlUtil.parseHref.and.returnValue({});
      createStore();
      expect(Store.getQuery()).toEqual({});
      expect(Store.getPathname()).toEqual('/');
    });
  });


  describe('Restore location', () => {
    beforeEach(() => {
      createStore();
      urlUtil.parseHref.and.returnValue({pathname: '/hello', query: {world: 123}});
      reaction({
        actionType: Constants.RESTORE_LOCATION,
        payload: {location: '/hello?world=123'}
      });
    });


    it('should restore location', () => {
      expect(Store.getPathname()).toEqual('/hello');
      expect(Store.getQuery()).toEqual({world: 123});
    });


    it('should sort query params when restoring location', () => {
      expect(sorted.calls.mostRecent().args).toEqual([{world: 123}]);
    });
  });


  describe('Default params', () => {
    beforeEach(() => {
      createStore();
      reaction({
        actionType: Constants.ADD_DEFAULT_PARAM,
        payload: {namespace: 'y', value: 10}
      });
      reaction({
        actionType: Constants.ADD_DEFAULT_PARAM,
        payload: {namespace: 'z', value: 100}
      });
    });


    it('should add default params', () => {
      expect(Store.getDefaultParams()).toEqual({y: 10, z: 100});
    });


    it('should merge current query with default params', () => {
      expect(Store.getQuery()).toEqual({x: 1, y: 10, z: 100});
    });


    it('should not override existing query param with default one', () => {
      reaction({
        actionType: Constants.ADD_DEFAULT_PARAM,
        payload: {namespace: 'x', value: 123}
      });
      expect(Store.getQuery()).toEqual({x: 1, y: 10, z: 100});
    });


    it('should sort query params when adding default one', () => {
      expect(sorted.calls.mostRecent().args).toEqual([{x: 1, y: 10, z: 100}]);
    });
  });


  describe('Remove param', () => {
    beforeEach(() => {
      urlUtil.parseHref.and.returnValue({query: {x: 1, y: 10}});
      createStore();
      reaction({
        actionType: Constants.ADD_DEFAULT_PARAM,
        payload: {namespace: 'z', value: 100}
      });
    });


    it('should remove param from query', () => {
      expect(Store.getQuery()).toEqual({x: 1, y: 10, z: 100});
      reaction({actionType: Constants.REMOVE_PARAM, payload: {namespace: 'x'}});
      expect(Store.getQuery()).toEqual({y: 10, z: 100});
    });


    it('should remove param from default params', () => {
      expect(Store.getDefaultParams()).toEqual({z: 100});
      reaction({actionType: Constants.REMOVE_PARAM, payload: {namespace: 'z'}});
      expect(Store.getDefaultParams()).toEqual({});
    });


    it('should sort query params upon removal', () => {
      reaction({actionType: Constants.REMOVE_PARAM, payload: {namespace: 'x'}});
      expect(sorted.calls.mostRecent().args).toEqual([{y: 10, z: 100}]);
    });
  });
});
