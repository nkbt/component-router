'use strict';


const WAIT = 1000;

module.exports = {
  'Test for component appears on the screen'(browser) {
    browser
      .url(`${browser.launchUrl}/`)
      .waitForElementVisible('body', WAIT)
      .assert.containsText('body', '{"pathname":"/quickstart","query":{"page":"quickstart"}}')
      .assert.containsText('body', '{"pathname":"/foobar","query":{"page":"quickstart"}}')
      .end();
  }
};
