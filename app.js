//Criacao de modulo cujo nome é 'app'
//Criacao de uma referencia ao modulo ngRoute que é usado para criar as rotas
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
			
			//Aqui dado recebe a "massa" de dados, sem qualquer tratamento.
			//Esse tratamento será feito na view
			$scope.djsHouse = dado.djsHouse;
			
			console.log($scope.djsHouse);
		})
		
		//executa no caso de erro
		.error(function(dado){
			alert("ERRO...");
			console.log(dado);
		});
			
	}
});

app.controller('tranceController', function($scope, $http){
	$scope.djsTrance = Array();
	
	//associando variavel a uma funcao
	$scope.listingDjsTrance = function(){
		
		//por meio do $http.get realiza-se uma requisicao Ajax acessando o arquivo que contem os
		//os dados necessarios para a resposta JSON*/
		$http.get("listDjsTrance.html").
		
		//Executa se a requisicao get for realizada com sucesso.
		//Dado se refere a resposta do servidor
		success(function(dado){
			
			//Aqui dado recebe a "massa" de dados, sem qualquer tratamento.
			//Esse tratamento será feito na view
			$scope.djsTrance = dado.djsTrance;
			
			console.log($scope.djsTrance);
		}).
		
		//Executa se a requisicao nao for realizada com sucesso
		error(function(dado){
			alert("ERRO...");
			console.log(dado);
		});
	}
});


