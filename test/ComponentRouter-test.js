describe('ComponentRouter', () => {
  const ComponentRouterInjector = require('inject!../src/ComponentRouter');
  let ActionCreator, Store, getDefault, ComponentRouter;


  beforeEach(() => {
    ActionCreator = jasmine.createSpyObj('ActionCreator', ['']);
    Store = jasmine.createSpyObj('Store', ['']);
    getDefault = jasmine.createSpy('getDefault');
  });


  beforeEach(() => ComponentRouter = ComponentRouterInjector({
    './ActionCreator': ActionCreator,
    './Store': Store,
    './getDefault': getDefault
  }));


  it('should be ok', () => {
    expect(ComponentRouter).toBeTruthy();
  });
});
