app.service('cocktailService',['$http', function($http) {

	var listCocktails = function(){
		console.log("List cocktails");
		var auth = window.btoa("Jorge:123");
	    var headers = {"Authorization": "Basic " + auth};
	    console.log("-------------- JSON: " + auth)

		// return $http.get('https://cocktail-jebc.herokuapp.com/cocktails/', {headers: headers});
		return $http.get('http://localhost:8080/cocktails/', {headers: headers});
	};

	var saveCocktail = function(cocktail){
		console.log("Save cocktail");
		var cocktailJSON = JSON.stringify(cocktail)
		console.log("Cocktail: " + cocktail);
		console.log("CocktailJSON: " + cocktailJSON);
		var auth = window.btoa("Jorge:123");
	    var headers = {"Authorization": "Basic " + auth};
	    console.log("-------------- JSON: " + auth)
		// return $http.post('https://cocktail-jebc.herokuapp.com/cocktails/', cocktailJSON, {headers: headers});
		return $http.post('http://localhost:8080/cocktails/', cocktailJSON, {headers: headers});
	};

	return {
		listCocktails : listCocktails,
		saveCocktail : saveCocktail
	}

}]);		
