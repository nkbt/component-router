describe('InFlux', () => {
  const InFluxInjector = require('inject!../src/InFlux');
  let Store, getDefault, InFlux;


  beforeEach(() => {
    Store = jasmine.createSpyObj('Store', ['']);
    getDefault = jasmine.createSpy('getDefault');
  });


  beforeEach(() => InFlux = InFluxInjector({
    './Store': Store,
    './getDefault': getDefault
  }));


  it('should be ok', () => {
    expect(InFlux).toBeTruthy();
  });
});
