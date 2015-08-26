describe('Store', () => {
  const StoreInjector = require('inject!../src/Store');
  const sortedObject = require('../src/sortedObject');

  let sorted, Store, Reducer;


  beforeEach(() => {
    Reducer = jasmine.createSpy('reducer');
    sorted = jasmine.createSpy('sortedObject').and.callFake(sortedObject);
  });


  const createStore = () => {
    Store = StoreInjector({
      './sortedObject': sorted,
      './reducers': Reducer
    });
  };

  describe('getState helper methods', function () {
    beforeEach(function () {
      createStore();
      Store.getState = jasmine.createSpy('getState')
        .and.returnValue({
          query: {x: '400'},
          pathname: '/test',
          type: 'HTML6',
          defaultParams: {
            page: 'admin',
            day: 'today'
          }
        });
    });


    describe('getQuery', function () {
      it('should return the query from getState()', function () {
        expect(Store.getQuery()).toEqual({x: '400'});
      });
    });


    describe('getPathname', function () {
      it('should return the pathname from getState()', function () {
        expect(Store.getPathname()).toBe('/test');
      });
    });


    describe('getType', function () {
      it('should return the type from getState()', function () {
        expect(Store.getType()).toBe('HTML6');
      });
    });


    describe('getDefaultParams', function () {
      it('should return the defaultParams from getState()', function () {
        expect(Store.getDefaultParams()).toEqual({
          page: 'admin',
          day: 'today'
        });
      });
    });
  });


  describe('addThrottledChangeListener', () => {
    beforeEach(() => {
      createStore();
      Store.subscribe = jasmine.createSpy('subscribe');
    });


    it('should call subscribe once', () => {
      Store.addThrottledChangeListener(x => x);
      expect(Store.subscribe.calls.count()).toBe(1);
    });


    it('should return a function that calls unsubscribe', () => {
      const reduxUnsubscribe = jasmine.createSpy('unsubscribe');

      Store.subscribe.and.returnValue(reduxUnsubscribe);
      Store.addThrottledChangeListener(x => x)();
      expect(reduxUnsubscribe.calls.count()).toBe(1);
    });
  });


  describe('getCleanQuery', () => {
    beforeEach(() => {
      createStore();
      Store.getState = jasmine.createSpy('getState');
      Store.getState.and.returnValue({
        pathname: '/',
        query: {x: '1', y: '2'},
        defaultParams: {y: '2'}
      });
    });


    it('should return clean query without default params', () => {
      expect(Store.getCleanQuery()).toEqual({x: '1'});
    });


    it('should sort query params when getting clean query', () => {
      Store.getCleanQuery();
      expect(sorted.calls.mostRecent().args).toEqual([{x: '1'}]);
    });


    it('should not remove any keys from query if there are no default params', () => {
      Store.getState.and.returnValue({
        pathname: '/',
        query: {x: '1', y: '2'},
        defaultParams: {}
      });
      expect(Store.getCleanQuery()).toEqual({x: '1', y: '2'});
    });


    it('should not remove key from query if value is not equal to default', () => {
      Store.getState.and.returnValue({
        pathname: '/',
        query: {x: '1', y: '2'},
        defaultParams: {y: '10'}
      });
      expect(Store.getCleanQuery()).toEqual({x: '1', y: '2'});
    });
  });
});
