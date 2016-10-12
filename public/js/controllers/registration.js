myApp.controller('registrationController', ['$scope' , 'Authentication', '$rootScope', function($scope, Authentication, $rootScope){
	

	$scope.login = function(){
		Authentication.login($scope.user)
	}

	$scope.logout = function(){
		Authentication.logout()
	}	

	$scope.register = function(){
		Authentication.register($scope.user)
	}	

}]);