angular.module('Krt').controller('AmazonsController', AmazonsController);

// function AmazonsController(amazonDataFactory){
// 	var vm = this;
// 	vm.title = 'KRT Project';
// 	amazonDataFactory.foodList().then(function(response){
// 		vm.foods = response.data
// 	});
// }
// var foods;
// angular.module('Krt').controller('AmazonsController', AmazonsController, ['$scope', function($scope){
	
// }]);

function AmazonsController($scope,amazonDataFactory){
	var vm = this;
	vm.title = 'Welcome to Amazon Food Reviews';
	amazonDataFactory.foodList().then(function(response){
		vm.foods = response.data;
		foods = response.data;
	});

	$scope.data = false;
	console.log($scope.data);

	$scope.submit = function(){
		console.log("Hererrerer")
		console.log('Click');
		$scope.data = true;
		console.log($scope.data);
	}

}


// function AmazonsController(amazonDataFactory){
// 	var vm = this;
// 	vm.title = 'KRT Project';
// 	amazonDataFactory.foodList().then(function(response){
// 		vm.foods = response.data;
// 		foods = response.data;
// 	});
// }

