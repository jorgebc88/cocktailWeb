app.service('drinkService',['$http', function($http) {

	var listDrinks = function(){
		console.log("List drinks");
		return $http.get('http://35.188.104.70:8080/cocktail-1.0-SNAPSHOT/drinks/');
		// return $http.get('https://cocktail-jebc.herokuapp.com/drinks/');
	};

	var saveDrink = function(drink){
		console.log("Save drink: ");
		var expenseJSON = JSON.stringify(drink)
		var auth = window.btoa("Jorge:123");		
	    var headers = {"Authorization": "Basic " + auth};

		return $http.post('http://35.188.104.70:8080/cocktail-1.0-SNAPSHOT/drinks/', drink, {headers: headers});
		// return $http.post('https://cocktail-jebc.herokuapp.com/drinks/', drink, {headers: headers});
	};

	var getDrinkById = function(drinkId){
		console.log("List drinks");
		return $http.get('http://35.188.104.70:8080/cocktail-1.0-SNAPSHOT/drinks/' + drinkId);
		// return $http.get('https://cocktail-jebc.herokuapp.com/drinks/' + drinkId);
	};
	return {
		listDrinks : listDrinks,
		saveDrink : saveDrink,
		getDrinkById : getDrinkById
	}


}]);		
