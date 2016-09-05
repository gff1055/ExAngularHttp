/*Criacao de modulo cujo nome é 'app' e uma referencia ao modulo ngRoute que é usado para criar
as rotas*/
var app = angular.module('app',['ngRoute']);

/*configurando o modulo. Nesse caso esta sendo configurada a funcionalidade Router
Router - Carregar templates e controlers de acordo com a URI*/
app.config(['$routeProvider', function($routeProvider){

	$routeProvider.

	/* Ao acessar a URI /house deve ser carregado o houseController e o
	template pageListDjsHouse.html*/
	when('/house', {controller: 'houseController', templateUrl: 'pageListDjsHouse.html'}).

	/* Ao acessar a URI /trance deve ser carregado o tranceController e o
	template pageListDjsTrance.html*/
	when('/trance', {controller: 'tranceController', templateUrl: 'pageListDjsTrance.html'}).

	/* Ao acessar qualquer outra pagina nao configurada, a rota padrão URI é ativada*/
	otherwise({redirectTo: '/'});
}]);

/*Registrando os controllers associados ao modulo app*/
//injetando o servico http na variavel
app.controller('houseController', function($scope, $http){

	$scope.djsHouse = Array();

	//associando a variavel 'listingDjsHouse' a uma funcao
	//Sera executada ao clicar no botao na view
	$scope.listingDjsHouse = function(){

		/*por meio do $http.get realiza-se uma requisicao Ajax acessando o arquivo
		“listDjsHouse.html” que contem a resposta JSON*/
		$http.get("listDjsHouse.html").
		
		//success – Executa se a requisicao GET for realizada com sucesso
		//variavel dado – a resposta do servidor
		success(function(dado){
			$scope.djsHouse = dado.djsHouse;
			console.log($scope.djsHouse);
		}).error(function(dado){
			alert("ERRO...");
			console.log(dado);
		});
			
	}
});

app.controller('tranceController', function($scope, $http){
	

}
)


