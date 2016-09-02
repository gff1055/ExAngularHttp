var app = angular.module('app',['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider.
	when('/house', {controller: 'houseController', templateUrl: 'pageListDjsHouse.html'}).
	otherwise({redirectTo: '/'});
}]);

app.controller('houseController', function($scope, $http){
	$scope.djsHouse = Array();
	$scope.listingDjsHouse = function(){
		$http.get("listDjsHouse.html").success(function($data){
			$scope.djsHouse = data.djsHouse;
			console.log($scope.djsHouse);
		}).error(function($data){
			alert("ERRO...");
			console.log($data);
		});
			
	}
});


