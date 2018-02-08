angular.module('Krt', ['ngRoute']).config(config);

function config($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'angular-app/data-list/datas.html',
      controller: AmazonsController,
      controllerAs: 'vm'
    })
    .when('/amazon/:foodId', {
      templateUrl: 'angular-app/data-display/data.html',
      controller: AmazonController,
      controllerAs: 'vm'
    });
}
