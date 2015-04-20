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
    when('/videoandtext', {
    templateUrl: 'app/component/videoandtext/videoandtext.html',
    controller: 'VtCtrl'
  }).
  otherwise({
    redirectTo: '/homeview'
  });
}]);

var homeCtrl = myApp.controller("homeCtrl", function($scope){	
});

// var vTCtrl = myApp.controller("vTCtrl", function($scope){ 
// });