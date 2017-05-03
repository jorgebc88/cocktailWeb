app.controller('drinkController', ['cocktailService','drinkService', '$scope', '$http', function(cocktailService, drinkService, $scope, $http) {

	$scope.drink = {};

	drinkService.listDrinks().then(function(response){
		$scope.drinks = response.data;
		
	})

	$scope.saveDrink = function(){
		console.log('Save in progress' + $scope.drink);
		drinkService.saveDrink($scope.drink).then(function(response){
			console.log("Save successful:" );
		})
	}
    
}]);
