describe('Store', () => {
  const StoreInjector = require('inject!../src/Store');
  let Constants, Dispatcher, urlUtil, Store;


  beforeEach(() => {
    Constants = {};
    Dispatcher = jasmine.createSpyObj('Dispatcher', ['register']);
    urlUtil = jasmine.createSpyObj('urlUtil', ['parseHref']);
    urlUtil.parseHref.and.returnValue({pathname: '/', query: {x: 1}});
  });


  beforeEach(() => Store = StoreInjector({
    './Constants': Constants,
    './Dispatcher': Dispatcher,
    './urlUtil': urlUtil
  }));


  it('should be ok', () => {
    expect(Store).toBeTruthy();
  });
});
