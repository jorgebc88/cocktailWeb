app.service('cocktailService',['$http', function($http) {

	var listCocktails = function(){
		console.log("List cocktails");
		return $http.get('http://localhost:8080/cocktail-1.0-SNAPSHOT/cocktail/cocktails/');
	};

	var saveCocktail = function(cocktail){
		console.log("Save cocktail");
		var cocktailJSON = JSON.stringify(cocktail)
		console.log("Cocktail: " + cocktail);
		console.log("CocktailJSON: " + cocktailJSON);
		return $http.post('http://localhost:8080/cocktail-1.0-SNAPSHOT/cocktail/', cocktailJSON);
	};

	return {
	listCocktails : listCocktails,
	saveCocktail : saveCocktail
	}

}]);		
