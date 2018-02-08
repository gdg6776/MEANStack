angular.module('Krt').controller('TwittersController', TwittersController);
function TwittersController($scope,twitterDataFactory){
	var vm = this;
	vm.title = 'Welcome to Tweet Collections';
	twitterDataFactory.tweetList().then(function(response){
		vm.tweet = response.data;
		tweets = response.data;
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