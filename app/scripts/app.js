'use strict';

angular
  .module('FtCash', [
    'ngCookies',
    'ngSanitize',
    'ngResource',
    'ui.router',
    'ngStorage',
    'ui.bootstrap',
    'ngWebSocket'
  ])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  // Use $stateProvider to configure your states.
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/main.html',
      controller: 'MainController'
    });
}]);
