describe('ActionCreator', () => {
  const ActionCreatorInjector = require('inject!../src/ActionCreator');
  let Constants, Dispatcher, ActionCreator;


  beforeEach(() => {
    Constants = jasmine.createSpyObj('Constants', ['']);
    Dispatcher = jasmine.createSpyObj('Dispatcher', ['']);
  });


  beforeEach(() => ActionCreator = ActionCreatorInjector({
    './Constants': Constants,
    './Dispatcher': Dispatcher
  }));


  it('should be ok', () => {
    expect(ActionCreator).toBeTruthy();
  });
});
