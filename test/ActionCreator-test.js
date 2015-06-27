describe('ActionCreator', () => {
  const ActionCreatorInjector = require('inject!../src/ActionCreator');
  let Constants, Dispatcher, ActionCreator;


  beforeEach(() => {
    Constants = jasmine.createSpyObj('Constants', ['']);
    Dispatcher = jasmine.createSpyObj('Dispatcher', ['dispatch']);
  });


  beforeEach(() => ActionCreator = ActionCreatorInjector({
    './Constants': Constants,
    './Dispatcher': Dispatcher
  }));


  it('should dispatch NAVIGATE_TO', () => {
    Constants.NAVIGATE_TO = 'test';
    ActionCreator.navigateTo({pathname: 'pathname', query: 'query'});
    expect(Dispatcher.dispatch).toHaveBeenCalled();
    expect(Dispatcher.dispatch).toHaveBeenCalledWith({
      actionType: 'test',
      payload: {pathname: 'pathname', query: 'query'}
    });
  });


  it('should dispatch ADD_DEFAULT_PARAM', () => {
    Constants.ADD_DEFAULT_PARAM = 'test';
    ActionCreator.addDefaultParam({namespace: 'namespace', value: 'value'});
    expect(Dispatcher.dispatch).toHaveBeenCalled();
    expect(Dispatcher.dispatch).toHaveBeenCalledWith({
      actionType: 'test',
      payload: {namespace: 'namespace', value: 'value'}
    });
  });


  it('should dispatch ADD_DEFAULT_PARAM', () => {
    Constants.REMOVE_PARAM = 'test';
    ActionCreator.removeParam({namespace: 'namespace'});
    expect(Dispatcher.dispatch).toHaveBeenCalled();
    expect(Dispatcher.dispatch).toHaveBeenCalledWith({
      actionType: 'test',
      payload: {namespace: 'namespace'}
    });
  });


  it('should dispatch restoreLocation', () => {
    Constants.RESTORE_LOCATION = 'test';
    ActionCreator.restoreLocation({location: 'location'});
    expect(Dispatcher.dispatch).toHaveBeenCalled();
    expect(Dispatcher.dispatch).toHaveBeenCalledWith({
      actionType: 'test',
      payload: {location: 'location'}
    });
  });
});
