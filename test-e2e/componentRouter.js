'use strict';


const WAIT = 1000;

module.exports = {
  'Test for component appears on the screen'(browser) {
    browser
      .url(`${browser.launchUrl}/`)
      .waitForElementVisible('body', WAIT)
      .assert.containsText('body', 'Quickstart')
      .assert.containsText('body', 'FooBar')
      .end();
  }
};
