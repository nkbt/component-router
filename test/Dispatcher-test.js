describe('Dispatcher', () => {
  const DispatcherInjector = require('inject!../src/Dispatcher');
  let Dispatcher;


  beforeEach(() => Dispatcher = DispatcherInjector({}));


  it('should be ok', () => {
    expect(Dispatcher).toBeTruthy();
  });
});
