import Flux from 'flux';

describe('Dispatcher', () => {
  const DispatcherInjector = require('inject!../src/Dispatcher');
  let Dispatcher;


  beforeEach(() => Dispatcher = DispatcherInjector({}));


  it('should be instance of Flux Dispatcher', () => {
    expect(Dispatcher instanceof Flux.Dispatcher).toBeTruthy();
  });
});
