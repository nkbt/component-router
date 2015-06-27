window.mockedWindow = {};


function init() {
  window.mockedWindow = jasmine.createSpyObj('window', ['init']);
  window.mockedWindow.init.and.returnValue(init);
}

window.mockedWindow.init = init;


beforeEach(init);
