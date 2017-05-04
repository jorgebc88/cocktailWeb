app.controller('userController', ['userService', '$scope', '$http', function(userService, $scope, $http) {

	$scope.user = {};

	userService.listUsers().then(function(response){
		$scope.users = response.data;
		
	})

	$scope.saveUser = function(){
		console.log('Save in progress' + $scope.user);
		userService.saveUser($scope.user).then(function(response){
			console.log("Save successful:" );
		})
	}
    
}]);
