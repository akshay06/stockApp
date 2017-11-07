'use strict';
angular.module('stockApp')

.controller('MainController', function ($scope, StockData, $timeout) {
  $scope.StockData = StockData;
  $scope.searchInput = '';
  $scope.searchStock = function() {
    $timeout(function () {
      $scope.showNoResult = angular.element('.keyItem').length === 0;
    }, 0);
  };
});
