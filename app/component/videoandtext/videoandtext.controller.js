// //set the video elements
// function setVideo(elementId, videoElement) {
// var videoParent = document.getElementById(elementId);
// videoParent.innerHTML = "";
// videoParent.appendChild(videoElement);
// }

// var vTCtrl = myApp.controller('VtCtrl', function($scope) {
//  $scope.username = "";
//  $scope.friendId = "";
//  $scope.activeCall = null;

//  var callOptions = {
//   onLocalMedia: function(evt) {
//     setVideo('localVideoSource', evt.element)
//   },

//   onConnect: function(evt) {
//    setVideo('remoteVideoSource', evt.element)
//   }
// };

// $scope.client = respoke.Client({
//   appId: "69f1abbe-93d1-40db-aa81-b03858ec98c3",
//   baseURL: "https://api.respoke.io",
//   developmentMode: true
// });

// //connect events
// $scope.client.listen('connect', function () {
//     $scope.$apply();
// });

// // call events
// $scope.client.listen('call', function(evt) {
//  $scope.activeCall = evt.call;

//  if ($scope.activeCall.caller !== true) {
//  $scope.activeCall.answer(callOptions);
//  $scope.activeCall.listen('hangup', function () {
//   $scope.activeCall = null;
//   $scope.$apply();
// });
//  }

// $scope.$apply();
// });

// //to connect the two callers
// $scope.connect = function () {
//   console.log($scope.username);
//  $scope.client.connect({
//  endpointId: $scope.username
//  });
// };

// //to make calls
// $scope.call = function () {
//  var recipientEndpoint = $scope.client.getEndpoint({ id: $scope.friendId });
//   $scope.activeCall = recipientEndpoint.startVideoCall(callOptions);
// };

// //to hangup calls
//  $scope.hangup = function () {
//  $scope.activeCall.hangup();
//  $scope.activeCall = null;
//  };

// });
