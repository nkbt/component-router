describe('ActionCreator', () => {
  const ActionCreatorInjector = require('inject!../src/ActionCreator');
  let Constants, ActionCreator;


  beforeEach(() => {
    Constants = jasmine.createSpyObj('Constants', ['']);
  });


  beforeEach(() => ActionCreator = ActionCreatorInjector({
    './Constants': Constants
  }));


  it('should return an appropriate NAVIGATE_TO action', () => {
    Constants.NAVIGATE_TO = 'test';
    const action = ActionCreator.navigateTo({pathname: 'pathname', query: 'query'});

    expect(action).toEqual({
      actionType: 'test',
      payload: {pathname: 'pathname', query: 'query'}
    });
  });


  it('should return an appropriate ADD_DEFAULT_PARAM action', () => {
    Constants.ADD_DEFAULT_PARAM = 'test';
    const action = ActionCreator.addDefaultParam({namespace: 'namespace', value: 'value'});

    expect(action).toEqual({
      actionType: 'test',
      payload: {namespace: 'namespace', value: 'value'}
    });
  });


  it('should return an appropriate REMOVE_PARAM action', () => {
    Constants.REMOVE_PARAM = 'test';
    const action = ActionCreator.removeParam({namespace: 'namespace'});

    expect(action).toEqual({
      actionType: 'test',
      payload: {namespace: 'namespace'}
    });
  });


  it('should return an appropriate RESTORE_LOCATION action', () => {
    Constants.RESTORE_LOCATION = 'test';
    const action = ActionCreator.restoreLocation({location: 'location'});

    expect(action).toEqual({
      actionType: 'test',
      payload: {
        location: 'location',
        type: undefined
      }
    });
  });
});
