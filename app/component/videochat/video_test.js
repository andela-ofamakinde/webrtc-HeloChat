describe('RespokeVideoController', function() {
  beforeEach(module('myApp'));
  var $controller, $rootScope, RespokeVideoController, $scope;
  

  beforeEach(inject(function(_$controller_, $rootScope){
    $controller = _$controller_;
    $scope = $rootScope.$new;
   
    console.log("hiii");
  }));

  beforeEach(function() {
    var RespokeTextController;
      $scope = {};
      controller = $controller('RespokeVideoController', { $scope: $scope });
      console.log('testing');
  });

  describe('Placeholder test', function(){
    it('it should add', function(){
      expect(1+1).toEqual(2);
      console.log('2');
    })
  });


});



