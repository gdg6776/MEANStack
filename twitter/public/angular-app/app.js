angular.module('Krt', ['ngRoute']).config(config);

function config($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'angular-app/data-list/datas.html',
      controller: TwittersController,
      controllerAs: 'vm'
    })
    .when('/twitter/:twitterId', {
      templateUrl: 'angular-app/data-display/data.html',
      controller: TwitterController,
      controllerAs: 'vm'
    });
}
