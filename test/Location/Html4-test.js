describe('Html4', () => {
  const Html4Injector = require('inject!../../src/Location/Html4');
  let Store, ActionCreator, Html4;


  beforeEach(() => {
    Store = jasmine.createSpyObj('Store', ['']);
    ActionCreator = jasmine.createSpyObj('ActionCreator', ['']);
  });


  beforeEach(() => Html4 = Html4Injector({
    '../Store': Store,
    '../ActionCreator': ActionCreator
  }));


  it('should be ok', () => {
    expect(Html4).toBeTruthy();
  });
});
