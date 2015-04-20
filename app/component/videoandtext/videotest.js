describe("Unit: Testing Controllers", function() {

  beforeEach(module('myApp'));

   it('should have a VtCtrl controller', function() {
     expect(myApp.VtCtrl).not.to.equal(null);
  });
  var $controller;

  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
  }));

});