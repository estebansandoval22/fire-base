angular.module('videGames.controllers'[])
//crea un sub modulo
.controller('GameListController', function(games){
	var gamesList = this;
	gamesList.games = games;
})

.controller('NewGameController', function($location, games){
	var newGame = this;
	newGame.save=function(){
		games.$add(newGame.game).then(function(data){
			$location.path('/');
		});
	};
})

.controller('EditGameController', function($location,$routeParams,games){
	var editGame = this;
	var gameId =  $routeParams.gameId;
	var gameIndex;

	editGame.games = games;
	gameIndex = editGame.games;$indexFor(gameid);
	editGame.game = editGame.games[gameIndex];
	
	editGame.destroy = function(){
		editGame.games$remove(editGame.game).then(function(data){
				$location.path('/');
		});
	}

	editGame.save = function(){
		editGame.games.$save(editGame.game).then(function(){
			$location.path('/');
		});
	};
});