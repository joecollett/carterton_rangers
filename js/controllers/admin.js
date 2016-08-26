myApp.controller('adminController', ['$scope', '$rootScope','$firebaseAuth', '$firebaseArray', 'FIREBASE_URL', 'filepickerService', '$window', function($scope, $rootScope, $firebaseAuth, $firebaseArray, FIREBASE_URL, filepickerService, $window ){

	var ref = new Firebase(FIREBASE_URL); 
	var auth = $firebaseAuth(ref);

    $scope.files = JSON.parse($window.localStorage.getItem('files') || '[]');

    $scope.pickFile = pickFile;

    $scope.playerimage = '';

    $scope.onSuccess = function(Blob){
        $window.localStorage.setItem('files', JSON.stringify($scope.files));
        $scope.$apply(function(){
        	$scope.playerimage = Blob.url
        });
    };

    $scope.currentImage = '';

    function pickFile(){
        filepickerService.pick(
            {mimetype: 'image/*'},
            $scope.onSuccess
        );
    };


	auth.$onAuth(function(authUser){
		if(authUser){
			var playersRef = new Firebase(FIREBASE_URL + '/players');
			var playersInfo = $firebaseArray(playersRef);

			$scope.players = playersInfo; 

			$scope.addPlayer = function(){
				playersInfo.$add({
					firstname: $scope.playerfirstname,
					secondname: $scope.playersecondname,
					number: $scope.playerno,
					position: $scope.playerposition,
					dob: $scope.playerdob,
					bio: $scope.playerbio,
					date: Firebase.ServerValue.TIMESTAMP,
					playerimage: $scope.playerimage,
					fullname: $scope.playerfirstname + " " + $scope.playersecondname,
					redCards: 0,
					yellowCards:0,
					goals:0,
					assists:0,
					apps:0,
					minutes:0
				}).then(function(playersRef){
					var id = playersRef.key();

					var playersIdRef = new Firebase(FIREBASE_URL + '/players/' + id);
					    playersIdRef.update({ 'id': id});					

					$scope.playerfirstname = "";
					$scope.playersecondname = "";
					$scope.playerno = "";
					$scope.position = "";
					$scope.playerdob = "";
					$scope.playerbio = "";
					$scope.playerimage = "";
				});
			}

			$scope.deletePlayer = function(key){
				playersInfo.$remove(key)
			};	
		}
	});

}]);