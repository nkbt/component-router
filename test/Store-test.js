//describe('Store', () => {
//  const StoreInjector = require('inject!../src/Store');
//  const sortedObject = require('../src/sortedObject');
//
//  let sorted, Store, Reducer;
//
//
//  beforeEach(() => {
//    Reducer = jasmine.createSpy('reducer');
//    sorted = jasmine.createSpy('sortedObject').and.callFake(sortedObject);
//  });
//
//
//  const createStore = () => {
//    Store = StoreInjector({
//      './sortedObject': sorted,
//      './reducers': Reducer
//    });
//  };
//
//  describe('getState helper methods', () => {
//    beforeEach(() => {
//      createStore();
//      Store.getState = jasmine.createSpy('getState')
//        .and.returnValue({
//          query: {x: '400'},
//          type: 'HTML6',
//          defaultParams: {
//            page: 'admin',
//            day: 'today'
//          }
//        });
//    });
//
//
//    describe('getQuery', () => {
//      it('should return the query from getState()', () => {
//        expect(Store.getQuery()).toEqual({x: '400'});
//      });
//    });
//
//
//    describe('getType', () => {
//      it('should return the type from getState()', () => {
//        expect(Store.getType()).toBe('HTML6');
//      });
//    });
//
//
//    describe('getDefaultParams', () => {
//      it('should return the defaultParams from getState()', () => {
//        expect(Store.getDefaultParams()).toEqual({
//          page: 'admin',
//          day: 'today'
//        });
//      });
//    });
//  });
//
//
//  describe('getCleanQuery', () => {
//    beforeEach(() => {
//      createStore();
//      Store.getState = jasmine.createSpy('getState');
//      Store.getState.and.returnValue({
//        query: {x: '1', y: '2'},
//        defaultParams: {y: '2'}
//      });
//    });
//
//
//    it('should return clean query without default params', () => {
//      expect(Store.getCleanQuery()).toEqual({x: '1'});
//    });
//
//
//    it('should sort query params when getting clean query', () => {
//      Store.getCleanQuery();
//      expect(sorted.calls.mostRecent().args).toEqual([{x: '1'}]);
//    });
//
//
//    it('should not remove any keys from query if there are no default params', () => {
//      Store.getState.and.returnValue({
//        query: {x: '1', y: '2'},
//        defaultParams: {}
//      });
//      expect(Store.getCleanQuery()).toEqual({x: '1', y: '2'});
//    });
//
//
//    it('should not remove key from query if value is not equal to default', () => {
//      Store.getState.and.returnValue({
//        query: {x: '1', y: '2'},
//        defaultParams: {y: '10'}
//      });
//      expect(Store.getCleanQuery()).toEqual({x: '1', y: '2'});
//    });
//  });
//});
