'use strict';

describe('WebRTC', function() {

  browser.get('');

  it('should automatically redirect to /home.view when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/homeview");
  });

});

describe('videoandtext', function() {

  beforeEach(function() {
    browser.get('#/homeview');
  });

  var button = element.all(by.id("startbtn"));
  it('should render video and text view when user navigates to /videoandtext', function() {
    button.click();
    expect(browser.getLocationAbsUrl()).toMatch("/videoandtext");
  });

});

