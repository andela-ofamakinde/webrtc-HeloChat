'use strict';

describe('myApp', function() {

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
  it('should render textchat view when user navigates to /videoandtext', function() {
    button.click();
    expect(browser.getLocationAbsUrl()).toMatch("/videoandtext");
  });

});

