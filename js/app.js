var myApp = angular.module("myApp", ['ngRoute', 'firebase', 'angular-filepicker'])


myApp.constant('FIREBASE_URL', 'https://cartertonrangers.firebaseio.com'); 
myApp.constant('RANGERS_ID', '-KF-Py2HA1gkBFH1q9NV'); 

myApp.config(function (filepickerProvider) {
    filepickerProvider.setKey('Ajsh3Aa7YTcuEjkAajJpiz');
});

myApp.run(['$rootScope', '$location', 
	function($rootScope, $location){
		$rootScope.$on('$routeChangeError', function(event, next, previous, error){
			if(error =='AUTH_REQUIRED'){
				$rootScope.message = 'Sorry you must login to access page';
				$location.path('/login')
			}
		})
}]);

myApp.run(['$rootScope',function($rootScope){

    $rootScope.stateIsLoading = false;
    $rootScope.$on('$routeChangeStart', function() {
        $rootScope.stateIsLoading = true;
    });
    $rootScope.$on('$routeChangeSuccess', function() {
        $rootScope.stateIsLoading = false;
    });
    $rootScope.$on('$routeChangeError', function() {
        //catch error
    });

}]);
	

myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/home', {
			templateUrl: 'views/home.html',
			controller: 'homeController',		
		}).
		when('/player/:uId', {
			templateUrl: 'views/player.html',
			controller: 'playerController'
		}).		
		when('/login', {
			templateUrl: 'views/login.html',
			controller: 'registrationController'
		}).
		when('/register', {
			templateUrl: 'views/register.html',
			controller: 'registrationController'
		}).
		when('/results', {
			templateUrl: 'views/admin/results.html',
			controller: 'resultsController',
			resolve: {
				currentAuth: function(Authentication){
					return Authentication.requireAuth()
				}
			}
		}).		
		when('/manageTeams', {
			templateUrl: 'views/admin/manageTeams.html',
			controller: 'teamsController',
			resolve: {
				currentAuth: function(Authentication){
					return Authentication.requireAuth()
				}
			}
		}).		
		when('/otherResults', {
			templateUrl: 'views/admin/otherResults.html',
			controller: 'resultsOtherController',
			resolve: {
				currentAuth: function(Authentication){
					return Authentication.requireAuth()
				}
			}
		}).					
		when('/editResults', {
			templateUrl: 'views/admin/editResults.html',
			controller: 'editResultsController',
			resolve: {
				currentAuth: function(Authentication){
					return Authentication.requireAuth()
				}
			}
		}).								
		when('/admin', {
			templateUrl: 'views/admin.html',
			controller: 'adminController',
			resolve: {
				currentAuth: function(Authentication){
					return Authentication.requireAuth()
				}
			}
		}).
		otherwise({
			redirectTo: '/home'
		})		
}]);