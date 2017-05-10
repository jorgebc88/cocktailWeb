app.service('drinkService',['$http', function($http) {

	var listDrinks = function(){
		console.log("List drinks");
		return $http.get('http://localhost:8080/drinks/');
		// return $http.get('https://cocktail-jebc.herokuapp.com/drinks/');
	};

	var saveDrink = function(drink){
		console.log("Save drink: ");
		var expenseJSON = JSON.stringify(drink)
		console.log("Save drink: " + expenseJSON);
				var auth = window.btoa("Jorge:123");		
	    var headers = {"Authorization": "Basic " + auth};

		return $http.post('http://localhost:8080/drinks/', drink, {headers: headers});
		// return $http.post('https://cocktail-jebc.herokuapp.com/drinks/', drink, {headers: headers});
	};

	var getDrinkById = function(drinkId){
		console.log("List drinks");
		return $http.get('http://localhost:8080/drinks/' + drinkId);
		// return $http.get('https://cocktail-jebc.herokuapp.com/drinks/' + drinkId);
	};
	return {
		listDrinks : listDrinks,
		saveDrink : saveDrink,
		getDrinkById : getDrinkById
	}


}]);		
