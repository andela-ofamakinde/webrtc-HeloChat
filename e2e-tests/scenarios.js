'use strict';
describe('start page', function() {
  browser.get('/');
  it('should connect to homeview page' , function(){
    expect(browser.getLocationAbsUrl()).toBe("/homeview");
  });

  it('should connect to videoandtext page', function() {
    var button = element(by.id('startbtn'));
    button.click();
    expect(browser.getLocationAbsUrl()).toBe('/videoandtext');
  });

  it('should expect username to be displayed', function() {
    // console.log(element(by.id('userinput')));
    element(by.css('#userinput')).sendKeys('ty');
    // browser.sleep(5000);
    var button = element(by.css("#butn")).click();
    browser.sleep(4000);
    // console.log(1, button)
    // button.click();
    // browser.pause();
    // console.log(222, element(by.css('.connected')).getText().getText());
    var username = element(by.css('.connected')).getText();
    expect(username).toMatch('ty');
  });
});
  

    