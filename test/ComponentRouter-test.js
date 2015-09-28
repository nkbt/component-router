describe('ComponentRouter', () => {
  const ComponentRouterInjector = require('inject!../src/ComponentRouter');
  let Actions, Store, getDefault, ComponentRouter;


  beforeEach(() => {
    Actions = jasmine.createSpyObj('Actions', ['']);
    Store = jasmine.createSpyObj('Store', ['']);
    getDefault = jasmine.createSpy('getDefault');
  });


  beforeEach(() => ComponentRouter = ComponentRouterInjector({
    './Actions': Actions,
    './Store': Store,
    './getDefault': getDefault
  }));


  it('should be ok', () => {
    expect(ComponentRouter).toBeTruthy();
  });
});
