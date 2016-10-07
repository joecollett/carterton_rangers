myApp.controller('homeController', ['$scope', '$rootScope', '$location','$firebaseObject', '$firebaseArray','$routeParams', 'FIREBASE_URL', function($scope, $rootScope, $location, $firebaseObject, $firebaseArray,$routeParams, FIREBASE_URL ){
	
	var playersRef = new Firebase(FIREBASE_URL + '/players');
	var playersInfo = $firebaseArray(playersRef);

	var newsRef = new Firebase(FIREBASE_URL + '/news');
	var newsInfo = $firebaseArray(newsRef);		

	$scope.news = newsInfo; 
	$scope.players = playersInfo;	

}]);