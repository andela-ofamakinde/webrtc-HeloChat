'use strict';

describe('myApp', function() {

  browser.get('');

  it('should automatically redirect to /home.view when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/homeview");
  });

});

describe('textchat', function() {

  beforeEach(function() {
    browser.get('#/textchat');
  });

  var button = element.all(by.id("textbtn"));
  it('should render textchat view when user navigates to /textchat', function() {
    button.click();
    expect(browser.getLocationAbsUrl()).toMatch("/textchat");
  });

});

describe('videochat', function() {

  beforeEach(function() {
    browser.get('#/videochat');
  });

  var button = element.all(by.id("videotbtn"));
  it('should render videochat view when user navigates to /videochat', function() {
    button.click();
    expect(browser.getLocationAbsUrl()).toMatch("/videochat");
  });

});
