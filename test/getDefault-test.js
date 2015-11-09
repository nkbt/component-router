//  describe('getDefault', () => {
//    const getDefaultInjector = require('inject!../src/getDefault');
//    let Constants, getDefault;
//
//
//    beforeEach(() => {
//      Constants = jasmine.createSpyObj('Constants', ['']);
//    });
//
//
//    beforeEach(() => getDefault = getDefaultInjector({
//      './Constants': Constants
//    }));
//
//
//    it('should return DEFAULT', () => {
//      Constants.DEFAULT = 'test';
//      expect(getDefault()).toEqual('test');
//    });
//  });
