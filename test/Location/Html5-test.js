describe('Html5', () => {
  const Html5Injector = require('inject!../../src/Location/Html5');
  let Store, ActionCreator, Html5;


  beforeEach(() => {
    Store = jasmine.createSpyObj('Store', ['']);
    ActionCreator = jasmine.createSpyObj('ActionCreator', ['']);
  });


  beforeEach(() => Html5 = Html5Injector({
    '../Store': Store,
    '../ActionCreator': ActionCreator
  }));


  it('should be ok', () => {
    expect(Html5).toBeTruthy();
  });
});
