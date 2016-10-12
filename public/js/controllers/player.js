myApp.controller('playerController', ['$scope', '$rootScope', '$location','$firebaseObject', '$firebaseArray','$routeParams', 'FIREBASE_URL', '$rootScope', function($scope, $rootScope, $location, $firebaseObject, $firebaseArray,$routeParams, FIREBASE_URL, $rootScope ){
	
	$scope.playerID = $routeParams.uId

	var playersRef = new Firebase(FIREBASE_URL + '/players/' + $scope.playerID);

	var playersInfo = $firebaseObject(playersRef);	

	$scope.player = playersInfo;


}]); 