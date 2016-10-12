myApp.controller('newsItemController', ['$scope', '$rootScope', '$location','$firebaseObject', '$firebaseArray','$routeParams', 'FIREBASE_URL', '$rootScope', function($scope, $rootScope, $location, $firebaseObject, $firebaseArray,$routeParams, FIREBASE_URL, $rootScope ){
	
	$scope.newsID = $routeParams.uId

	var newsRef = new Firebase(FIREBASE_URL + '/news/' + $scope.newsID);

	var newsInfo = $firebaseObject(newsRef);	

	$scope.item = newsInfo;


}]); 