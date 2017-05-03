app.controller('cocktailController', ['cocktailService','drinkService', '$scope', '$http', function(cocktailService, drinkService, $scope, $http) {

	$scope.cocktail = {};
	$scope.cocktail.ingredients = [];
	$scope.ingredientsQuantity = 0;
	$scope.quantity = [];
	$scope.beverage = [];
	$scope.cocktailTypes = {
		model: null,
		availableOptions: [
			{id: 'DIRECT', name: 'Direct'},
			{id: 'SHAKE', name: 'Shake'}
		]
	};
	$scope.glassTypes = {
		model: null,
		availableOptions: [
			{id: 'LONG', name: 'Long'},
			{id: 'COCKTAIL', name: 'Cocktail'}
		]
	};

	drinkService.listDrinks().then(function(response){
		$scope.drinks = response.data;
		$scope.Questions = [
	    {
	        "Id": $scope.ingredientsQuantity,
	        "Options": $scope.drinks}
	    ];
	})

	cocktailService.listCocktails().then(function(response){
		$scope.cocktails = response.data;
	})

	$scope.clicked = function(cocktail){
		console.log(cocktail);
	}

	$scope.saveCocktail = function(){
		console.log('Save in progress' + $scope.beverage);
		for (var i = $scope.beverage.length - 1; i >= 0; i--) {
			var ingredient = {quantity:  $scope.quantity[i],
								drinkId: $scope.beverage[i].drinkId};
			console.log(ingredient);
			$scope.cocktail.ingredients[i] = ingredient;
		}
		cocktailService.saveCocktail($scope.cocktail).then(function(response){
			console.log("Save successful:" );
		})
	}

	$scope.refreshCocktails = function(){
		cocktailService.listCocktails().then(function(response){
			$scope.cocktails = response.data;
		})
	}

	$scope.addAnotherIngredient = function(){
		$scope.ingredientsQuantity++;	
		$scope.AddSelect();
	}
    
    $scope.AddSelect = function() {
    	console.log($scope.quantity);
        $scope.Questions.push({
        	"Id" : $scope.ingredientsQuantity,
          	"Options": $scope.drinks
        });
    };
}]);
