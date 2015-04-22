describe("myApp", function(){
  beforeEach(module('myApp'));
  var scope, controller;

  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    controller = $controller("VtCtrl", {
      $scope: scope
    });
  }));

  it('checks for the username variable', function(){
    expect(scope.username).toEqual('');
  });
});