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


			if(result.competition === "League"){
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
		        	if(result.position.sub1.id === playerInfo.id) {
		        		if(result.position.sub1.didplayercomeon){
							playerInfo.apps = playerInfo.apps - 1;
							playerInfo.goals = playerInfo.goals - result.position.sub1.goals;
							playerInfo.assists = playerInfo.assists - result.position.sub1.assists;
							playerInfo.yellowCards = playerInfo.yellowCards - result.position.sub1.yellowCards;
							playerInfo.redCards = playerInfo.redCards - result.position.sub1.redCards;
							playerInfo.minutes = playerInfo.minutes - result.position.sub1.minutes;	
							playersInfo.$save(playerInfo);		        			
		        		}
		        	}
		        	if(result.position.sub2.id === playerInfo.id) {
		        		if(result.position.sub2.didplayercomeon){
							playerInfo.apps = playerInfo.apps - 1;
							playerInfo.goals = playerInfo.goals - result.position.sub2.goals;
							playerInfo.assists = playerInfo.assists - result.position.sub2.assists;
							playerInfo.yellowCards = playerInfo.yellowCards - result.position.sub2.yellowCards;
							playerInfo.redCards = playerInfo.redCards - result.position.sub2.redCards;
							playerInfo.minutes = playerInfo.minutes - result.position.sub2.minutes;	
							playersInfo.$save(playerInfo);		        			
		        		}
		        	}	
		        	if(result.position.sub3.id === playerInfo.id) {
		        		if(result.position.sub3.didplayercomeon){
							playerInfo.apps = playerInfo.apps - 1;
							playerInfo.goals = playerInfo.goals - result.position.sub3.goals;
							playerInfo.assists = playerInfo.assists - result.position.sub3.assists;
							playerInfo.yellowCards = playerInfo.yellowCards - result.position.sub3.yellowCards;
							playerInfo.redCards = playerInfo.redCards - result.position.sub3.redCards;
							playerInfo.minutes = playerInfo.minutes - result.position.sub3.minutes;	
							playersInfo.$save(playerInfo);		        			
		        		}
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
		        angular.forEach(playersInfo, function(playerInfo) {
		        	if(result.position.position1.id === playerInfo.id){
						playerInfo.cupApps = playerInfo.cupApps - 1;
						playerInfo.cupGoals = playerInfo.cupGoals - result.position.position1.cupGoals;
						playerInfo.cupAssists = playerInfo.cupAssists - result.position.position1.cupAssists;
						playerInfo.cupYellowCards = playerInfo.cupYellowCards - result.position.position1.cupYellowCards;
						playerInfo.cupRedCards = playerInfo.cupRedCards - result.position.position1.cupRedCards;
						playerInfo.cupMinutes = playerInfo.cupMinutes - result.position.position1.cupMinutes;
						playersInfo.$save(playerInfo)			        		
		        	}
		        	if(result.position.position2.id === playerInfo.id){
						playerInfo.cupApps = playerInfo.cupApps - 1;
						playerInfo.cupGoals = playerInfo.cupGoals - result.position.position2.cupGoals;
						playerInfo.cupAssists = playerInfo.cupAssists - result.position.position2.cupAssists;
						playerInfo.cupYellowCards = playerInfo.cupYellowCards - result.position.position2.cupYellowCards;
						playerInfo.cupRedCards = playerInfo.cupRedCards - result.position.position2.cupRedCards;
						playerInfo.cupMinutes = playerInfo.cupMinutes - result.position.position2.cupMinutes;					
						playersInfo.$save(playerInfo)			        		
		        	}	
		        	if(result.position.position3.id === playerInfo.id){
						playerInfo.cupApps = playerInfo.cupApps - 1;
						playerInfo.cupGoals = playerInfo.cupGoals - result.position.position3.cupGoals;
						playerInfo.cupAssists = playerInfo.cupAssists - result.position.position3.cupAssists;
						playerInfo.cupYellowCards = playerInfo.cupYellowCards - result.position.position3.cupYellowCards;
						playerInfo.cupRedCards = playerInfo.cupRedCards - result.position.position3.cupRedCards;
						playerInfo.cupMinutes = playerInfo.cupMinutes - result.position.position3.cupMinutes;						
						playersInfo.$save(playerInfo)			        		
		        	}	 
		        	if(result.position.position4.id === playerInfo.id){
						playerInfo.cupApps = playerInfo.cupApps - 1;
						playerInfo.cupGoals = playerInfo.cupGoals - result.position.position4.cupGoals;
						playerInfo.cupAssists = playerInfo.cupAssists - result.position.position4.cupAssists;
						playerInfo.cupYellowCards = playerInfo.cupYellowCards - result.position.position4.cupYellowCards;
						playerInfo.cupRedCards = playerInfo.cupRedCards - result.position.position4.cupRedCards;
						playerInfo.cupMinutes = playerInfo.cupMinutes - result.position.position4.cupMinutes;							
						playersInfo.$save(playerInfo);			        		
		        	}	
		        	if(result.position.position5.id === playerInfo.id){
						playerInfo.cupApps = playerInfo.cupApps - 1;
						playerInfo.cupGoals = playerInfo.cupGoals - result.position.position5.cupGoals;
						playerInfo.cupAssists = playerInfo.cupAssists - result.position.position5.cupAssists;
						playerInfo.cupYellowCards = playerInfo.cupYellowCards - result.position.position5.cupYellowCards;
						playerInfo.cupRedCards = playerInfo.cupRedCards - result.position.position5.cupRedCards;
						playerInfo.cupMinutes = playerInfo.cupMinutes - result.position.position5.cupMinutes;						
						playersInfo.$save(playerInfo);			        		
		        	}	
		        	if(result.position.position6.id === playerInfo.id){
						playerInfo.cupApps = playerInfo.cupApps - 1;
						playerInfo.cupGoals = playerInfo.cupGoals - result.position.position6.cupGoals;
						playerInfo.cupAssists = playerInfo.cupAssists - result.position.position6.cupAssists;
						playerInfo.cupYellowCards = playerInfo.cupYellowCards - result.position.position6.cupYellowCards;
						playerInfo.cupRedCards = playerInfo.cupRedCards - result.position.position6.cupRedCards;
						playerInfo.cupMinutes = playerInfo.cupMinutes - result.position.position6.cupMinutes;						
						playersInfo.$save(playerInfo);			        		
		        	}	
		        	if(result.position.position7.id === playerInfo.id){
						playerInfo.cupApps = playerInfo.cupApps - 1;
						playerInfo.cupGoals = playerInfo.cupGoals - result.position.position7.cupGoals;
						playerInfo.cupAssists = playerInfo.cupAssists - result.position.position7.cupAssists;
						playerInfo.cupYellowCards = playerInfo.cupYellowCards - result.position.position7.cupYellowCards;
						playerInfo.cupRedCards = playerInfo.cupRedCards - result.position.position7.cupRedCards;
						playerInfo.cupMinutes = playerInfo.cupMinutes - result.position.position7.cupMinutes;						
						playersInfo.$save(playerInfo);			        		
		        	}
		        	if(result.position.position8.id === playerInfo.id){
						playerInfo.cupApps = playerInfo.cupApps - 1;
						playerInfo.cupGoals = playerInfo.cupGoals - result.position.position8.cupGoals;
						playerInfo.cupAssists = playerInfo.cupAssists - result.position.position8.cupAssists;
						playerInfo.cupYellowCards = playerInfo.cupYellowCards - result.position.position8.cupYellowCards;
						playerInfo.cupRedCards = playerInfo.cupRedCards - result.position.position8.cupRedCards;
						playerInfo.cupMinutes = playerInfo.cupMinutes - result.position.position8.cupMinutes;							
						playersInfo.$save(playerInfo);			        		
		        	}	
		        	if(result.position.position9.id === playerInfo.id){
						playerInfo.cupApps = playerInfo.cupApps - 1;
						playerInfo.cupGoals = playerInfo.cupGoals - result.position.position9.cupGoals;
						playerInfo.cupAssists = playerInfo.cupAssists - result.position.position9.cupAssists;
						playerInfo.cupYellowCards = playerInfo.cupYellowCards - result.position.position9.cupYellowCards;
						playerInfo.cupRedCards = playerInfo.cupRedCards - result.position.position9.cupRedCards;
						playerInfo.cupMinutes = playerInfo.cupMinutes - result.position.position9.cupMinutes;							
						playersInfo.$save(playerInfo);			        		
		        	}
		        	if(result.position.position10.id === playerInfo.id){
						playerInfo.cupApps = playerInfo.cupApps - 1;
						playerInfo.cupGoals = playerInfo.cupGoals - result.position.position10.cupGoals;
						playerInfo.cupAssists = playerInfo.cupAssists - result.position.position10.cupAssists;
						playerInfo.cupYellowCards = playerInfo.cupYellowCards - result.position.position10.cupYellowCards;
						playerInfo.cupRedCards = playerInfo.cupRedCards - result.position.position10.cupRedCards;
						playerInfo.cupMinutes = playerInfo.cupMinutes - result.position.position10.cupMinutes;					
						playersInfo.$save(playerInfo);			        		
		        	}	
		        	if(result.position.position11.id === playerInfo.id){
						playerInfo.cupApps = playerInfo.cupApps - 1;
						playerInfo.cupGoals = playerInfo.cupGoals - result.position.position11.cupGoals;
						playerInfo.cupAssists = playerInfo.cupAssists - result.position.position11.cupAssists;
						playerInfo.cupYellowCards = playerInfo.cupYellowCards - result.position.position11.cupYellowCards;
						playerInfo.cupRedCards = playerInfo.cupRedCards - result.position.position11.cupRedCards;
						playerInfo.cupMinutes = playerInfo.cupMinutes - result.position.position11.cupMinutes;						
						playersInfo.$save(playerInfo);			        		
		        	}	
		        	if(result.position.sub1.id === playerInfo.id) {
		        		if(result.position.sub1.didplayercomeon){
							playerInfo.cupApps = playerInfo.cupApps - 1;
							playerInfo.cupGoals = playerInfo.cupGoals - result.position.sub1.cupGoals;
							playerInfo.cupAssists = playerInfo.cupAssists - result.position.sub1.cupAssists;
							playerInfo.cupYellowCards = playerInfo.cupYellowCards - result.position.sub1.cupYellowCards;
							playerInfo.cupRedCards = playerInfo.cupRedCards - result.position.sub1.cupRedCards;
							playerInfo.cupMinutes = playerInfo.cupMinutes - result.position.sub1.cupMinutes;	
							playersInfo.$save(playerInfo);		        			
		        		}
		        	}
		        	if(result.position.sub2.id === playerInfo.id) {
		        		if(result.position.sub2.didplayercomeon){
							playerInfo.cupApps = playerInfo.cupApps - 1;
							playerInfo.cupGoals = playerInfo.cupGoals - result.position.sub2.cupGoals;
							playerInfo.cupAssists = playerInfo.cupAssists - result.position.sub2.cupAssists;
							playerInfo.cupYellowCards = playerInfo.cupYellowCards - result.position.sub2.cupYellowCards;
							playerInfo.cupRedCards = playerInfo.cupRedCards - result.position.sub2.cupRedCards;
							playerInfo.cupMinutes = playerInfo.cupMinutes - result.position.sub2.cupMinutes;	
							playersInfo.$save(playerInfo);		        			
		        		}
		        	}	
		        	if(result.position.sub3.id === playerInfo.id) {
		        		if(result.position.sub3.didplayercomeon){
							playerInfo.cupApps = playerInfo.cupApps - 1;
							playerInfo.cupGoals = playerInfo.cupGoals - result.position.sub3.cupGoals;
							playerInfo.cupAssists = playerInfo.cupAssists - result.position.sub3.cupAssists;
							playerInfo.cupYellowCards = playerInfo.cupYellowCards - result.position.sub3.cupYellowCards;
							playerInfo.cupRedCards = playerInfo.cupRedCards - result.position.sub3.cupRedCards;
							playerInfo.cupMinutes = playerInfo.cupMinutes - result.position.sub3.cupMinutes;	
							playersInfo.$save(playerInfo);		        			
		        		}
		        	}			        		        	
				})						
				resultsInfo.$remove(result)	
			}
		}
}]);