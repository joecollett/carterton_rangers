myApp.factory('Authentication', ['$rootScope', '$firebaseAuth', '$firebaseObject', '$location', 'FIREBASE_URL', function($rootScope, $firebaseAuth, $firebaseObject, $location, FIREBASE_URL){
	var ref = new Firebase(FIREBASE_URL);
	var auth = $firebaseAuth(ref)

	auth.$onAuth(function(authUser){
		if(authUser){
			var userRef = new Firebase(FIREBASE_URL + 'users/' + authUser.uid);
			var userObj = $firebaseObject(userRef);
			$rootScope.currentUser = userObj;
		} else {
			$rootScope.currentUser = '';
		}
	});

	var myObject = {
		login: function(user){
			auth.$authWithPassword({
				email: user.email,
				password: user.password
			}).then(function(regUser){
				$location.path('/admin')
			}).catch(function(error){
				$rootScope.message = error.message;
			});
		},
		logout: function(){
			return auth.$unauth();
		},
		register: function(user){
			auth.$createUser({
				email: user.email,
				password: user.password
			}).then(function(regUser){
				var regRef = new Firebase(FIREBASE_URL + 'users')
				.child(regUser.uid).set({
					date: Firebase.ServerValue.TIMESTAMP,
					regUser: regUser.uid,
					firstname: user.firstname,
					secondname: user.secondname,
					email: user.email 
				});

				myObject.login(user);
			}).catch(function(error){
				$rootScope.message = "Sorry that was an error registering please try again. " + error.message 
			});
		},
		requireAuth: function(){
			return auth.$requireAuth()
		}
	}

	return myObject;
}]);