describe("Unit: Testing Controllers", function() {

  beforeEach(module('myApp'));

  // it('should have a VtCtrl controller', function() {
  //   expect(myApp.VtCtrl).not.to.equal(null);
  // });
  var $controller;

  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  describe('$scope.me', function() {
    it('initialize the text messaging', function() {
     var $scope = {};
     var controller = $controller('VtCtrl', {$scope: $scope});
     $scope.username = 'ayoola';
     $scope.me();
     expect($scope.me).toEqual($scope.username);
    });
  });



});