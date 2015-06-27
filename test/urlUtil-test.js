describe('urlUtil', () => {
  const urlUtil = require('inject!../src/urlUtil')({
  });


  it('should be ok', () => {
    expect(urlUtil).toBeTruthy();
  });
});
