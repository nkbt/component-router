//  describe('Actions', () => {
//    const ActionsInjector = require('inject!../src/Actions');
//    let Constants, Actions;
//
//
//    beforeEach(() => {
//      Constants = jasmine.createSpyObj('Constants', ['']);
//    });
//
//
//    beforeEach(() => Actions = ActionsInjector({
//      './Constants': Constants
//    }));
//
//
//    it('should return an appropriate NAVIGATE_TO action', () => {
//      Constants.NAVIGATE_TO = 'test';
//      const action = Actions.navigateTo({query: 'query'});
//
//      expect(action).toEqual({
//        type: 'test',
//        payload: {query: 'query'}
//      });
//    });
//
//
//    it('should return an appropriate ADD_DEFAULT_PARAM action', () => {
//      Constants.ADD_DEFAULT_PARAM = 'test';
//      const action = Actions.addDefaultParam({namespace: 'namespace', value: 'value'});
//
//      expect(action).toEqual({
//        type: 'test',
//        payload: {namespace: 'namespace', value: 'value'}
//      });
//    });
//
//
//    it('should return an appropriate REMOVE_PARAM action', () => {
//      Constants.REMOVE_PARAM = 'test';
//      const action = Actions.removeParam({namespace: 'namespace'});
//
//      expect(action).toEqual({
//        type: 'test',
//        payload: {namespace: 'namespace'}
//      });
//    });
//
//
//    it('should return an appropriate RESTORE_LOCATION action', () => {
//      Constants.RESTORE_LOCATION = 'test';
//      const action = Actions.restoreLocation({location: 'location'});
//
//      expect(action).toEqual({
//        type: 'test',
//        payload: {
//          location: 'location',
//          locationType: undefined
//        }
//      });
//    });
//  });
