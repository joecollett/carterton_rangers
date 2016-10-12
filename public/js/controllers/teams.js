myApp.controller('teamsController', ['$scope', '$rootScope', '$route','$firebaseAuth', '$firebaseArray', '$firebaseObject', 'FIREBASE_URL', function($scope, $rootScope, $route, $firebaseAuth, $firebaseArray, $firebaseObject, FIREBASE_URL){

	var ref = new Firebase(FIREBASE_URL); 
	var auth = $firebaseAuth(ref);

	var teamsRef = new Firebase(FIREBASE_URL + '/teams');
	var teamsInfo = $firebaseArray(teamsRef);

	$scope.teams = teamsInfo;	

	$scope.addTeam = function(){
		teamsInfo.$add({
			name: $scope.name,
			points: $scope.points,
			goalsfor: $scope.goalsfor,
			goalsagainst: $scope.goalsagainst,
			win: 0,
			loss:0,
			draw:0,
			view: true,
			league: $scope.league,
			goalsforaway:0,
			goalsforhome:0,
			goalsagainsthome:0,
			goalsagainstaway:0,
			apps:0,
			homeapps:0,
			awayapps:0,
			homewin:0,
			awaywin:0,
			homeloss:0,
			awayloss:0,
			homedraw:0,
			awaydraw:0,
			cupApps:0,
			goalsforCup:0,
			goalsagainstCup:0,
			cupLoss:0,
			cupWin:0
		}).then(function(teamsRef){
			var id = teamsRef.key();
			var teamsIdRef = new Firebase(FIREBASE_URL + '/teams/' + id);
			    teamsIdRef.update({ 'id': id});	
		});	
	}
}]);