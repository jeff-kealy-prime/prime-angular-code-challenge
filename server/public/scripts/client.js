var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/heroentry', {
      templateUrl: '/views/templates/heroentry.html',
      controller: 'HeroentryController',
      controllerAs: 'hec'
    })
    .when('/herolisting', {
      templateUrl: '/views/templates/herolisting.html',
      controller: 'HerolistingController',
      controllerAs: 'hlc'
    })
    .otherwise({
        redirectTo: 'heroentry'
    });

}]);
