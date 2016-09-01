var app = angular.module('app',[ngRoute]);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider.
	when('/house', {controller: 'houseController', templateUrl: 'pageListDjsHouse.html'}).
	otherwise({redirectTo: '/house'});
}]);


