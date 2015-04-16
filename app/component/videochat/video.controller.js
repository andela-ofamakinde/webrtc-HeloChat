function setVideo(elementId, videoElement) {
var videoParent = document.getElementById(elementId);
videoParent.innerHTML = "";
videoParent.appendChild(videoElement);
}

myApp.controller("RespokeVideoController", function($scope) {

$scope.activeCall = null;

$scope.username = "";
$scope.friendId = "";

var callOptions = {
    onLocalMedia: function(evt) {
        setVideo('localVideoSource', evt.element)
    },

    onConnect: function(evt) {
        setVideo('remoteVideoSource', evt.element)
    }

};


$scope.client = respoke.Client({
    appId: "69f1abbe-93d1-40db-aa81-b03858ec98c3",
    baseURL: "https://api.respoke.io",
    developmentMode: true
});

// Listen for the 'connect' event
$scope.client.listen('connect', function () {
    $scope.$apply();
});

// Listen for the 'call' event
$scope.client.listen('call', function(evt) {

$scope.activeCall = evt.call;

if ($scope.activeCall.caller !== true) {
 $scope.activeCall.answer(callOptions);
 $scope.activeCall.listen('hangup', function () {
  $scope.activeCall = null;
  $scope.$apply();
});
 }
$scope.$apply();
});


$scope.connect = function () {
    $scope.client.connect({
        endpointId: $scope.username
    });
};

$scope.call = function () {
    var recipientEndpoint = $scope.client.getEndpoint({ id: $scope.friendId });
    $scope.activeCall = recipientEndpoint.startVideoCall(callOptions);
};

$scope.hangup = function () {
    $scope.activeCall.hangup();
    $scope.activeCall = null;
};

});
