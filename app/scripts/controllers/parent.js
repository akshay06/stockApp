'use strict';
angular.module('stockApp').controller('ParentController', [
  '$scope',
  '$rootScope',
  '$state',
  function($scope, $rootScope, $state) {
    console.log('called parent', $state);
  }
]);
