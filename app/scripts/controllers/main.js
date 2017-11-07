'use strict';
angular.module('stockApp')

.controller('MainController', function ($scope, StockData) {
  $scope.StockData = StockData;
  $scope.searchInput = '';
});
