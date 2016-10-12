myApp.controller('newsController', ['$scope', '$rootScope','$firebaseAuth', '$firebaseArray','$firebaseObject', 'FIREBASE_URL', 'filepickerService', '$window', function($scope, $rootScope, $firebaseAuth, $firebaseArray,$firebaseObject, FIREBASE_URL, filepickerService, $window ){

	var ref = new Firebase(FIREBASE_URL); 
	var auth = $firebaseAuth(ref);

    $scope.files = JSON.parse($window.localStorage.getItem('files') || '[]');

    $scope.pickFile = pickFile;

    $scope.newsImage = '';

    $scope.onSuccess = function(Blob){
        $window.localStorage.setItem('files', JSON.stringify($scope.files));
        $scope.$apply(function(){
        	$scope.newsImage = Blob.url
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
			var newsRef = new Firebase(FIREBASE_URL + '/news');
			var newsInfo = $firebaseArray(newsRef);

			var resultsRef = new Firebase(FIREBASE_URL + '/results/');
			var resultsInfo = $firebaseObject(resultsRef);    			

			$scope.news = newsInfo; 
			$scope.results = resultsInfo;

			$scope.addNews = function(){
				if($scope.newsType !== "Match Report") {
					$scope.result = null;	
				}
				newsInfo.$add({
					result: $scope.result,
					mainImage: $scope.newsImage,
					caption: $scope.newsCaption,
					newsType: $scope.newsType,
					dateAdded: Firebase.ServerValue.TIMESTAMP
				}).then(function(playersRef){

				});
			}
		}
	});

}]);