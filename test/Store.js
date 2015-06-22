describe('Store', () => {
  const StoreInjector = require('inject!../src/Store');
  let Constants, Dispatcher, UrlUtil, Store;


  beforeEach(() => {
    Constants = {};
    Dispatcher = jasmine.createSpyObj('Dispatcher', ['register']);
    UrlUtil = jasmine.createSpyObj('UrlUtil', ['parseHref']);
    UrlUtil.parseHref.and.returnValue({pathname: '/', query: {x: 1}});
  });


  beforeEach(() => Store = StoreInjector({
    './Constants': Constants,
    './Dispatcher': Dispatcher,
    './UrlUtil': UrlUtil
  }));


  it('should be ok', () => {
    expect(Store).toBeTruthy();
  });
});
