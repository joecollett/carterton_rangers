myApp.controller('homeController', ['$scope', '$rootScope', '$location','$firebaseObject', '$firebaseArray','$routeParams', 'FIREBASE_URL', function($scope, $rootScope, $location, $firebaseObject, $firebaseArray,$routeParams, FIREBASE_URL ){
	
	var playersRef = new Firebase(FIREBASE_URL + '/players');
	var playersInfo = $firebaseArray(playersRef);

	$scope.players = playersInfo;

}]);