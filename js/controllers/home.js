myApp.controller('homeController', ['$scope', '$rootScope', '$location','$firebaseObject', '$firebaseArray','$routeParams', 'FIREBASE_URL', '$timeout',  function($scope, $rootScope, $location, $firebaseObject, $firebaseArray,$routeParams, FIREBASE_URL, $timeout ){
	
	var playersRef = new Firebase(FIREBASE_URL + '/players');
	var playersInfo = $firebaseArray(playersRef);

	var newsRef = new Firebase(FIREBASE_URL + '/news');
	var newsInfo = $firebaseArray(newsRef);		

	$scope.playerimages
	
	playersInfo.$loaded(function(){
		angular.forEach(playersInfo, function(playerInfo) {
			console.log(playerInfo.playerimage)
		});
	});		

	$scope.news = newsInfo; 
	$scope.players = playersInfo;	

	$timeout(function() {
	    $scope.images;
	}, 1000);

}]);
