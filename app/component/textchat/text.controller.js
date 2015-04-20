myApp.controller("RespokeTextController", ['$scope', 
function($scope) {
var appId = '69f1abbe-93d1-40db-aa81-b03858ec98c3';
$scope.activeCall = null;
$scope.messageArray = [];
$scope.myMessage = [];

$scope.client = respoke.createClient({
appId: appId,
developmentMode: true
});

$scope.status = 'Not Connected';

$scope.client.listen('connect', function() {
	$scope.$apply(function() {
		$scope.status = 'You are connected!';
	});
});

$scope.client.listen('message', function(evt) {
	$scope.$apply(function() {
		$scope.message = evt.message.message;
		$scope.messageArray.push({
			remote: $scope.remote,
			message: $scope.message
		});
	});
});

$scope.client.listen('call', function(evt) {
	$scope.activeCall = evt.call;

	if ($scope.activeCall !== true) {
		$scope.activeCall.answer({constraints: {audio: true, video: false}}); 
		$scope.activeCall.listen('hangup', function() {
			$scope.activeCall = null;
		});
	};
});

$scope.doLogin = function() {
	console.log($scope.endpoint);
	$scope.client.connect({
		endpointId : $scope.endpoint
	});
};


$scope.sendMessage = function() {
  console.log('Nomolos');
	// $scope.myMessage.push({message: $scope.messageText});

	// var endpoint = $scope.client.getEndpoint({id: $scope.remote});

	// endpoint.sendMessage({message: $scope.messageText});

};

$scope.makeCall = function() {
	var endpoint = $scope.client.getEndpoint({id: $scope.remote});
	$scope.activeCall = endpoint.startAudioCall();
};

$scope.endCall = function() {
	if ($scope.activeCall) {
		$scope.activeCall.hangup();
		$scope.activeCall = null;
	};
};

}]);