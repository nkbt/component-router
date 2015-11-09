//describe('urlUtil', () => {
//  const urlUtilInjector = require('inject!../src/urlUtil');
//  let sorted, urlUtil;
//
//
//  beforeEach(() => {
//    sorted = jasmine.createSpy('sortedObject');
//    sorted.and.callFake(v => v);
//  });
//
//
//  beforeEach(() => urlUtil = urlUtilInjector({
//    './sortedObject': sorted
//  }));
//
//
//  describe('.parseHref', () => {
//    it('should return query and href', () => {
//      expect(urlUtil.parseHref('/')).toEqual({
//        query: {},
//        href: ''
//      });
//    });
//
//
//    it('should take only query from original href', () => {
//      expect(urlUtil.parseHref('http://test.com/test?x=1#anchor')).toEqual({
//        query: {x: '1'},
//        href: '?x=1'
//      });
//    });
//  });
//
//
//  describe('.merge', () => {
//    it('should append new params to query', () => {
//      const merged = urlUtil.merge({query: {x: 1}}, {query: {y: 10}});
//
//      expect(merged).toEqual({
//        query: {x: 1, y: 10},
//        href: '?x=1&y=10'
//      });
//    });
//
//
//    it('should update existing params', () => {
//      const merged = urlUtil.merge({query: {x: 1}}, {query: {x: 2, y: 10}});
//
//      expect(merged).toEqual({
//        query: {x: 2, y: 10},
//        href: '?x=2&y=10'
//      });
//    });
//
//
//    it('should merge query', () => {
//      const merged = urlUtil.merge({query: {x: 1, y: 10}},
//        {query: {x: 2, z: 100}});
//
//      expect(merged).toEqual({
//        query: {x: 2, y: 10, z: 100},
//        href: '?x=2&y=10&z=100'
//      });
//    });
//
//
//    it('should sort query params by name', () => {
//      urlUtil.merge({query: {x: 1, y: 10}}, {query: {x: 2, z: 100}});
//      expect(sorted).toHaveBeenCalledWith({x: 2, y: 10, z: 100});
//    });
//  });
//
//
//  describe('.isActive', () => {
//    it('should be active for matched query', () => {
//      expect(urlUtil.isActive({query: {x: 1}}, {query: {x: 1}}))
//        .toBeTruthy();
//    });
//
//
//    it('should be active for query param value match', () => {
//      expect(urlUtil.isActive({query: {x: 1, y: 10}}, {query: {x: 1}}))
//        .toBeTruthy();
//    });
//
//
//    it('should be active for dummy link', () => {
//      expect(urlUtil.isActive({query: {x: 1, y: 10}}, {}))
//        .toBeTruthy();
//    });
//
//
//    it('should not be active for different query', () => {
//      expect(urlUtil.isActive({query: {x: 1}}, {query: {y: 10}}))
//        .toBeFalsy();
//    });
//
//
//    it('should not be active for query param value mismatch', () => {
//      expect(urlUtil.isActive({query: {x: 1, y: 10}}, {query: {x: 2}}))
//        .toBeFalsy();
//    });
//  });
//});
