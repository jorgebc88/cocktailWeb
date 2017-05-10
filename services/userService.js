app.service('userService',['$http', function($http) {

	var listUsers = function(){
		console.log("List Users");
		return $http.get('http://35.188.104.70:8080/cocktail-1.0-SNAPSHOT/users/');
		// return $http.get('https://cocktail-jebc.herokuapp.com/users/');
	};

	var saveUser = function(user){
		console.log("Save user: ");
		var expenseJSON = JSON.stringify(user)
		console.log("Save user: " + expenseJSON);
		var auth = window.btoa("Jorge:123");		
	    var headers = {"Authorization": "Basic " + auth};

		return $http.post('http://35.188.104.70:8080/cocktail-1.0-SNAPSHOT/users/', user, {headers: headers});
		// return $http.post('https://cocktail-jebc.herokuapp.com/users/', user);
	};

	var getUserByUserName = function(userName){
		console.log("List users");
		return $http.get('http://35.188.104.70:8080/cocktail-1.0-SNAPSHOT/users/' + userName);
		// return $http.get('https://cocktail-jebc.herokuapp.com/users/' + userName);
	};
	return {
		listUsers : listUsers,
		saveUser : saveUser,
		getUserByUserName : getUserByUserName
	}

}]);		
