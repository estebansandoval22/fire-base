angular.module("videGames",['videGames.controllers','videGames.services',"ngRoute","firebase"])

.value('fbRef','https://project-5463139098941169575.firebaseio.com/
');
.config(function($routeProvider){
	var resolveGames={
		games: function(Games){
			return Games.fetch();
		}
	};

	$routeProvider
		.when("/",{
			controller:'GameListController as gameList',
			templateUrl: "views/list.html",
			resolve: resolveGames
		})//esto es un objeto

		.when("/games",{
			controller:'EditGameController as editGame',
			templateUrl: "views/details.html",
			resolve: resolveGames
		})

		.when("/details",{
			controller:'NewGameController as editGame',
			templateUrl: "views/details.html",
			resolve: resolveGames
		})

		.otherwise({ 
			redirectTo: "/"
		});
});