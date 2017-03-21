app.service('drinkService',['$http', function($http) {

	var listDrinks = function(){
		console.log("List drinks");
		return $http.get('http://localhost:8080/cocktail-1.0-SNAPSHOT/drinks/');
	};

	var saveDrink = function(drink){
		console.log("Save drink: ");
		var expenseJSON = JSON.stringify(drink)
		console.log("Save drink: " + expenseJSON);
		return $http.post('http://localhost:8080/cocktail-1.0-SNAPSHOT/drinks/', drink);
	};

	return {
	listDrinks : listDrinks,
	saveDrink : saveDrink
	}


}]);		
