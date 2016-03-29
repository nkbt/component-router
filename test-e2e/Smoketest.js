'use strict';


module.exports = {
  'Smoketest'(browser) {
    browser
      .url(`${browser.launchUrl}/`)
      .waitForElementVisible('body', 1000)
      .assert.containsText('header', '/foo')
      .assert.containsText('header', '/bar')
      .end();
  }
};
