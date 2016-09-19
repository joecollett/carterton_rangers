myApp.controller('resultsController', ['$scope', '$rootScope','$firebaseAuth', '$firebaseArray', '$firebaseObject', 'FIREBASE_URL', 'RANGERS_ID', '$rootScope', function($scope, $rootScope, $firebaseAuth, $firebaseArray, $firebaseObject, FIREBASE_URL, RANGERS_ID, $rootScope){

	var ref = new Firebase(FIREBASE_URL); 
	var auth = $firebaseAuth(ref);

	var playersRef = new Firebase(FIREBASE_URL + '/players');
	var playersInfo = $firebaseArray(playersRef);

	var teamsRef = new Firebase(FIREBASE_URL + '/teams');
	var teamsInfo = $firebaseArray(teamsRef);

	var crRef = new Firebase(FIREBASE_URL + '/teams/' + RANGERS_ID);
	var crInfo = $firebaseObject(crRef);	

	$scope.players = playersInfo;	
	$scope.teams = teamsInfo;

	$scope.subon1 = false;
	$scope.subon2 = false;
	$scope.subon3 = false;

	$scope.$watchGroup(['pos1selected', 'pos2selected', 'pos3selected', 'pos4selected', 'pos5selected', 'pos6selected' ,'pos7selected' ,'pos8selected' ,'pos9selected' , 'pos10selected', 'pos11selected', 'sub1', 'sub2', 'sub3', 'subon1', 'subon2', 'subon3'], function(newValues, oldValues, scope) {
		$scope.starting11 = [$scope.pos1selected, $scope.pos2selected, $scope.pos3selected, $scope.pos4selected, $scope.pos5selected,$scope.pos6selected,$scope.pos7selected,$scope.pos8selected,$scope.pos9selected,$scope.pos10selected,$scope.pos11selected, $scope.sub1, $scope.sub2, $scope.sub3, $scope.subon1, $scope.subon2, $scope.subon3];
		if($scope.pos1selected){
			$scope.pos1selected.gameminutes = 90;
			$scope.pos1selected.gamegoals = 0;	
			$scope.pos1selected.gameassists = 0;	
			$scope.pos1selected.gameyellow = 0;
			$scope.pos1selected.gamered = 0;										
		}
		if($scope.pos2selected){
			$scope.pos2selected.gameminutes = 90;
			$scope.pos2selected.gamegoals = 0;	
			$scope.pos2selected.gameassists = 0;	
			$scope.pos2selected.gameyellow = 0;
			$scope.pos2selected.gamered = 0;				
		}	
		if($scope.pos3selected){
			$scope.pos3selected.gameminutes = 90;
			$scope.pos3selected.gamegoals = 0;	
			$scope.pos3selected.gameassists = 0;	
			$scope.pos3selected.gameyellow = 0;
			$scope.pos3selected.gamered = 0;				
		}
		if($scope.pos4selected){
			$scope.pos4selected.gameminutes = 90;
			$scope.pos4selected.gamegoals = 0;	
			$scope.pos4selected.gameassists = 0;	
			$scope.pos4selected.gameyellow = 0;
			$scope.pos4selected.gamered = 0;			
		}
		if($scope.pos5selected){
			$scope.pos5selected.gameminutes = 90;
			$scope.pos5selected.gamegoals = 0;	
			$scope.pos5selected.gameassists = 0;	
			$scope.pos5selected.gameyellow = 0;
			$scope.pos5selected.gamered = 0;			
		}
		if($scope.pos6selected){
			$scope.pos6selected.gameminutes = 90;
			$scope.pos6selected.gamegoals = 0;	
			$scope.pos6selected.gameassists = 0;	
			$scope.pos6selected.gameyellow = 0;
			$scope.pos6selected.gamered = 0;				
		}	
		if($scope.pos7selected){
			$scope.pos7selected.gameminutes = 90;
			$scope.pos7selected.gamegoals = 0;	
			$scope.pos7selected.gameassists = 0;	
			$scope.pos7selected.gameyellow = 0;
			$scope.pos7selected.gamered = 0;				
		}
		if($scope.pos8selected){
			$scope.pos8selected.gameminutes = 90;
			$scope.pos8selected.gamegoals = 0;	
			$scope.pos8selected.gameassists = 0;	
			$scope.pos8selected.gameyellow = 0;
			$scope.pos8selected.gamered = 0;				
		}	
		if($scope.pos9selected){
			$scope.pos9selected.gameminutes = 90;
			$scope.pos9selected.gamegoals = 0;	
			$scope.pos9selected.gameassists = 0;	
			$scope.pos9selected.gameyellow = 0;
			$scope.pos9selected.gamered = 0;			
		}
		if($scope.pos10selected){
			$scope.pos10selected.gameminutes = 90;
			$scope.pos10selected.gamegoals = 0;	
			$scope.pos10selected.gameassists = 0;	
			$scope.pos10selected.gameyellow = 0;
			$scope.pos10selected.gamered = 0;				
		}
		if($scope.pos11selected){
			$scope.pos11selected.gameminutes = 90;
			$scope.pos11selected.gamegoals = 0;	
			$scope.pos11selected.gameassists = 0;	
			$scope.pos11selected.gameyellow = 0;
			$scope.pos11selected.gamered = 0;				
		}
		if($scope.sub1){
			$scope.sub1.subminuteon = 0;
			$scope.sub1.subgoals = 0;	
			$scope.sub1.subassists = 0;	
			$scope.sub1.subyellow = 0;
			$scope.sub1.subred = 0;	
		}
		if($scope.sub2){
			$scope.sub2.subminuteon = 0;
			$scope.sub2.subgoals = 0;	
			$scope.sub2.subassists = 0;	
			$scope.sub2.subyellow = 0;
			$scope.sub2.subred = 0;		
		}
		if($scope.sub3){
			$scope.sub3.subminuteon = 0;
			$scope.sub3.subgoals = 0;	
			$scope.sub3.subassists = 0;	
			$scope.sub3.subyellow = 0;
			$scope.sub3.subred = 0;		
		}	
		if($scope.sub1 == undefined){
			$scope.sub1 = {
				firstname: "",
				secondname: "",
				id: ""
			};	
		}	
		if($scope.sub2 == undefined){
			$scope.sub2 = {
				firstname: "",
				secondname: "",
				id: ""
			};		
		}	
		if($scope.sub3 == undefined){
			$scope.sub3 = {
				firstname: "",
				secondname: "",
				id: ""
			};		
		}	
						
	});												

	
	$scope.autopick = function(){
		$scope.pos1selected = $scope.players[0];
		$scope.pos2selected = $scope.players[1];
		$scope.pos3selected = $scope.players[2];
		$scope.pos4selected = $scope.players[3];
		$scope.pos5selected = $scope.players[4];
		$scope.pos6selected = $scope.players[5];
		$scope.pos7selected = $scope.players[6];
		$scope.pos8selected = $scope.players[7];
		$scope.pos9selected = $scope.players[8];
		$scope.pos10selected = $scope.players[9];	
		$scope.pos11selected = $scope.players[10];																						
	}


	auth.$onAuth(function(authUser){
		var resultsRef = new Firebase(FIREBASE_URL + '/results');
		var resultsInfo = $firebaseArray(resultsRef);	

		$scope.addResult = function(){		

			if($scope.sub1.firstname !== ""){
				if($scope.subon1){
					angular.forEach($scope.starting11, function(starting11){
						if($scope.sub1.playeronfor.id === starting11.id){
							starting11.gameminutes = $scope.sub1.subminuteon;
							$scope.sub1.subminuteon = 90 - $scope.sub1.subminuteon;
						}					
					});
				}
			}
			if($scope.sub2.firstname !== ""){
				if($scope.subon2){
					angular.forEach($scope.starting11, function(starting11){
						if($scope.sub2.playeronfor.id === starting11.id){
							starting11.gameminutes = $scope.sub2.subminuteon;
							$scope.sub2.subminuteon = 90 - $scope.sub2.subminuteon;
						}									
					});
				}	
			}	

			if($scope.sub3.firstname !== ""){
				if($scope.subon3){
					angular.forEach($scope.starting11, function(starting11){
						if($scope.sub3.playeronfor.id === starting11.id){
							starting11.gameminutes = $scope.sub3.subminuteon;
							$scope.sub3.subminuteon = 90 - $scope.sub3.subminuteon;
						}					
					});
				}
			}							
			$scope.$watchGroup(['leagueorcup'], function(newValues, oldValues, scope) {			
				if($scope.leagueorcup === "Cup" ){
					crInfo.$loaded().then(function(){
						resultsInfo.$add({
							rangers: crInfo,
							opponent: $scope.opponent,
							competition: $scope.leagueorcup,
							scorehome: $scope.scorehome,
							scoreaway: $scope.scoreaway,
							dateplayed: $scope.dateplayed,
							dateAdded: Firebase.ServerValue.TIMESTAMP,
							position: {
								position1: {
									firstname: $scope.pos1selected.firstname,
									secondname: $scope.pos1selected.secondname,
									id: $scope.pos1selected.id,
									cupGoals:$scope.pos1selected.gamegoals,
									cupAssists:$scope.pos1selected.gameassists,
									cupYellowCards: $scope.pos1selected.gameyellow,
									cupRedCards: $scope.pos1selected.gamered,
									cupMinutes: $scope.pos1selected.gameminutes
								},
								position2: {
									firstname: $scope.pos2selected.firstname,
									secondname: $scope.pos2selected.secondname,r4c4rcx4c4xrcrxza
									id: $scope.pos2selected.id,
									cupGoals:$scope.pos2selected.gamegoals,
									cupAssists:$scope.pos2selected.gameassists,
									cupYellowCards: $scope.pos2selected.gameyellow,
									cupRedCards: $scope.pos2selected.gamered,
									cupMinutes: $scope.pos2selected.gameminutes														
								},	
								position3: {
									firstname: $scope.pos3selected.firstname,
									secondname: $scope.pos3selected.secondname,
									id: $scope.pos3selected.id,
									cupGoals:$scope.pos3selected.gamegoals,
									cupAssists:$scope.pos3selected.gameassists,
									cupYellowCards: $scope.pos3selected.gameyellow,
									cupRedCards: $scope.pos3selected.gamered,
									cupMinutes: $scope.pos3selected.gameminutes								 							
								},
								position4: {
									firstname: $scope.pos4selected.firstname,
									secondname: $scope.pos4selected.secondname,
									id: $scope.pos4selected.id,
									cupGoals:$scope.pos4selected.gamegoals,
									cupAssists:$scope.pos4selected.gameassists,
									cupYellowCards: $scope.pos4selected.gameyellow,
									cupRedCards: $scope.pos4selected.gamered,
									cupMinutes: $scope.pos4selected.gameminutes									 							
								},
								position5: {
									firstname: $scope.pos5selected.firstname,
									secondname: $scope.pos5selected.secondname,
									id: $scope.pos5selected.id,
									cupGoals:$scope.pos5selected.gamegoals,
									cupAssists:$scope.pos5selected.gameassists,
									cupYellowCards: $scope.pos5selected.gameyellow,
									cupRedCards: $scope.pos5selected.gamered,
									cupMinutes: $scope.pos5selected.gameminutes									 							
								},
								position6: {
									firstname: $scope.pos6selected.firstname,
									secondname: $scope.pos6selected.secondname,
									id: $scope.pos6selected.id,
									cupGoals:$scope.pos6selected.gamegoals,
									cupAssists:$scope.pos6selected.gameassists,
									cupYellowCards: $scope.pos6selected.gameyellow,
									cupRedCards: $scope.pos6selected.gamered,
									cupMinutes: $scope.pos6selected.gameminutes								 	
								},
								position7: {
									firstname: $scope.pos7selected.firstname,
									secondname: $scope.pos7selected.secondname,
									id: $scope.pos7selected.id,
									cupGoals:$scope.pos7selected.gamegoals,
									cupAssists:$scope.pos7selected.gameassists,
									cupYellowCards: $scope.pos7selected.gameyellow,
									cupRedCards: $scope.pos7selected.gamered,
									cupMinutes: $scope.pos7selected.gameminutes								 							
								},
								position8: {
									firstname: $scope.pos8selected.firstname,
									secondname: $scope.pos8selected.secondname,
									id: $scope.pos8selected.id,
									cupGoals:$scope.pos8selected.gamegoals,
									cupAssists:$scope.pos8selected.gameassists,
									cupYellowCards: $scope.pos8selected.gameyellow,
									cupRedCards: $scope.pos8selected.gamered,
									cupMinutes: $scope.pos8selected.gameminutes								 							
								},
								position9: {
									firstname: $scope.pos9selected.firstname,
									secondname: $scope.pos9selected.secondname,
									id: $scope.pos9selected.id,
									cupGoals:$scope.pos9selected.gamegoals,
									cupAssists:$scope.pos9selected.gameassists,
									cupYellowCards: $scope.pos9selected.gameyellow,
									cupRedCards: $scope.pos9selected.gamered,
									cupMinutes: $scope.pos9selected.gameminutes										 							
								},
								position10: {
									firstname: $scope.pos10selected.firstname,
									secondname: $scope.pos10selected.secondname,
									id: $scope.pos10selected.id,
									cupGoals:$scope.pos10selected.gamegoals,
									cupAssists:$scope.pos10selected.gameassists,
									cupYellowCards: $scope.pos10selected.gameyellow,
									cupRedCards: $scope.pos10selected.gamered,
									cupMinutes: $scope.pos10selected.gameminutes										 							
								},
								position11: {
									firstname: $scope.pos11selected.firstname,
									secondname: $scope.pos11selected.secondname,
									id: $scope.pos11selected.id,
									cupGoals:$scope.pos11selected.gamegoals,
									cupAssists:$scope.pos11selected.gameassists,
									cupYellowCards: $scope.pos11selected.gameyellow,
									cupRedCards: $scope.pos11selected.gamered,
									cupMinutes: $scope.pos11selected.gameminutes									 							
								},
								sub1: {
									firstname: $scope.sub1.firstname,
									secondname: $scope.sub1.secondname,
									id: $scope.sub1.id,
									cupGoals:$scope.sub1.subgoals,
									cupAssists:$scope.sub1.subassists,
									cupYellowCards: $scope.sub1.subyellow,
									cupRedCards: $scope.sub1.subred,
									cupMinutes: $scope.sub1.subminuteon,
									didplayercomeon: $scope.subon1									 							
								},
								sub2: {
									firstname: $scope.sub2.firstname,
									secondname: $scope.sub2.secondname,
									id: $scope.sub2.id,
									cupGoals:$scope.sub2.subgoals,
									cupAssists:$scope.sub2.subassists,
									cupYellowCards: $scope.sub2.subyellow,
									cupRedCards: $scope.sub2.subred,
									cupMinutes: $scope.sub2.subminuteon,
									didplayercomeon: $scope.subon2									 							
								},
								sub3: {
									firstname: $scope.sub3.firstname,
									secondname: $scope.sub3.secondname,
									id: $scope.sub3.id,
									cupGoals:$scope.sub3.subgoals,
									cupAssists:$scope.sub3.subassists,
									cupYellowCards: $scope.sub3.subyellow,
									cupRedCards: $scope.sub3.subred,
									cupMinutes: $scope.sub3.subminuteon,
									didplayercomeon: $scope.subon3									 							
								}																																																																																																											
							}
						})
						.then(function(ref){

							$scope.pos1selected = null;
							$scope.pos2selected = null;
							$scope.pos3selected = null;
							$scope.pos4selected = null;
							$scope.pos5selected = null;
							$scope.pos6selected = null;
							$scope.pos7selected = null;
							$scope.pos8selected = null;
							$scope.pos9selected = null;
							$scope.pos10selected = null;
							$scope.pos11selected = null;
							$scope.sub1 = null;
							$scope.sub2 = null;
							$scope.sub3 = null;
							$scope.homeoraway = null;
							$scope.opponent = null;
							$scope.scorehome = null;
							$scope.dateplayed = null;
							$scope.scoreaway = null;

							var sid = ref.path.o[1];

							var position1 = new Firebase(FIREBASE_URL + '/results/' + sid + '/position/position1');
							var position1Info = $firebaseObject(position1);

							var position2 = new Firebase(FIREBASE_URL + '/results/' + sid + '/position/position2');
							var position2Info = $firebaseObject(position2);	

							var position3 = new Firebase(FIREBASE_URL + '/results/' + sid + '/position/position3');
							var position3Info = $firebaseObject(position3);		

							var position4 = new Firebase(FIREBASE_URL + '/results/' + sid + '/position/position4');
							var position4Info = $firebaseObject(position4);		

							var position5 = new Firebase(FIREBASE_URL + '/results/' + sid + '/position/position5');
							var position5Info = $firebaseObject(position5);		

							var position6 = new Firebase(FIREBASE_URL + '/results/' + sid + '/position/position6');
							var position6Info = $firebaseObject(position6);

							var position7 = new Firebase(FIREBASE_URL + '/results/' + sid + '/position/position7');
							var position7Info = $firebaseObject(position7);		

							var position8 = new Firebase(FIREBASE_URL + '/results/' + sid + '/position/position8');
							var position8Info = $firebaseObject(position8);	

							var position9 = new Firebase(FIREBASE_URL + '/results/' + sid + '/position/position9');
							var position9Info = $firebaseObject(position9);

							var position10 = new Firebase(FIREBASE_URL + '/results/' + sid + '/position/position10');
							var position10Info = $firebaseObject(position10);									

							var position11 = new Firebase(FIREBASE_URL + '/results/' + sid + '/position/position11');
							var position11Info = $firebaseObject(position11);	

							var sub1 = new Firebase(FIREBASE_URL + '/results/' + sid + '/position/sub1');
							var sub1Info = $firebaseObject(sub1);		

							var sub2 = new Firebase(FIREBASE_URL + '/results/' + sid + '/position/sub2');
							var sub2Info = $firebaseObject(sub2);

							var sub3 = new Firebase(FIREBASE_URL + '/results/' + sid + '/position/sub3');
							var sub3Info = $firebaseObject(sub3);																																																																																							

							var away = new Firebase(FIREBASE_URL + '/results/' + sid + '/away');
							var awayInfo = $firebaseObject(away);		

							var resultScore = new Firebase(FIREBASE_URL + '/results/' + sid);
							var resultScoreInfo = $firebaseObject(resultScore);		
							
						        angular.forEach(playersInfo, function(playerInfo) {
									position1Info.$loaded().then(function(){
										if(playerInfo.id === position1Info.id) {
											playerInfo.cupApps = playerInfo.cupApps + 1;
											playerInfo.cupGoals = playerInfo.cupGoals + position1Info.cupGoals;
											playerInfo.cupAssists = playerInfo.cupAssists + position1Info.cupAssists;
											playerInfo.cupYellowCards =  playerInfo.cupYellowCards + position1Info.cupYellowCards
											playerInfo.cupRedCards =  playerInfo.cupRedCards + position1Info.cupRedCards;
											playerInfo.cupMinutes = playerInfo.cupMinutes + position1Info.cupMinutes;
											playersInfo.$save(playerInfo)
										}
									});							

									position2Info.$loaded().then(function(){
										if(playerInfo.id === position2Info.id) {
											console.log(playerInfo)	
											playerInfo.cupApps = playerInfo.cupApps + 1;
											playerInfo.cupGoals = playerInfo.cupGoals + position2Info.cupGoals;
											playerInfo.cupAssists = playerInfo.cupAssists + position2Info.cupAssists;
											playerInfo.cupYellowCards =  playerInfo.cupYellowCards + position2Info.cupYellowCards
											playerInfo.cupRedCards =  playerInfo.cupRedCards + position2Info.cupRedCards;
											playerInfo.cupMinutes = playerInfo.cupMinutes + position2Info.cupMinutes;							
											playersInfo.$save(playerInfo)
											console.log(playerInfo)	
										}	
									});	

									position3Info.$loaded().then(function(){
										if(playerInfo.id === position3Info.id) {
											playerInfo.cupApps = playerInfo.cupApps + 1;
											playerInfo.cupGoals = playerInfo.cupGoals + position3Info.cupGoals;
											playerInfo.cupAssists = playerInfo.cupAssists + position3Info.cupAssists;
											playerInfo.cupYellowCards =  playerInfo.cupYellowCards + position3Info.cupYellowCards
											playerInfo.cupRedCards =  playerInfo.cupRedCards + position3Info.cupRedCards;
											playerInfo.cupMinutes = playerInfo.cupMinutes + position3Info.cupMinutes;									
											playersInfo.$save(playerInfo)
										}	
									});	

									position4Info.$loaded().then(function(){
										if(playerInfo.id === position4Info.id) {
											playerInfo.cupApps = playerInfo.cupApps + 1;
											playerInfo.cupGoals = playerInfo.cupGoals + position4Info.cupGoals;
											playerInfo.cupAssists = playerInfo.cupAssists + position4Info.cupAssists;
											playerInfo.cupYellowCards =  playerInfo.cupYellowCards + position4Info.cupYellowCards
											playerInfo.cupRedCards =  playerInfo.cupRedCards + position4Info.cupRedCards;
											playerInfo.cupMinutes = playerInfo.cupMinutes + position4Info.cupMinutes;										
											playersInfo.$save(playerInfo)
										}	
									});	

									position5Info.$loaded().then(function(){
										if(playerInfo.id === position5Info.id) {
											playerInfo.cupApps = playerInfo.cupApps + 1;
											playerInfo.cupGoals = playerInfo.cupGoals + position5Info.cupGoals;
											playerInfo.cupAssists = playerInfo.cupAssists + position5Info.cupAssists;
											playerInfo.cupYellowCards =  playerInfo.cupYellowCards + position5Info.cupYellowCards;
											playerInfo.cupRedCards =  playerInfo.cupRedCards + position5Info.cupRedCards;
											playerInfo.cupMinutes = playerInfo.cupMinutes + position5Info.cupMinutes;										
											playersInfo.$save(playerInfo)
										}	
									});	

									position6Info.$loaded().then(function(){
										if(playerInfo.id === position6Info.id) {
											playerInfo.cupApps = playerInfo.cupApps + 1;
											playerInfo.cupGoals = playerInfo.cupGoals + position6Info.cupGoals;
											playerInfo.cupAssists = playerInfo.cupAssists + position6Info.cupAssists;
											playerInfo.cupYellowCards =  playerInfo.cupYellowCards + position6Info.cupYellowCards
											playerInfo.cupRedCards =  playerInfo.cupRedCards + position6Info.cupRedCards;
											playerInfo.cupMinutes = playerInfo.cupMinutes + position6Info.cupMinutes;										
											playersInfo.$save(playerInfo)
										}	
									});		

									position7Info.$loaded().then(function(){
										if(playerInfo.id === position7Info.id) {
											playerInfo.cupApps = playerInfo.cupApps + 1;
											playerInfo.cupGoals = playerInfo.cupGoals + position7Info.cupGoals;
											playerInfo.cupAssists = playerInfo.cupAssists + position7Info.cupAssists;
											playerInfo.cupYellowCards =  playerInfo.cupYellowCards + position7Info.cupYellowCards
											playerInfo.cupRedCards =  playerInfo.cupRedCards + position7Info.cupRedCards;
											playerInfo.cupMinutes = playerInfo.cupMinutes + position7Info.cupMinutes;										
											playersInfo.$save(playerInfo)
										}	
									});	

									position8Info.$loaded().then(function(){
										if(playerInfo.id === position8Info.id) {
											playerInfo.cupApps = playerInfo.cupApps + 1;
											playerInfo.cupGoals = playerInfo.cupGoals + position8Info.cupGoals;
											playerInfo.cupAssists = playerInfo.cupAssists + position8Info.cupAssists;
											playerInfo.cupYellowCards =  playerInfo.cupYellowCards + position8Info.cupYellowCards;
											playerInfo.cupRedCards =  playerInfo.cupRedCards + position8Info.cupRedCards;
											playerInfo.cupMinutes = playerInfo.cupMinutes + position8Info.cupMinutes;										
											playersInfo.$save(playerInfo)
										}	
									});		

									position9Info.$loaded().then(function(){
										if(playerInfo.id === position9Info.id) {
											playerInfo.cupApps = playerInfo.cupApps + 1;
											playerInfo.cupGoals = playerInfo.cupGoals + position9Info.cupGoals;
											playerInfo.cupAssists = playerInfo.cupAssists + position9Info.cupAssists;
											playerInfo.cupYellowCards =  playerInfo.cupYellowCards + position9Info.cupYellowCards
											playerInfo.cupRedCards =  playerInfo.cupRedCards + position9Info.cupRedCards;
											playerInfo.cupMinutes = playerInfo.cupMinutes + position9Info.cupMinutes;										
											playersInfo.$save(playerInfo)
										}	
									});

									position10Info.$loaded().then(function(){
										if(playerInfo.id === position10Info.id) {
											playerInfo.cupApps = playerInfo.cupApps + 1;
											playerInfo.cupGoals = playerInfo.cupGoals + position10Info.cupGoals;
											playerInfo.cupAssists = playerInfo.cupAssists + position10Info.cupAssists;
											playerInfo.cupYellowCards =  playerInfo.cupYellowCards + position10Info.cupYellowCards;
											playerInfo.cupRedCards =  playerInfo.cupRedCards + position10Info.cupRedCards;
											playerInfo.cupMinutes = playerInfo.cupMinutes + position10Info.cupMinutes;									
											playersInfo.$save(playerInfo)
										}	
									});	
									position11Info.$loaded().then(function(){
										if(playerInfo.id === position11Info.id) {
											playerInfo.cupApps = playerInfo.cupApps + 1;
											playerInfo.cupGoals = playerInfo.cupGoals + position10Info.cupGoals;
											playerInfo.cupAssists = playerInfo.cupAssists + position10Info.cupAssists;
											playerInfo.cupYellowCards =  playerInfo.cupYellowCards + position10Info.cupYellowCards
											playerInfo.cupRedCards =  playerInfo.cupRedCards + position10Info.cupRedCards;
											playerInfo.cupMinutes = playerInfo.cupMinutes + position10Info.cupMinutes;									
											playersInfo.$save(playerInfo)
										}	
									});	
									sub1Info.$loaded().then(function(){
										if(playerInfo.id === sub1Info.id) {		
											console.log(sub1Info.didplayercomeon)								
											if(sub1Info.didplayercomeon){
												playerInfo.cupApps = playerInfo.cupApps + 1;
												playerInfo.cupGoals = playerInfo.cupGoals + sub1Info.cupGoals;
												playerInfo.cupAssists = playerInfo.cupAssists + sub1Info.cupAssists;
												playerInfo.cupYellowCards =  playerInfo.cupYellowCards + sub1Info.cupYellowCards
												playerInfo.cupRedCards =  playerInfo.cupRedCards + sub1Info.cupRedCards;
												playerInfo.cupMinutes = playerInfo.cupMinutes + sub1Info.cupMinutes;								
												playersInfo.$save(playerInfo);
											}	
										}
									});	
									sub2Info.$loaded().then(function(){
										if(playerInfo.id === sub2Info.id) {	
											if(sub2Info.didplayercomeon){																		
												playerInfo.cupApps = playerInfo.cupApps + 1;
												playerInfo.cupGoals = playerInfo.cupGoals + sub2Info.cupGoals;
												playerInfo.cupAssists = playerInfo.cupAssists + sub2Info.cupAssists;
												playerInfo.cupYellowCards =  playerInfo.cupYellowCards + sub2Info.cupYellowCards
												playerInfo.cupRedCards =  playerInfo.cupRedCards + sub2Info.cupRedCards;
												playerInfo.cupMinutes = playerInfo.cupMinutes + sub2Info.cupMinutes;								
												playersInfo.$save(playerInfo)
											}
										}	
									});	
									sub3Info.$loaded().then(function(){
										if(playerInfo.id === sub3Info.id) {	
											if(sub3Info.didplayercomeon){																		
												playerInfo.cupApps = playerInfo.cupApps + 1;
												playerInfo.cupGoals = playerInfo.cupGoals + sub3Info.cupGoals;
												playerInfo.cupAssists = playerInfo.cupAssists + sub3Info.cupAssists;
												playerInfo.cupYellowCards =  playerInfo.cupYellowCards + sub3Info.cupYellowCards
												playerInfo.cupRedCards =  playerInfo.cupRedCards + sub3Info.cupRedCards;
												playerInfo.cupMinutes = playerInfo.cupMinutes + sub3Info.cupMinutes;								
												playersInfo.$save(playerInfo)
											}
										}	
									});													
																																																																																																							
						});
					});	
				} else {
					if($scope.homeoraway === "Home"){
						crInfo.$loaded().then(function(){
							resultsInfo.$add({
								home: crInfo,
								away: $scope.opponent,
								scorehome: $scope.scorehome,
								scoreaway: $scope.scoreaway,
								dateplayed: $scope.dateplayed,
								dateAdded: Firebase.ServerValue.TIMESTAMP,
								position: {
									position1: {
										firstname: $scope.pos1selected.firstname,
										secondname: $scope.pos1selected.secondname,
										id: $scope.pos1selected.id,
										goals:$scope.pos1selected.gamegoals,
										assists:$scope.pos1selected.gameassists,
										yellowCards: $scope.pos1selected.gameyellow,
										redCards: $scope.pos1selected.gamered,
										minutes: $scope.pos1selected.gameminutes
									},
									position2: {
										firstname: $scope.pos2selected.firstname,
										secondname: $scope.pos2selected.secondname,
										id: $scope.pos2selected.id,
										goals:$scope.pos2selected.gamegoals,
										assists:$scope.pos2selected.gameassists,
										yellowCards: $scope.pos2selected.gameyellow,
										redCards: $scope.pos2selected.gamered,
										minutes: $scope.pos2selected.gameminutes														
									},	
									position3: {
										firstname: $scope.pos3selected.firstname,
										secondname: $scope.pos3selected.secondname,
										id: $scope.pos3selected.id,
										goals:$scope.pos3selected.gamegoals,
										assists:$scope.pos3selected.gameassists,
										yellowCards: $scope.pos3selected.gameyellow,
										redCards: $scope.pos3selected.gamered,
										minutes: $scope.pos3selected.gameminutes								 							
									},
									position4: {
										firstname: $scope.pos4selected.firstname,
										secondname: $scope.pos4selected.secondname,
										id: $scope.pos4selected.id,
										goals:$scope.pos4selected.gamegoals,
										assists:$scope.pos4selected.gameassists,
										yellowCards: $scope.pos4selected.gameyellow,
										redCards: $scope.pos4selected.gamered,
										minutes: $scope.pos4selected.gameminutes									 							
									},
									position5: {
										firstname: $scope.pos5selected.firstname,
										secondname: $scope.pos5selected.secondname,
										id: $scope.pos5selected.id,
										goals:$scope.pos5selected.gamegoals,
										assists:$scope.pos5selected.gameassists,
										yellowCards: $scope.pos5selected.gameyellow,
										redCards: $scope.pos5selected.gamered,
										minutes: $scope.pos5selected.gameminutes									 							
									},
									position6: {
										firstname: $scope.pos6selected.firstname,
										secondname: $scope.pos6selected.secondname,
										id: $scope.pos6selected.id,
										goals:$scope.pos6selected.gamegoals,
										assists:$scope.pos6selected.gameassists,
										yellowCards: $scope.pos6selected.gameyellow,
										redCards: $scope.pos6selected.gamered,
										minutes: $scope.pos6selected.gameminutes								 	
									},
									position7: {
										firstname: $scope.pos7selected.firstname,
										secondname: $scope.pos7selected.secondname,
										id: $scope.pos7selected.id,
										goals:$scope.pos7selected.gamegoals,
										assists:$scope.pos7selected.gameassists,
										yellowCards: $scope.pos7selected.gameyellow,
										redCards: $scope.pos7selected.gamered,
										minutes: $scope.pos7selected.gameminutes								 							
									},
									position8: {
										firstname: $scope.pos8selected.firstname,
										secondname: $scope.pos8selected.secondname,
										id: $scope.pos8selected.id,
										goals:$scope.pos8selected.gamegoals,
										assists:$scope.pos8selected.gameassists,
										yellowCards: $scope.pos8selected.gameyellow,
										redCards: $scope.pos8selected.gamered,
										minutes: $scope.pos8selected.gameminutes								 							
									},
									position9: {
										firstname: $scope.pos9selected.firstname,
										secondname: $scope.pos9selected.secondname,
										id: $scope.pos9selected.id,
										goals:$scope.pos9selected.gamegoals,
										assists:$scope.pos9selected.gameassists,
										yellowCards: $scope.pos9selected.gameyellow,
										redCards: $scope.pos9selected.gamered,
										minutes: $scope.pos9selected.gameminutes										 							
									},
									position10: {
										firstname: $scope.pos10selected.firstname,
										secondname: $scope.pos10selected.secondname,
										id: $scope.pos10selected.id,
										goals:$scope.pos10selected.gamegoals,
										assists:$scope.pos10selected.gameassists,
										yellowCards: $scope.pos10selected.gameyellow,
										redCards: $scope.pos10selected.gamered,
										minutes: $scope.pos10selected.gameminutes										 							
									},
									position11: {
										firstname: $scope.pos11selected.firstname,
										secondname: $scope.pos11selected.secondname,
										id: $scope.pos11selected.id,
										goals:$scope.pos11selected.gamegoals,
										assists:$scope.pos11selected.gameassists,
										yellowCards: $scope.pos11selected.gameyellow,
										redCards: $scope.pos11selected.gamered,
										minutes: $scope.pos11selected.gameminutes									 							
									},
									sub1: {
										firstname: $scope.sub1.firstname,
										secondname: $scope.sub1.secondname,
										id: $scope.sub1.id,
										goals:$scope.sub1.subgoals,
										assists:$scope.sub1.subassists,
										yellowCards: $scope.sub1.subyellow,
										redCards: $scope.sub1.subred,
										minutes: $scope.sub1.subminuteon,
										didplayercomeon: $scope.subon1									 							
									},
									sub2: {
										firstname: $scope.sub2.firstname,
										secondname: $scope.sub2.secondname,
										id: $scope.sub2.id,
										goals:$scope.sub2.subgoals,
										assists:$scope.sub2.subassists,
										yellowCards: $scope.sub2.subyellow,
										redCards: $scope.sub2.subred,
										minutes: $scope.sub2.subminuteon,
										didplayercomeon: $scope.subon2									 							
									},
									sub3: {
										firstname: $scope.sub3.firstname,
										secondname: $scope.sub3.secondname,
										id: $scope.sub3.id,
										goals:$scope.sub3.subgoals,
										assists:$scope.sub3.subassists,
										yellowCards: $scope.sub3.subyellow,
										redCards: $scope.sub3.subred,
										minutes: $scope.sub3.subminuteon,
										didplayercomeon: $scope.subon3									 							
									}																																																																																																											
								}
							})
							.then(function(ref){

								$scope.pos1selected = null;
								$scope.pos2selected = null;
								$scope.pos3selected = null;
								$scope.pos4selected = null;
								$scope.pos5selected = null;
								$scope.pos6selected = null;
								$scope.pos7selected = null;
								$scope.pos8selected = null;
								$scope.pos9selected = null;
								$scope.pos10selected = null;
								$scope.pos11selected = null;
								$scope.sub1 = null;
								$scope.sub2 = null;
								$scope.sub3 = null;
								$scope.homeoraway = null;
								$scope.opponent = null;
								$scope.scorehome = null;
								$scope.dateplayed = null;
								$scope.scoreaway = null;

								var sid = ref.path.o[1];

								var position1 = new Firebase(FIREBASE_URL + '/results/' + sid + '/position/position1');
								var position1Info = $firebaseObject(position1);

								var position2 = new Firebase(FIREBASE_URL + '/results/' + sid + '/position/position2');
								var position2Info = $firebaseObject(position2);	

								var position3 = new Firebase(FIREBASE_URL + '/results/' + sid + '/position/position3');
								var position3Info = $firebaseObject(position3);		

								var position4 = new Firebase(FIREBASE_URL + '/results/' + sid + '/position/position4');
								var position4Info = $firebaseObject(position4);		

								var position5 = new Firebase(FIREBASE_URL + '/results/' + sid + '/position/position5');
								var position5Info = $firebaseObject(position5);		

								var position6 = new Firebase(FIREBASE_URL + '/results/' + sid + '/position/position6');
								var position6Info = $firebaseObject(position6);

								var position7 = new Firebase(FIREBASE_URL + '/results/' + sid + '/position/position7');
								var position7Info = $firebaseObject(position7);		

								var position8 = new Firebase(FIREBASE_URL + '/results/' + sid + '/position/position8');
								var position8Info = $firebaseObject(position8);	

								var position9 = new Firebase(FIREBASE_URL + '/results/' + sid + '/position/position9');
								var position9Info = $firebaseObject(position9);

								var position10 = new Firebase(FIREBASE_URL + '/results/' + sid + '/position/position10');
								var position10Info = $firebaseObject(position10);									

								var position11 = new Firebase(FIREBASE_URL + '/results/' + sid + '/position/position11');
								var position11Info = $firebaseObject(position11);	

								var sub1 = new Firebase(FIREBASE_URL + '/results/' + sid + '/position/sub1');
								var sub1Info = $firebaseObject(sub1);		

								var sub2 = new Firebase(FIREBASE_URL + '/results/' + sid + '/position/sub2');
								var sub2Info = $firebaseObject(sub2);

								var sub3 = new Firebase(FIREBASE_URL + '/results/' + sid + '/position/sub3');
								var sub3Info = $firebaseObject(sub3);																																																																																							

								var away = new Firebase(FIREBASE_URL + '/results/' + sid + '/away');
								var awayInfo = $firebaseObject(away);		

								var resultScore = new Firebase(FIREBASE_URL + '/results/' + sid);
								var resultScoreInfo = $firebaseObject(resultScore);								

								resultScoreInfo.$loaded(function(){
									angular.forEach(teamsInfo, function(teamInfo){
										if(awayInfo.id === teamInfo.id) {
											if(resultScoreInfo.scoreaway > resultScoreInfo.scorehome) {
												teamInfo.points = teamInfo.points + 3;	
												teamInfo.win = teamInfo.win + 1;
												teamInfo.awaywin = teamInfo.awaywin + 1											

											}
											if(resultScoreInfo.scoreaway === resultScoreInfo.scorehome){
												teamInfo.points = teamInfo.points + 1;	
												teamInfo.draw = teamInfo.draw + 1;
												teamInfo.awaydraw = teamInfo.awaydraw + 1																				
											}
											if(resultScoreInfo.scoreaway < resultScoreInfo.scorehome){
												teamInfo.loss = teamInfo.loss + 1;
												teamInfo.awayloss = teamInfo.awayloss + 1																				
											}	
											teamInfo.apps = teamInfo.apps + 1;
											teamInfo.awayapps = teamInfo.awayapps + 1;
											teamInfo.goalsfor = teamInfo.goalsfor + $scope.scoreaway;
											teamInfo.goalsforaway = teamInfo.goalsforaway + $scope.scoreaway;
											teamInfo.goalsagainst = teamInfo.goalsagainst + $scope.scorehome;
											teamInfo.goalsagainstaway = teamInfo.goalsagainstaway + $scope.scorehome;										

											teamsInfo.$save(teamInfo)							
										}
									});	

									if(resultScoreInfo.scoreaway === resultScoreInfo.scorehome){
										crInfo.points = crInfo.points + 1;	
										crInfo.draw = crInfo.draw + 1;
										crInfo.homedraw = crInfo.homedraw + 1;											
									}
									if(resultScoreInfo.scoreaway < resultScoreInfo.scorehome){
										crInfo.points = crInfo.points + 3;
										crInfo.win = crInfo.win + 1;
										crInfo.homewin = crInfo.homewin + 1
									}	
									if(resultScoreInfo.scoreaway > resultScoreInfo.scorehome){
										crInfo.loss = crInfo.loss + 1
										crInfo.homeloss = crInfo.homeloss + 1
									}								

									crInfo.apps = crInfo.apps + 1;
									crInfo.homeapps = crInfo.homeapps + 1;
									crInfo.goalsfor = crInfo.goalsfor + $scope.scorehome;	
									crInfo.goalsforhome = crInfo.goalsforhome + $scope.scorehome;
									crInfo.goalsagainst = crInfo.goalsagainst + $scope.scoreaway;
									crInfo.goalsagainsthome = crInfo.goalsagainsthome + $scope.scoreaway;															

									crInfo.$save(crInfo)
								})
			

						        angular.forEach(playersInfo, function(playerInfo) {
									position1Info.$loaded().then(function(){
										if(playerInfo.id === position1Info.id) {
											playerInfo.apps = playerInfo.apps + 1;
											playerInfo.goals = playerInfo.goals + position1Info.goals;
											playerInfo.assists = playerInfo.assists + position1Info.assists;
											playerInfo.yellowCards =  playerInfo.yellowCards + position1Info.yellowCards
											playerInfo.redCards =  playerInfo.redCards + position1Info.redCards;
											playerInfo.minutes = playerInfo.minutes + position1Info.minutes;
											playersInfo.$save(playerInfo)
										}
									});							

									position2Info.$loaded().then(function(){
										if(playerInfo.id === position2Info.id) {
											console.log(playerInfo)	
											playerInfo.apps = playerInfo.apps + 1;
											playerInfo.goals = playerInfo.goals + position2Info.goals;
											playerInfo.assists = playerInfo.assists + position2Info.assists;
											playerInfo.yellowCards =  playerInfo.yellowCards + position2Info.yellowCards
											playerInfo.redCards =  playerInfo.redCards + position2Info.redCards;
											playerInfo.minutes = playerInfo.minutes + position2Info.minutes;							
											playersInfo.$save(playerInfo)
											console.log(playerInfo)	
										}	
									});	

									position3Info.$loaded().then(function(){
										if(playerInfo.id === position3Info.id) {
											playerInfo.apps = playerInfo.apps + 1;
											playerInfo.goals = playerInfo.goals + position3Info.goals;
											playerInfo.assists = playerInfo.assists + position3Info.assists;
											playerInfo.yellowCards =  playerInfo.yellowCards + position3Info.yellowCards
											playerInfo.redCards =  playerInfo.redCards + position3Info.redCards;
											playerInfo.minutes = playerInfo.minutes + position3Info.minutes;									
											playersInfo.$save(playerInfo)
										}	
									});	

									position4Info.$loaded().then(function(){
										if(playerInfo.id === position4Info.id) {
											playerInfo.apps = playerInfo.apps + 1;
											playerInfo.goals = playerInfo.goals + position4Info.goals;
											playerInfo.assists = playerInfo.assists + position4Info.assists;
											playerInfo.yellowCards =  playerInfo.yellowCards + position4Info.yellowCards
											playerInfo.redCards =  playerInfo.redCards + position4Info.redCards;
											playerInfo.minutes = playerInfo.minutes + position4Info.minutes;										
											playersInfo.$save(playerInfo)
										}	
									});	

									position5Info.$loaded().then(function(){
										if(playerInfo.id === position5Info.id) {
											playerInfo.apps = playerInfo.apps + 1;
											playerInfo.goals = playerInfo.goals + position5Info.goals;
											playerInfo.assists = playerInfo.assists + position5Info.assists;
											playerInfo.yellowCards =  playerInfo.yellowCards + position5Info.yellowCards;
											playerInfo.redCards =  playerInfo.redCards + position5Info.redCards;
											playerInfo.minutes = playerInfo.minutes + position5Info.minutes;										
											playersInfo.$save(playerInfo)
										}	
									});	

									position6Info.$loaded().then(function(){
										if(playerInfo.id === position6Info.id) {
											playerInfo.apps = playerInfo.apps + 1;
											playerInfo.goals = playerInfo.goals + position6Info.goals;
											playerInfo.assists = playerInfo.assists + position6Info.assists;
											playerInfo.yellowCards =  playerInfo.yellowCards + position6Info.yellowCards
											playerInfo.redCards =  playerInfo.redCards + position6Info.redCards;
											playerInfo.minutes = playerInfo.minutes + position6Info.minutes;										
											playersInfo.$save(playerInfo)
										}	
									});		

									position7Info.$loaded().then(function(){
										if(playerInfo.id === position7Info.id) {
											playerInfo.apps = playerInfo.apps + 1;
											playerInfo.goals = playerInfo.goals + position7Info.goals;
											playerInfo.assists = playerInfo.assists + position7Info.assists;
											playerInfo.yellowCards =  playerInfo.yellowCards + position7Info.yellowCards
											playerInfo.redCards =  playerInfo.redCards + position7Info.redCards;
											playerInfo.minutes = playerInfo.minutes + position7Info.minutes;										
											playersInfo.$save(playerInfo)
										}	
									});	

									position8Info.$loaded().then(function(){
										if(playerInfo.id === position8Info.id) {
											playerInfo.apps = playerInfo.apps + 1;
											playerInfo.goals = playerInfo.goals + position8Info.goals;
											playerInfo.assists = playerInfo.assists + position8Info.assists;
											playerInfo.yellowCards =  playerInfo.yellowCards + position8Info.yellowCards;
											playerInfo.redCards =  playerInfo.redCards + position8Info.redCards;
											playerInfo.minutes = playerInfo.minutes + position8Info.minutes;										
											playersInfo.$save(playerInfo)
										}	
									});		

									position9Info.$loaded().then(function(){
										if(playerInfo.id === position9Info.id) {
											playerInfo.apps = playerInfo.apps + 1;
											playerInfo.goals = playerInfo.goals + position9Info.goals;
											playerInfo.assists = playerInfo.assists + position9Info.assists;
											playerInfo.yellowCards =  playerInfo.yellowCards + position9Info.yellowCards
											playerInfo.redCards =  playerInfo.redCards + position9Info.redCards;
											playerInfo.minutes = playerInfo.minutes + position9Info.minutes;										
											playersInfo.$save(playerInfo)
										}	
									});

									position10Info.$loaded().then(function(){
										if(playerInfo.id === position10Info.id) {
											playerInfo.apps = playerInfo.apps + 1;
											playerInfo.goals = playerInfo.goals + position10Info.goals;
											playerInfo.assists = playerInfo.assists + position10Info.assists;
											playerInfo.yellowCards =  playerInfo.yellowCards + position10Info.yellowCards;
											playerInfo.redCards =  playerInfo.redCards + position10Info.redCards;
											playerInfo.minutes = playerInfo.minutes + position10Info.minutes;									
											playersInfo.$save(playerInfo)
										}	
									});	
									position11Info.$loaded().then(function(){
										if(playerInfo.id === position11Info.id) {
											playerInfo.apps = playerInfo.apps + 1;
											playerInfo.goals = playerInfo.goals + position10Info.goals;
											playerInfo.assists = playerInfo.assists + position10Info.assists;
											playerInfo.yellowCards =  playerInfo.yellowCards + position10Info.yellowCards
											playerInfo.redCards =  playerInfo.redCards + position10Info.redCards;
											playerInfo.minutes = playerInfo.minutes + position10Info.minutes;									
											playersInfo.$save(playerInfo)
										}	
									});	
									sub1Info.$loaded().then(function(){
										if(playerInfo.id === sub1Info.id) {		
											console.log(sub1Info.didplayercomeon)								
											if(sub1Info.didplayercomeon){
												playerInfo.apps = playerInfo.apps + 1;
												playerInfo.goals = playerInfo.goals + sub1Info.goals;
												playerInfo.assists = playerInfo.assists + sub1Info.assists;
												playerInfo.yellowCards =  playerInfo.yellowCards + sub1Info.yellowCards
												playerInfo.redCards =  playerInfo.redCards + sub1Info.redCards;
												playerInfo.minutes = playerInfo.minutes + sub1Info.minutes;								
												playersInfo.$save(playerInfo);
											}	
										}
									});	
									sub2Info.$loaded().then(function(){
										if(playerInfo.id === sub2Info.id) {	
											if(sub2Info.didplayercomeon){																		
												playerInfo.apps = playerInfo.apps + 1;
												playerInfo.goals = playerInfo.goals + sub2Info.goals;
												playerInfo.assists = playerInfo.assists + sub2Info.assists;
												playerInfo.yellowCards =  playerInfo.yellowCards + sub2Info.yellowCards
												playerInfo.redCards =  playerInfo.redCards + sub2Info.redCards;
												playerInfo.minutes = playerInfo.minutes + sub2Info.minutes;								
												playersInfo.$save(playerInfo)
											}
										}	
									});	
									sub3Info.$loaded().then(function(){
										if(playerInfo.id === sub3Info.id) {	
											if(sub3Info.didplayercomeon){																		
												playerInfo.apps = playerInfo.apps + 1;
												playerInfo.goals = playerInfo.goals + sub3Info.goals;
												playerInfo.assists = playerInfo.assists + sub3Info.assists;
												playerInfo.yellowCards =  playerInfo.yellowCards + sub3Info.yellowCards
												playerInfo.redCards =  playerInfo.redCards + sub3Info.redCards;
												playerInfo.minutes = playerInfo.minutes + sub3Info.minutes;								
												playersInfo.$save(playerInfo)
											}
										}	
									});																																																																																																					
								})					
							});
						});						
					} else {
						crInfo.$loaded().then(function(){
							resultsInfo.$add({
								home: $scope.opponent,
								away: crInfo,
								scorehome: $scope.scorehome,
								scoreaway: $scope.scoreaway,
								dateplayed: $scope.dateplayed,
								dateAdded: Firebase.ServerValue.TIMESTAMP,
								position: {								
									position1: {
										firstname: $scope.pos1selected.firstname,
										secondname: $scope.pos1selected.secondname,
										id: $scope.pos1selected.id,
										goals:$scope.pos1selected.gamegoals,
										assists:$scope.pos1selected.gameassists,
										yellowCards: $scope.pos1selected.gameyellow,
										redCards: $scope.pos1selected.gamered,
										minutes: $scope.pos1selected.gameminutes
									},
									position2: {
										firstname: $scope.pos2selected.firstname,
										secondname: $scope.pos2selected.secondname,
										id: $scope.pos2selected.id,
										goals:$scope.pos2selected.gamegoals,
										assists:$scope.pos2selected.gameassists,
										yellowCards: $scope.pos2selected.gameyellow,
										redCards: $scope.pos2selected.gamered,
										minutes: $scope.pos2selected.gameminutes														
									},	
									position3: {
										firstname: $scope.pos3selected.firstname,
										secondname: $scope.pos3selected.secondname,
										id: $scope.pos3selected.id,
										goals:$scope.pos3selected.gamegoals,
										assists:$scope.pos3selected.gameassists,
										yellowCards: $scope.pos3selected.gameyellow,
										redCards: $scope.pos3selected.gamered,
										minutes: $scope.pos3selected.gameminutes								 							
									},
									position4: {
										firstname: $scope.pos4selected.firstname,
										secondname: $scope.pos4selected.secondname,
										id: $scope.pos4selected.id,
										goals:$scope.pos4selected.gamegoals,
										assists:$scope.pos4selected.gameassists,
										yellowCards: $scope.pos4selected.gameyellow,
										redCards: $scope.pos4selected.gamered,
										minutes: $scope.pos4selected.gameminutes									 							
									},
									position5: {
										firstname: $scope.pos5selected.firstname,
										secondname: $scope.pos5selected.secondname,
										id: $scope.pos5selected.id,
										goals:$scope.pos5selected.gamegoals,
										assists:$scope.pos5selected.gameassists,
										yellowCards: $scope.pos5selected.gameyellow,
										redCards: $scope.pos5selected.gamered,
										minutes: $scope.pos5selected.gameminutes									 							
									},
									position6: {
										firstname: $scope.pos6selected.firstname,
										secondname: $scope.pos6selected.secondname,
										id: $scope.pos6selected.id,
										goals:$scope.pos6selected.gamegoals,
										assists:$scope.pos6selected.gameassists,
										yellowCards: $scope.pos6selected.gameyellow,
										redCards: $scope.pos6selected.gamered,
										minutes: $scope.pos6selected.gameminutes								 	
									},
									position7: {
										firstname: $scope.pos7selected.firstname,
										secondname: $scope.pos7selected.secondname,
										id: $scope.pos7selected.id,
										goals:$scope.pos7selected.gamegoals,
										assists:$scope.pos7selected.gameassists,
										yellowCards: $scope.pos7selected.gameyellow,
										redCards: $scope.pos7selected.gamered,
										minutes: $scope.pos7selected.gameminutes								 							
									},
									position8: {
										firstname: $scope.pos8selected.firstname,
										secondname: $scope.pos8selected.secondname,
										id: $scope.pos8selected.id,
										goals:$scope.pos8selected.gamegoals,
										assists:$scope.pos8selected.gameassists,
										yellowCards: $scope.pos8selected.gameyellow,
										redCards: $scope.pos8selected.gamered,
										minutes: $scope.pos8selected.gameminutes								 							
									},
									position9: {
										firstname: $scope.pos9selected.firstname,
										secondname: $scope.pos9selected.secondname,
										id: $scope.pos9selected.id,
										goals:$scope.pos9selected.gamegoals,
										assists:$scope.pos9selected.gameassists,
										yellowCards: $scope.pos9selected.gameyellow,
										redCards: $scope.pos9selected.gamered,
										minutes: $scope.pos9selected.gameminutes										 							
									},
									position10: {
										firstname: $scope.pos10selected.firstname,
										secondname: $scope.pos10selected.secondname,
										id: $scope.pos10selected.id,
										goals:$scope.pos10selected.gamegoals,
										assists:$scope.pos10selected.gameassists,
										yellowCards: $scope.pos10selected.gameyellow,
										redCards: $scope.pos10selected.gamered,
										minutes: $scope.pos10selected.gameminutes										 							
									},
									position11: {
										firstname: $scope.pos11selected.firstname,
										secondname: $scope.pos11selected.secondname,
										id: $scope.pos11selected.id,
										goals:$scope.pos11selected.gamegoals,
										assists:$scope.pos11selected.gameassists,
										yellowCards: $scope.pos11selected.gameyellow,
										redCards: $scope.pos11selected.gamered,
										minutes: $scope.pos11selected.gameminutes									 							
									},
									sub1: {
										firstname: $scope.sub1.firstname,
										secondname: $scope.sub1.secondname,
										id: $scope.sub1.id,
										goals:$scope.sub1.subgoals,
										assists:$scope.sub1.subassists,
										yellowCards: $scope.sub1.subyellow,
										redCards: $scope.sub1.subred,
										minutes: $scope.sub1.subminuteon									 							
									},
									sub2: {
										firstname: $scope.sub2.firstname,
										secondname: $scope.sub2.secondname,
										id: $scope.sub2.id,
										goals:$scope.sub2.subgoals,
										assists:$scope.sub2.subassists,
										yellowCards: $scope.sub2.subyellow,
										redCards: $scope.sub2.subred,
										minutes: $scope.sub2.subminuteon									 							
									},
									sub3: {
										firstname: $scope.sub3.firstname,
										secondname: $scope.sub3.secondname,
										id: $scope.sub3.id,
										goals:$scope.sub3.subgoals,
										assists:$scope.sub3.subassists,
										yellowCards: $scope.sub3.subyellow,
										redCards: $scope.sub3.subred,
										minutes: $scope.sub3.subminuteon									 							
									},																																																																																																											
								}
							}).then(function(ref){
								$scope.pos1selected = null;
								$scope.pos2selected = null;
								$scope.pos3selected = null;
								$scope.pos4selected = null;
								$scope.pos5selected = null;
								$scope.pos6selected = null;
								$scope.pos7selected = null;
								$scope.pos8selected = null;
								$scope.pos9selected = null;
								$scope.pos10selected = null;
								$scope.pos11selected = null;
								$scope.sub1 = null;
								$scope.sub2 = null;	
								$scope.sub3 = null;														
								$scope.homeoraway = null;
								$scope.opponent = null;
								$scope.scorehome = null;
								$scope.dateplayed = null;
								$scope.scoreaway = null;

								var sid = ref.path.o[1];

								var position1 = new Firebase(FIREBASE_URL + '/results/' + sid + '/position/position1');
								var position1Info = $firebaseObject(position1);

								var position2 = new Firebase(FIREBASE_URL + '/results/' + sid + '/position/position2');
								var position2Info = $firebaseObject(position2);	

								var position3 = new Firebase(FIREBASE_URL + '/results/' + sid + '/position/position3');
								var position3Info = $firebaseObject(position3);		

								var position4 = new Firebase(FIREBASE_URL + '/results/' + sid + '/position/position4');
								var position4Info = $firebaseObject(position4);		

								var position5 = new Firebase(FIREBASE_URL + '/results/' + sid + '/position/position5');
								var position5Info = $firebaseObject(position5);		

								var position6 = new Firebase(FIREBASE_URL + '/results/' + sid + '/position/position6');
								var position6Info = $firebaseObject(position6);

								var position7 = new Firebase(FIREBASE_URL + '/results/' + sid + '/position/position7');
								var position7Info = $firebaseObject(position7);		

								var position8 = new Firebase(FIREBASE_URL + '/results/' + sid + '/position/position8');
								var position8Info = $firebaseObject(position8);	

								var position9 = new Firebase(FIREBASE_URL + '/results/' + sid + '/position/position9');
								var position9Info = $firebaseObject(position9);

								var position10 = new Firebase(FIREBASE_URL + '/results/' + sid + '/position/position10');
								var position10Info = $firebaseObject(position10);									

								var position11 = new Firebase(FIREBASE_URL + '/results/' + sid + '/position/position11');
								var position11Info = $firebaseObject(position11);	

								var sub1 = new Firebase(FIREBASE_URL + '/results/' + sid + '/position/sub1');
								var sub1Info = $firebaseObject(sub1);

								var sub2 = new Firebase(FIREBASE_URL + '/results/' + sid + '/position/sub2');
								var sub2Info = $firebaseObject(sub2);

								var sub3 = new Firebase(FIREBASE_URL + '/results/' + sid + '/position/sub3');
								var sub3Info = $firebaseObject(sub3);																																						

								var home = new Firebase(FIREBASE_URL + '/results/' + sid + '/home');
								var homeInfo = $firebaseObject(home);		

								var resultScore = new Firebase(FIREBASE_URL + '/results/' + sid);
								var resultScoreInfo = $firebaseObject(resultScore);								

								resultScoreInfo.$loaded(function(){
									angular.forEach(teamsInfo, function(teamInfo){
										if(homeInfo.id === teamInfo.id) {
											if(resultScoreInfo.scorehome > resultScoreInfo.scoreaway) {
												teamInfo.points = teamInfo.points + 3;	
												teamInfo.win = teamInfo.win + 1;
												teamInfo.homewin = teamInfo.homewin + 1																					
											}
											if(resultScoreInfo.scoreaway === resultScoreInfo.scorehome){
												teamInfo.points = teamInfo.points + 1;	
												teamInfo.draw = teamInfo.draw + 1;
												teamInfo.homedraw = teamInfo.homedraw + 1																				
											}
											if(resultScoreInfo.scorehome < resultScoreInfo.scoreaway) {	
												teamInfo.loss = teamInfo.loss + 1;
												teamInfo.homeloss = teamInfo.homeloss + 1																					
											}
											teamInfo.apps = teamInfo.apps + 1;
											teamInfo.homeapps = teamInfo.homeapps + 1;
											teamInfo.goalsfor = teamInfo.goalsfor + $scope.scorehome;
											teamInfo.goalsforhome = teamInfo.goalsforhome + $scope.scorehome;
											teamInfo.goalsagainst = teamInfo.goalsagainst + $scope.scoreaway;
											teamInfo.goalsagainsthome = teamInfo.goalsagainsthome + $scope.scoreaway;																					
											teamsInfo.$save(teamInfo)
								
										}
									});	

									if(resultScoreInfo.scoreaway === resultScoreInfo.scorehome){
										crInfo.points = crInfo.points + 1;		
										crInfo.draw = crInfo.draw + 1;
										crInfo.awaydraw = crInfo.awaydraw + 1;																			
									}
									if(resultScoreInfo.scorehome > resultScoreInfo.scoreaway){
										crInfo.loss = crInfo.loss + 1;
										crInfo.awayloss = crInfo.awayloss + 1									

									}	
									if(resultScoreInfo.scoreaway > resultScoreInfo.scorehome){	
										crInfo.points = crInfo.points + 3;	
										crInfo.win = crInfo.win + 1;
										crInfo.awaywin = crInfo.awaywin + 1;																			
									}	

									crInfo.apps = crInfo.apps + 1;
									crInfo.awayapps = crInfo.awayapps + 1;
									crInfo.goalsfor = crInfo.goalsfor + $scope.scoreaway;	
									crInfo.goalsforaway = crInfo.goalsforaway + $scope.scoreaway;
									crInfo.goalsagainst = crInfo.goalsagainst + $scope.scorehome;
									crInfo.goalsagainstaway = crInfo.goalsagainstaway + $scope.scorehome;	

									crInfo.$save(crInfo)
								})
			

						        angular.forEach(playersInfo, function(playerInfo) {
									position1Info.$loaded().then(function(){
										if(playerInfo.id === position1Info.id) {
											playerInfo.apps = playerInfo.apps + 1;
											playerInfo.goals = playerInfo.goals + position1Info.goals;
											playerInfo.assists = playerInfo.assists + position1Info.assists;
											playerInfo.yellowCards =  playerInfo.yellowCards + position1Info.yellowCards
											playerInfo.redCards =  playerInfo.redCards + position1Info.redCards;
											playerInfo.minutes = playerInfo.minutes + position1Info.minutes;
											playersInfo.$save(playerInfo)
										}
									});							

									position2Info.$loaded().then(function(){
										if(playerInfo.id === position2Info.id) {
											playerInfo.apps = playerInfo.apps + 1;
											playerInfo.goals = playerInfo.goals + position2Info.goals;
											playerInfo.assists = playerInfo.assists + position2Info.assists;
											playerInfo.yellowCards =  playerInfo.yellowCards + position2Info.yellowCards
											playerInfo.redCards =  playerInfo.redCards + position2Info.redCards;
											playerInfo.minutes = playerInfo.minutes + position2Info.minutes;									
											playersInfo.$save(playerInfo)
										}	
									});	

									position3Info.$loaded().then(function(){
										if(playerInfo.id === position3Info.id) {
											playerInfo.apps = playerInfo.apps + 1;
											playerInfo.goals = playerInfo.goals + position3Info.goals;
											playerInfo.assists = playerInfo.assists + position3Info.assists;
											playerInfo.yellowCards =  playerInfo.yellowCards + position3Info.yellowCards
											playerInfo.redCards =  playerInfo.redCards + position3Info.redCards;
											playerInfo.minutes = playerInfo.minutes + position3Info.minutes;									
											playersInfo.$save(playerInfo)
										}	
									});	

									position4Info.$loaded().then(function(){
										if(playerInfo.id === position4Info.id) {
											playerInfo.apps = playerInfo.apps + 1;
											playerInfo.goals = playerInfo.goals + position4Info.goals;
											playerInfo.assists = playerInfo.assists + position4Info.assists;
											playerInfo.yellowCards =  playerInfo.yellowCards + position4Info.yellowCards
											playerInfo.redCards =  playerInfo.redCards + position4Info.redCards;
											playerInfo.minutes = playerInfo.minutes + position4Info.minutes;										
											playersInfo.$save(playerInfo)
										}	
									});	

									position5Info.$loaded().then(function(){
										if(playerInfo.id === position5Info.id) {
											playerInfo.apps = playerInfo.apps + 1;
											playerInfo.goals = playerInfo.goals + position5Info.goals;
											playerInfo.assists = playerInfo.assists + position5Info.assists;
											playerInfo.yellowCards =  playerInfo.yellowCards + position5Info.yellowCards;
											playerInfo.redCards =  playerInfo.redCards + position5Info.redCards;
											playerInfo.minutes = playerInfo.minutes + position5Info.minutes;										
											playersInfo.$save(playerInfo)
										}	
									});	

									position6Info.$loaded().then(function(){
										if(playerInfo.id === position6Info.id) {
											playerInfo.apps = playerInfo.apps + 1;
											playerInfo.goals = playerInfo.goals + position6Info.goals;
											playerInfo.assists = playerInfo.assists + position6Info.assists;
											playerInfo.yellowCards =  playerInfo.yellowCards + position6Info.yellowCards
											playerInfo.redCards =  playerInfo.redCards + position6Info.redCards;
											playerInfo.minutes = playerInfo.minutes + position6Info.minutes;										
											playersInfo.$save(playerInfo)
										}	
									});		

									position7Info.$loaded().then(function(){
										if(playerInfo.id === position7Info.id) {
											playerInfo.apps = playerInfo.apps + 1;
											playerInfo.goals = playerInfo.goals + position7Info.goals;
											playerInfo.assists = playerInfo.assists + position7Info.assists;
											playerInfo.yellowCards =  playerInfo.yellowCards + position7Info.yellowCards
											playerInfo.redCards =  playerInfo.redCards + position7Info.redCards;
											playerInfo.minutes = playerInfo.minutes + position7Info.minutes;										
											playersInfo.$save(playerInfo)
										}	
									});	

									position8Info.$loaded().then(function(){
										if(playerInfo.id === position8Info.id) {
											playerInfo.apps = playerInfo.apps + 1;
											playerInfo.goals = playerInfo.goals + position8Info.goals;
											playerInfo.assists = playerInfo.assists + position8Info.assists;
											playerInfo.yellowCards =  playerInfo.yellowCards + position8Info.yellowCards;
											playerInfo.redCards =  playerInfo.redCards + position8Info.redCards;
											playerInfo.minutes = playerInfo.minutes + position8Info.minutes;										
											playersInfo.$save(playerInfo)
										}	
									});		

									position9Info.$loaded().then(function(){
										if(playerInfo.id === position9Info.id) {
											playerInfo.apps = playerInfo.apps + 1;
											playerInfo.goals = playerInfo.goals + position9Info.goals;
											playerInfo.assists = playerInfo.assists + position9Info.assists;
											playerInfo.yellowCards =  playerInfo.yellowCards + position9Info.yellowCards
											playerInfo.redCards =  playerInfo.redCards + position9Info.redCards;
											playerInfo.minutes = playerInfo.minutes + position9Info.minutes;										
											playersInfo.$save(playerInfo)
										}	
									});

									position10Info.$loaded().then(function(){
										if(playerInfo.id === position10Info.id) {
											playerInfo.apps = playerInfo.apps + 1;
											playerInfo.goals = playerInfo.goals + position10Info.goals;
											playerInfo.assists = playerInfo.assists + position10Info.assists;
											playerInfo.yellowCards =  playerInfo.yellowCards + position10Info.yellowCards;
											playerInfo.redCards =  playerInfo.redCards + position10Info.redCards;
											playerInfo.minutes = playerInfo.minutes + position10Info.minutes;									
											playersInfo.$save(playerInfo)
										}	
									});	
									position11Info.$loaded().then(function(){
										if(playerInfo.id === position11Info.id) {
											playerInfo.apps = playerInfo.apps + 1;
											playerInfo.goals = playerInfo.goals + position10Info.goals;
											playerInfo.assists = playerInfo.assists + position10Info.assists;
											playerInfo.yellowCards =  playerInfo.yellowCards + position10Info.yellowCards
											playerInfo.redCards =  playerInfo.redCards + position10Info.redCards;
											playerInfo.minutes = playerInfo.minutes + position10Info.minutes;									
											playersInfo.$save(playerInfo)
										}	
									});	
									sub1Info.$loaded().then(function(){
										if(playerInfo.id === sub1Info.id) {
											playerInfo.apps = playerInfo.apps + 1;
											playerInfo.goals = playerInfo.goals + sub1Info.goals;
											playerInfo.assists = playerInfo.assists + sub1Info.assists;
											playerInfo.yellowCards =  playerInfo.yellowCards + sub1Info.yellowCards
											playerInfo.redCards =  playerInfo.redCards + sub1Info.redCards;
											playerInfo.minutes = playerInfo.minutes + sub1Info.minutes;								
											playersInfo.$save(playerInfo)
										}	
									});	
									sub2Info.$loaded().then(function(){
										if(playerInfo.id === sub2Info.id) {
											playerInfo.apps = playerInfo.apps + 1;
											playerInfo.goals = playerInfo.goals + sub2Info.goals;
											playerInfo.assists = playerInfo.assists + sub2Info.assists;
											playerInfo.yellowCards =  playerInfo.yellowCards + sub2Info.yellowCards
											playerInfo.redCards =  playerInfo.redCards + sub2Info.redCards;
											playerInfo.minutes = playerInfo.minutes + sub2Info.minutes;								
											playersInfo.$save(playerInfo)
										}	
									});	
									sub3Info.$loaded().then(function(){
										if(playerInfo.id === sub3Info.id) {
											playerInfo.apps = playerInfo.apps + 1;
											playerInfo.goals = playerInfo.goals + sub3Info.goals;
											playerInfo.assists = playerInfo.assists + sub3Info.assists;
											playerInfo.yellowCards =  playerInfo.yellowCards + sub3Info.yellowCards
											playerInfo.redCards =  playerInfo.redCards + sub3Info.redCards;
											playerInfo.minutes = playerInfo.minutes + sub3Info.minutes;								
											playersInfo.$save(playerInfo)
										}	
									});																																																		
								})						
							});
						});	
					} // HERE
				}
			});
		}			
	});

}]);