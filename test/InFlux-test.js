describe('InFlux', () => {
  const InFluxInjector = require('inject!../src/InFlux');
  let ActionCreator, Store, getDefault, InFlux;


  beforeEach(() => {
    ActionCreator = jasmine.createSpyObj('ActionCreator', ['']);
    Store = jasmine.createSpyObj('Store', ['']);
    getDefault = jasmine.createSpy('getDefault');
  });


  beforeEach(() => InFlux = InFluxInjector({
    './ActionCreator': ActionCreator,
    './Store': Store,
    './getDefault': getDefault
  }));


  it('should be ok', () => {
    expect(InFlux).toBeTruthy();
  });
});
