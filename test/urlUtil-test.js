describe('urlUtil', () => {
  const urlUtilInjector = require('inject!../src/urlUtil');
  let sorted, urlUtil;


  beforeEach(() => {
    sorted = jasmine.createSpy('sorted-object');
    sorted.and.callFake(v => v);
  });


  beforeEach(() => urlUtil = urlUtilInjector({
    'sorted-object': sorted
  }));


  describe('.parseHref', () => {
    it('should return pathname, query and href', () => {
      expect(urlUtil.parseHref('/')).toEqual({
        pathname: '/',
        query: {},
        href: '/'
      });
    });


    it('should take only pathname and query from original href', () => {
      expect(urlUtil.parseHref('http://test.com/test?x=1#anchor')).toEqual({
        pathname: '/test',
        query: {x: '1'},
        href: '/test?x=1'
      });
    });
  });


  describe('.merge', () => {
    it('should keep pathname', () => {
      const merged = urlUtil.merge({pathname: '/test'}, {query: {x: 1}});

      expect(merged).toEqual({
        pathname: '/test',
        query: {x: 1},
        href: '/test?x=1'
      });
    });


    it('should override pathname, but keep query', () => {
      const merged = urlUtil.merge({pathname: '/test', query: {x: 1}}, {pathname: '/'});

      expect(merged).toEqual({
        pathname: '/',
        query: {x: 1},
        href: '/?x=1'
      });
    });


    it('should append new params to query', () => {
      const merged = urlUtil.merge({pathname: '/', query: {x: 1}}, {query: {y: 10}});

      expect(merged).toEqual({
        pathname: '/',
        query: {x: 1, y: 10},
        href: '/?x=1&y=10'
      });
    });


    it('should update existing params', () => {
      const merged = urlUtil.merge({pathname: '/', query: {x: 1}}, {query: {x: 2, y: 10}});

      expect(merged).toEqual({
        pathname: '/',
        query: {x: 2, y: 10},
        href: '/?x=2&y=10'
      });
    });


    it('should merge query and update pathname', () => {
      const merged = urlUtil.merge({pathname: '/', query: {x: 1, y: 10}},
        {pathname: '/test', query: {x: 2, z: 100}});

      expect(merged).toEqual({
        pathname: '/test',
        query: {x: 2, y: 10, z: 100},
        href: '/test?x=2&y=10&z=100'
      });
    });


    it('should sort query params by name', () => {
      urlUtil.merge({pathname: '/', query: {x: 1, y: 10}}, {query: {x: 2, z: 100}});
      expect(sorted).toHaveBeenCalledWith({x: 2, y: 10, z: 100});
    });
  });


  describe('.isActive', () => {
    it('should be active for mathced pathname', () => {
      expect(urlUtil.isActive({pathname: '/test'}, {pathname: '/test'})).toBeTruthy();
    });


    it('should be active for matched query', () => {
      expect(urlUtil.isActive({query: {x: 1}}, {query: {x: 1}}))
        .toBeTruthy();
    });


    it('should be active for query param value match', () => {
      expect(urlUtil.isActive({pathname: '/test', query: {x: 1, y: 10}}, {query: {x: 1}}))
        .toBeTruthy();
    });


    it('should be active for dummy link', () => {
      expect(urlUtil.isActive({pathname: '/test', query: {x: 1, y: 10}}, {}))
        .toBeTruthy();
    });


    it('should not be active for different pathname', () => {
      expect(urlUtil.isActive({pathname: '/test'}, {pathname: '/'})).toBeFalsy();
    });


    it('should not be active for different query', () => {
      expect(urlUtil.isActive({query: {x: 1}}, {query: {y: 10}}))
        .toBeFalsy();
    });


    it('should not be active for query param value mismatch', () => {
      expect(urlUtil.isActive({query: {x: 1, y: 10}}, {query: {x: 2}}))
        .toBeFalsy();
    });
  });
});
