angular.module('videGames.services'[])

.service('fbRef', function(fbURL){
	return new Firebase(fbURL);
})

.service('Games', function($Firebase, fbRef, gameListValue){
	 var games = this;
	 this.fetch = function(){
	 	//fetch me va traer siempre la lsita actualizada
	 	
	 };
});