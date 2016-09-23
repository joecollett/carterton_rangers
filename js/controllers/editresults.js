myApp.controller('editResultsController', ['$scope', '$rootScope','$firebaseAuth', '$firebaseArray', '$firebaseObject', 'FIREBASE_URL','RANGERS_ID','$rootScope', function($scope, $rootScope, $firebaseAuth, $firebaseArray, $firebaseObject, FIREBASE_URL, RANGERS_ID, $rootScope){
		var resultsRef = new Firebase(FIREBASE_URL + '/results');
		var resultsInfo = $firebaseArray(resultsRef);	

		var playersRef = new Firebase(FIREBASE_URL + '/players');
		var playersInfo = $firebaseArray(playersRef);	

		var teamsRef = new Firebase(FIREBASE_URL + '/teams');
		var teamsInfo = $firebaseArray(teamsRef);			

		$scope.players = playersInfo;		
		$scope.results = resultsInfo;


		$scope.deleteResult = function(result){


			if(result.compeition === "League"){
				if(result.home.id === RANGERS_ID){
					angular.forEach(teamsInfo, function(teamInfo){
						if(result.scorehome > result.scoreaway){
							if(teamInfo.id === RANGERS_ID){
								teamInfo.points = teamInfo.points - 3;
								teamInfo.win = teamInfo.win - 1;
								teamInfo.homewin = teamInfo.homewin - 1;
								teamInfo.apps = teamInfo.apps - 1;
								teamInfo.homeapps = teamInfo.homeapps - 1;
								teamInfo.goalsfor = teamInfo.goalsfor - result.scorehome;	
								teamInfo.goalsforhome = teamInfo.goalsforhome - result.scorehome;
								teamInfo.goalsagainst = teamInfo.goalsagainst - result.scoreaway;
								teamInfo.goalsagainsthome = teamInfo.goalsagainsthome - result.scoreaway;																						
							}
							if(teamInfo.id === result.away.id){
								teamInfo.loss = teamInfo.loss - 1;
								teamInfo.awayloss = teamInfo.awayloss - 1;	
								teamInfo.apps = teamInfo.apps - 1;
								teamInfo.awayapps = teamInfo.awayapps - 1;
								teamInfo.goalsfor = teamInfo.goalsfor - result.scoreaway;
								teamInfo.goalsforaway = teamInfo.goalsforaway - result.scoreaway;
								teamInfo.goalsagainst = teamInfo.goalsagainst - result.scorehome;
								teamInfo.goalsagainstaway = teamInfo.goalsagainstaway - result.scorehome;													
							}
						}
						if(result.scorehome < result.scoreaway){
							if(teamInfo.id === RANGERS_ID){
								teamInfo.loss = teamInfo.loss - 1;
								teamInfo.homeloss = teamInfo.homeloss - 1;
								teamInfo.apps = teamInfo.apps - 1;
								teamInfo.homeapps = teamInfo.homeapps - 1;
								teamInfo.goalsfor = teamInfo.goalsfor - result.scorehome;	
								teamInfo.goalsforhome = teamInfo.goalsforhome - result.scorehome;
								teamInfo.goalsagainst = teamInfo.goalsagainst - result.scoreaway;
								teamInfo.goalsagainsthome = teamInfo.goalsagainsthome - result.scoreaway;																						
							}						
							if(teamInfo.id === result.away.id){
								teamInfo.points = teamInfo.points - 3;
								teamInfo.win = teamInfo.win - 1;
								teamInfo.awaywin = teamInfo.awaywin - 1;
								teamInfo.apps = teamInfo.apps - 1;
								teamInfo.awayapps = teamInfo.awayapps - 1;
								teamInfo.goalsfor = teamInfo.goalsfor - result.scoreaway;	
								teamInfo.goalsforaway = teamInfo.goalsforaway - result.scoreaway;
								teamInfo.goalsagainst = teamInfo.goalsagainst - result.scorehome;
								teamInfo.goalsagainstaway = teamInfo.goalsagainstaway - result.scorehome;						
							}	
						}	
						if(result.scorehome === result.scoreaway){
							if(teamInfo.id === RANGERS_ID){
								teamInfo.points = teamInfo.points - 1;
								teamInfo.draw = teamInfo.draw - 1;
								teamInfo.homedraw = teamInfo.homedraw - 1;
								teamInfo.apps = teamInfo.apps - 1;
								teamInfo.homeapps = teamInfo.homeapps - 1;
								teamInfo.goalsfor = teamInfo.goalsfor - result.scorehome;
								teamInfo.goalsforhome = teamInfo.goalsforhome - result.scorehome;	
								teamInfo.goalsagainst = teamInfo.goalsagainst - result.scoreaway;
								teamInfo.goalsagainsthome = teamInfo.goalsagainsthome- result.scoreaway;														
							}						
							if(teamInfo.id === result.away.id){
								teamInfo.points = teamInfo.points - 1;
								teamInfo.draw = teamInfo.draw - 1;
								teamInfo.awaydraw = teamInfo.awaydraw - 1;
								teamInfo.apps = teamInfo.apps - 1;	
								teamInfo.awayapps = teamInfo.awayapps - 1;		
								teamInfo.goalsfor = teamInfo.goalsfor - result.scoreaway;	
								teamInfo.goalsforaway = teamInfo.goalsforaway - result.scoreaway;	
								teamInfo.goalsagainst = teamInfo.goalsagainst - result.scorehome;
								teamInfo.goalsagainstaway = teamInfo.goalsagainstaway - result.scorehome;																							
							}							
						}	
						teamsInfo.$save(teamInfo)
					});			
				}
				if(result.away.id === RANGERS_ID){
					angular.forEach(teamsInfo, function(teamInfo){
						if(result.scorehome < result.scoreaway){
							if(teamInfo.id === RANGERS_ID){
								teamInfo.points = teamInfo.points - 3;
								teamInfo.win = teamInfo.win - 1;
								teamInfo.awaywin = teamInfo.awaywin - 1;
								teamInfo.apps = teamInfo.apps - 1;
								teamInfo.awayapps = teamInfo.awayapps - 1;
								teamInfo.goalsfor = teamInfo.goalsfor - result.scoreaway;	
								teamInfo.goalsforaway = teamInfo.goalsforaway - result.scoreaway;
								teamInfo.goalsagainst = teamInfo.goalsagainst - result.scorehome;
								teamInfo.goalsagainstaway = teamInfo.goalsagainstaway - result.scorehome;	

							}
							if(teamInfo.id === result.home.id){
								teamInfo.loss = teamInfo.loss - 1;
								teamInfo.homeloss = teamInfo.homeloss - 1;
								teamInfo.apps = teamInfo.apps - 1;
								teamInfo.homeapps = teamInfo.homeapps - 1;
								teamInfo.goalsfor = teamInfo.goalsfor - result.scorehome;	
								teamInfo.goalsforhome = teamInfo.goalsforhome - result.scorehome;
								teamInfo.goalsagainst = teamInfo.goalsagainst - result.scoreaway;
								teamInfo.goalsagainsthome = teamInfo.goalsagainsthome - result.scoreaway;
							}
						}
						if(result.scorehome > result.scoreaway){
							if(teamInfo.id === result.home.id){
								teamInfo.points = teamInfo.points - 3;
								teamInfo.win = teamInfo.win - 1;
								teamInfo.homewin = teamInfo.homewin - 1;
								teamInfo.apps = teamInfo.apps - 1;
								teamInfo.homeapps = teamInfo.homeapps - 1;
								teamInfo.goalsfor = teamInfo.goalsfor - result.scorehome;	
								teamInfo.goalsforhome = teamInfo.goalsforhome - result.scorehome;
								teamInfo.goalsagainst = teamInfo.goalsagainst - result.scoreaway;
								teamInfo.goalsagainsthome = teamInfo.goalsagainsthome - result.scoreaway;	
							}	
							if(teamInfo.id === RANGERS_ID){
								teamInfo.loss = teamInfo.loss - 1;
								teamInfo.awayloss = teamInfo.awayloss - 1;
								teamInfo.apps = teamInfo.apps - 1;
								teamInfo.awayapps = teamInfo.awayapps - 1;
								teamInfo.goalsfor = teamInfo.goalsfor - result.scoreaway;	
								teamInfo.goalsforaway = teamInfo.goalsforaway - result.scoreaway;
								teamInfo.goalsagainst = teamInfo.goalsagainst - result.scorehome;
								teamInfo.goalsagainstaway = teamInfo.goalsagainstaway - result.scorehome;	
							}
						}	
						if(result.scorehome === result.scoreaway){
							if(teamInfo.id === result.home.id){
								teamInfo.points = teamInfo.points - 1;
								teamInfo.draw = teamInfo.draw - 1;
								teamInfo.homedraw = teamInfo.homedraw - 1;
								teamInfo.apps = teamInfo.apps - 1;
								teamInfo.homeapps = teamInfo.homeapps - 1;
								teamInfo.goalsfor = teamInfo.goalsfor - result.scorehome;
								teamInfo.goalsforhome = teamInfo.goalsforhome - result.scorehome;	
								teamInfo.goalsagainst = teamInfo.goalsagainst - result.scoreaway;
								teamInfo.goalsagainsthome = teamInfo.goalsagainsthome - result.scoreaway;								
							}	
							if(teamInfo.id === RANGERS_ID){
								teamInfo.points = teamInfo.points - 1;
								teamInfo.draw = teamInfo.draw - 1;
								teamInfo.awaydraw = teamInfo.awaydraw - 1;
								teamInfo.apps = teamInfo.apps - 1;	
								teamInfo.awayapps = teamInfo.awayapps - 1;		
								teamInfo.goalsfor = teamInfo.goalsfor - result.scoreaway;	
								teamInfo.goalsforaway = teamInfo.goalsforaway - result.scoreaway;	
								teamInfo.goalsagainst = teamInfo.goalsagainst - result.scorehome;
								teamInfo.goalsagainstaway = teamInfo.goalsagainstaway - result.scorehome;							
							}						
						}																
						teamsInfo.$save(teamInfo)
					});			
				}			

		        angular.forEach(playersInfo, function(playerInfo) {
		        	if(result.position.position1.id === playerInfo.id){
						playerInfo.apps = playerInfo.apps - 1;
						playerInfo.goals = playerInfo.goals - result.position.position1.goals;
						playerInfo.assists = playerInfo.assists - result.position.position1.assists;
						playerInfo.yellowCards = playerInfo.yellowCards - result.position.position1.yellowCards;
						playerInfo.redCards = playerInfo.redCards - result.position.position1.redCards;
						playerInfo.minutes = playerInfo.minutes - result.position.position1.minutes;
						playersInfo.$save(playerInfo)			        		
		        	}
		        	if(result.position.position2.id === playerInfo.id){
						playerInfo.apps = playerInfo.apps - 1;
						playerInfo.goals = playerInfo.goals - result.position.position2.goals;
						playerInfo.assists = playerInfo.assists - result.position.position2.assists;
						playerInfo.yellowCards = playerInfo.yellowCards - result.position.position2.yellowCards;
						playerInfo.redCards = playerInfo.redCards - result.position.position2.redCards;
						playerInfo.minutes = playerInfo.minutes - result.position.position2.minutes;					
						playersInfo.$save(playerInfo)			        		
		        	}	
		        	if(result.position.position3.id === playerInfo.id){
						playerInfo.apps = playerInfo.apps - 1;
						playerInfo.goals = playerInfo.goals - result.position.position3.goals;
						playerInfo.assists = playerInfo.assists - result.position.position3.assists;
						playerInfo.yellowCards = playerInfo.yellowCards - result.position.position3.yellowCards;
						playerInfo.redCards = playerInfo.redCards - result.position.position3.redCards;
						playerInfo.minutes = playerInfo.minutes - result.position.position3.minutes;					
						playersInfo.$save(playerInfo)			        		
		        	}	 
		        	if(result.position.position4.id === playerInfo.id){
						playerInfo.apps = playerInfo.apps - 1;
						playerInfo.goals = playerInfo.goals - result.position.position4.goals;
						playerInfo.assists = playerInfo.assists - result.position.position4.assists;
						playerInfo.yellowCards = playerInfo.yellowCards - result.position.position4.yellowCards;
						playerInfo.redCards = playerInfo.redCards - result.position.position4.redCards;
						playerInfo.minutes = playerInfo.minutes - result.position.position4.minutes;					
						playersInfo.$save(playerInfo);			        		
		        	}	
		        	if(result.position.position5.id === playerInfo.id){
						playerInfo.apps = playerInfo.apps - 1;
						playerInfo.goals = playerInfo.goals - result.position.position5.goals;
						playerInfo.assists = playerInfo.assists - result.position.position5.assists;
						playerInfo.yellowCards = playerInfo.yellowCards - result.position.position5.yellowCards;
						playerInfo.redCards = playerInfo.redCards - result.position.position5.redCards;
						playerInfo.minutes = playerInfo.minutes - result.position.position5.minutes;					
						playersInfo.$save(playerInfo);			        		
		        	}	
		        	if(result.position.position6.id === playerInfo.id){
						playerInfo.apps = playerInfo.apps - 1;
						playerInfo.goals = playerInfo.goals - result.position.position6.goals;
						playerInfo.assists = playerInfo.assists - result.position.position6.assists;
						playerInfo.yellowCards = playerInfo.yellowCards - result.position.position6.yellowCards;
						playerInfo.redCards = playerInfo.redCards - result.position.position6.redCards;
						playerInfo.minutes = playerInfo.minutes - result.position.position6.minutes;					
						playersInfo.$save(playerInfo);			        		
		        	}	
		        	if(result.position.position7.id === playerInfo.id){
						playerInfo.apps = playerInfo.apps - 1;
						playerInfo.goals = playerInfo.goals - result.position.position7.goals;
						playerInfo.assists = playerInfo.assists - result.position.position7.assists;
						playerInfo.yellowCards = playerInfo.yellowCards - result.position.position7.yellowCards;
						playerInfo.redCards = playerInfo.redCards - result.position.position7.redCards;
						playerInfo.minutes = playerInfo.minutes - result.position.position7.minutes;					
						playersInfo.$save(playerInfo);			        		
		        	}
		        	if(result.position.position8.id === playerInfo.id){
						playerInfo.apps = playerInfo.apps - 1;
						playerInfo.goals = playerInfo.goals - result.position.position8.goals;
						playerInfo.assists = playerInfo.assists - result.position.position8.assists;
						playerInfo.yellowCards = playerInfo.yellowCards - result.position.position8.yellowCards;
						playerInfo.redCards = playerInfo.redCards - result.position.position8.redCards;
						playerInfo.minutes = playerInfo.minutes - result.position.position8.minutes;					
						playersInfo.$save(playerInfo);			        		
		        	}	
		        	if(result.position.position9.id === playerInfo.id){
						playerInfo.apps = playerInfo.apps - 1;
						playerInfo.goals = playerInfo.goals - result.position.position9.goals;
						playerInfo.assists = playerInfo.assists - result.position.position9.assists;
						playerInfo.yellowCards = playerInfo.yellowCards - result.position.position9.yellowCards;
						playerInfo.redCards = playerInfo.redCards - result.position.position9.redCards;
						playerInfo.minutes = playerInfo.minutes - result.position.position9.minutes;					
						playersInfo.$save(playerInfo);			        		
		        	}
		        	if(result.position.position10.id === playerInfo.id){
						playerInfo.apps = playerInfo.apps - 1;
						playerInfo.goals = playerInfo.goals - result.position.position10.goals;
						playerInfo.assists = playerInfo.assists - result.position.position10.assists;
						playerInfo.yellowCards = playerInfo.yellowCards - result.position.position10.yellowCards;
						playerInfo.redCards = playerInfo.redCards - result.position.position10.redCards;
						playerInfo.minutes = playerInfo.minutes - result.position.position10.minutes;				
						playersInfo.$save(playerInfo);			        		
		        	}	
		        	if(result.position.position11.id === playerInfo.id){
						playerInfo.apps = playerInfo.apps - 1;
						playerInfo.goals = playerInfo.goals - result.position.position11.goals;
						playerInfo.assists = playerInfo.assists - result.position.position11.assists;
						playerInfo.yellowCards = playerInfo.yellowCards - result.position.position11.yellowCards;
						playerInfo.redCards = playerInfo.redCards - result.position.position11.redCards;
						playerInfo.minutes = playerInfo.minutes - result.position.position11.minutes;					
						playersInfo.$save(playerInfo);			        		
		        	}		        		        			        		        			        		        		        	        		        	        	
				})				
				resultsInfo.$remove(result)
			} else {
				angular.forEach(teamsInfo, function(teamInfo){
					if(teamInfo.id === RANGERS_ID){
						teamInfo.cupApps = teamInfo.cupApps - 1;
						teamInfo.goalsforCup = teamInfo.goalsforCup - result.scorehome;	
						teamInfo.goalsagainstCup = teamInfo.goalsagainstCup - result.scoreaway;
						if(result.scorehome > result.scoreaway){
							teamInfo.cupWin = teamInfo.cupWin - 1;
						} else {
							teamInfo.cupLoss = teamInfo.cupLoss - 1;
						}															
						teamsInfo.$save(teamInfo)
					}
				});		
				resultsInfo.$remove(result)	
			}
		}
}]);