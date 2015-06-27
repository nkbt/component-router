describe('Url', () => {
  const UrlInjector = require('inject!../src/Url');
  let Store, ActionCreator, urlUtil, Url;


  beforeEach(() => {
    Store = jasmine.createSpyObj('Store', ['']);
    ActionCreator = jasmine.createSpyObj('ActionCreator', ['']);
    urlUtil = jasmine.createSpyObj('urlUtil', ['']);
  });


  beforeEach(() => Url = UrlInjector({
    './Store': Store,
    './ActionCreator': ActionCreator,
    './urlUtil': urlUtil
  }));


  it('should be ok', () => {
    expect(Url).toBeTruthy();
  });
});

