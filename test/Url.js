describe('Url', () => {
  const UrlInjector = require('inject!../src/Url');
  let Store, ActionCreator, UrlUtil, Url;


  beforeEach(() => {
    Store = jasmine.createSpyObj('Store', ['']);
    ActionCreator = jasmine.createSpyObj('ActionCreator', ['']);
    UrlUtil = jasmine.createSpyObj('UrlUtil', ['']);
  });


  beforeEach(() => Url = UrlInjector({
    './Store': Store,
    './ActionCreator': ActionCreator,
    './UrlUtil': UrlUtil
  }));


  it('should be ok', () => {
    expect(Url).toBeTruthy();
  });
});

