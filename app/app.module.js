var myApp = angular.module("myApp", ['ngRoute']);

myApp.config(['$routeProvider',
  function($routeProvider) {
  $routeProvider.
  when('/homeview', {
    templateUrl: 'app/component/home/home.view.html',
    controller: 'homeCtrl'
  }).
  when('/textchat', {
    templateUrl: 'app/component/textchat/text.view.html',
    controller: 'RespokeTextController'
  }).
   when('/videochat', {
    templateUrl: 'app/component/videochat/video.view.html',
    controller: 'RespokeVideoController'
  }).
  otherwise({
    redirectTo: '/homeview'
  });
}]);

var homeCtrl = myApp.controller("homeCtrl", function($scope){	
})