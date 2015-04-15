myApp.controller("videoCtrl", ['$scope', function($scope){

  $scope.toggle = false;

  $scope.showForm = function() {
    $scope.toggle = true;
  };

  $scope.offerToggle = false;

  $scope.showOfferToggle = function() {
    $scope.offerToggle = !false;
  };

  var cfg = { 'iceServers': [{ 'url': 'stun:stun.l.google.com:19302' }]},
    con = { 'optional': [{'DtlsSrtpKeyAgreement': true}] };

  var channel, activedc;
  var alice = new RTCPeerConnection(cfg, con);

  var local = document.getElementById('alice');
  var mediaConstraints = {audio: true, video: true};
  var constraints = {
    mandatory: {
      OfferToReceiveAudio: true,
      OfferToReceiveVideo: true
    }
  };

  navigator.getUserMedia(mediaConstraints, function(stream) {
    console.log('Successful', stream);
    local.src = URL.createObjectURL(stream);

    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    var audioContext = new AudioContext();

    // Create an AudioNode from the stream
    var mediaStreamSource = audioContext.createMediaStreamSource(stream);

    // Connect it to destination
    mediaStreamSource.connect(audioContext.destination);

    alice.addStream(stream);
    createLocaloffer();
  }, function(err) {
    console.log('Failure: ', err);
  });

  function setUpChannel() {
    channel = alice.createDataChannel('room', {});
    console.log('Data Channel Created Successfully');
    activedc = channel;
    channel.onopen = function(evt) {
      console.log('Data Channel Connect');
    }

    channel.onmessage = function(evt) {
      console.log("Got message (bob)", evt.data);
    }
  };

  function createLocaloffer() {
    setUpChannel();
    alice.createOffer(function(desc) {
      alice.setLocalDescription(desc, function() {});
      console.log("created local offer", desc);
    }, function() {
      console.warn("Couldn't create offer");
    }, constraints);
  };
  
  //alice = PC1
  alice.onicecandidate = function(e) {
    console.log("ICE candidate (alice)", e);
    if (e.candidate == null) {
      $scope.$apply(function() {
        $scope.localOffer = JSON.stringify(alice.localDescription);
      });
    };
  };

  $scope.getRemoteAnswer = function(remoteAnswer) {
    console.log('remoteAnswer: ', remoteAnswer);
    remoteAnswer = new SessionDescription(JSON.parse(remoteAnswer));
    alice.setRemoteDescription(remoteAnswer, function() {
      alice.getRemoteStreams()[0];
    });
    // alice.addIceCandidate(new IceCandidate(JSON.parse(remoteAnswer.candidate)));
  };

  alice.onconnection = function() {
    console.log("Datachannel connected");
  };
 
  function onsignalingstatechange(state) {
      console.info('signaling state change:', state);
  }

  function oniceconnectionstatechange(state) {
      console.info('ice connection state change:', state);
  }

  function onicegatheringstatechange(state) {
      console.info('ice gathering state change:', state);
  }

  alice.onsignalingstatechange = onsignalingstatechange;
  alice.oniceconnectionstatechange = oniceconnectionstatechange;
  alice.onicegatheringstatechange = onicegatheringstatechange;

  // BOB = pc2
  var bob = new RTCPeerConnection(cfg, con);
  var channelBob;

  bob.ondatachannel = function(e) {
    var datachannel = e.channel || e; 
    channelBob = datachannel;
    activedc = channelBob;
    channelBob.onopen = function(e) {
      console.log('data channel connect');
    };

    channelBob.onmessage = function(e) {
      console.log("Got message (bob)", e.data);
    };
  };


  $scope.bob = false;

  $scope.showBob = function(remoteOffer) {
    $scope.bob = !false;

    remoteOffer = new SessionDescription(JSON.parse(remoteOffer));
    bob.setRemoteDescription(remoteOffer);
    
    bob.createAnswer(function(answer) {
      console.log('answer: ', answer);
      bob.setLocalDescription(answer);
    }, function() {
        console.warn("Couldn't create answer");
    });
    
  };

  bob.onicecandidate = function(e) {
    console.log("ICE candidate (bob)", e);
    if (e.candidate == null) {
      $scope.$apply(function() {
        $scope.localAnswer = JSON.stringify(bob.localDescription);
      });
    };
  };


  var remote = document.getElementById('bob');
  bob.onaddStream = function(e) {
    console.log('e: ', e.stream);
    remote.src = URL.createObjectURL(e.stream);
    console.log("Got Remote Stream");
  };

  bob.onsignalingstatechange = onsignalingstatechange;
  bob.oniceconnectionstatechange = oniceconnectionstatechange;
  bob.onicegatheringstatechange = onicegatheringstatechange;

  bob.onconnection = function() {
    console.log("Datachannel connected");
  };
 
}]);

