app.service('drinkService',['$http', function($http) {

	var listDrinks = function(){
		console.log("List drinks");
//		return $http.get('http://localhost:8080/drinks/');
		return $http.get('https://cocktail-jebc.herokuapp.com/drinks/');
	};

	var saveDrink = function(drink){
		console.log("Save drink: ");
		var expenseJSON = JSON.stringify(drink)
		console.log("Save drink: " + expenseJSON);
//		return $http.post('http://localhost:8080/drinks/', drink);
		return $http.post('https://cocktail-jebc.herokuapp.com/drinks/', drink);
	};

	var getDrinkById = function(drinkId){
		console.log("List drinks");
//		return $http.get('http://localhost:8080/drinks/' + drinkId);
		return $http.get('https://cocktail-jebc.herokuapp.com/drinks/' + drinkId);
	};
	return {
	listDrinks : listDrinks,
	saveDrink : saveDrink,
	getDrinkById : getDrinkById
	}


}]);		
