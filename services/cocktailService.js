app.service('cocktailService',['$http', function($http) {

	var listCocktails = function(){
		console.log("List cocktails");
		var auth = window.btoa("Jorge:123");
	    var headers = {"Authorization": "Basic " + auth};
	    console.log("-------------- JSON: " + auth)

		// return $http.get('https://cocktail-jebc.herokuapp.com/cocktails/', {headers: headers});
		return $http.get('http://35.188.104.70:8080/cocktail-1.0-SNAPSHOT/cocktails/', {headers: headers});
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
		return $http.post('http://35.188.104.70:8080/cocktail-1.0-SNAPSHOT/cocktails/', cocktailJSON, {headers: headers});
	};

	return {
		listCocktails : listCocktails,
		saveCocktail : saveCocktail
	}

}]);		
