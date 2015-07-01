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


  const createStore = () => Store = StoreInjector({
    'sorted-object': sorted,
    './Constants': Constants,
    './Dispatcher': Dispatcher,
    './urlUtil': urlUtil
  });


  beforeEach(createStore);


  beforeEach(() => reaction = Dispatcher.register.calls.mostRecent().args[0]);


  describe('Init', () => {
    it('should initialize with current url data', () => {
      expect(Store.getQuery()).toEqual({x: 1});
      expect(Store.getPathname()).toEqual('/test');
    });


    it('should have no default params', () => {
      expect(Store.getDefaultParams()).toEqual({});
    });


    it('should set default params', () => {
      urlUtil.parseHref.and.returnValue({});
      createStore();
      expect(Store.getQuery()).toEqual({});
      expect(Store.getPathname()).toEqual('/');
    });
  });


  it('should restore location', () => {
    urlUtil.parseHref.and.returnValue({pathname: '/hello', query: {world: 123}});
    reaction({
      actionType: Constants.RESTORE_LOCATION,
      payload: {location: '/hello?world=123'}
    });

    expect(Store.getPathname()).toEqual('/hello');
    expect(Store.getQuery()).toEqual({world: 123});
  });

  describe('Default params', () => {
    beforeEach(() => {
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


    it('should not override current query with default param', () => {
      reaction({
        actionType: Constants.ADD_DEFAULT_PARAM,
        payload: {namespace: 'x', value: 123}
      });
      expect(Store.getQuery()).toEqual({x: 1, y: 10, z: 100});
    });
  });
});
