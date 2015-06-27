describe('Html4', () => {
  const Html4Injector = require('inject!../../src/Location/Html4');
  let Store, ActionCreator, Html4;
  let storeUnsubscribe;


  beforeEach(() => {
    storeUnsubscribe = jasmine.createSpy('storeUnsubscribe');
    Store = jasmine.createSpyObj('Store', ['addChangeListener', 'getCleanQuery', 'getPathname']);
    Store.addChangeListener.and.returnValue(storeUnsubscribe);

    ActionCreator = jasmine.createSpyObj('ActionCreator', ['restoreLocation']);

    spyOn(window, 'addEventListener').and.returnValue(false);
    spyOn(window, 'removeEventListener').and.returnValue(false);
    spyOn(window.history, 'pushState').and.returnValue(false);
  });


  beforeEach(() => Html4 = Html4Injector({
    '../Store': Store,
    '../ActionCreator': ActionCreator
  }));


  it('should be ok', () => {
    expect(Html4).toBeTruthy();
  });
});
