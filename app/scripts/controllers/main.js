'use strict';
angular.module('stockApp')
.factory('MyData', function($websocket) {
  // Open a WebSocket connection
  var dataStream = $websocket('ws://stocks.mnet.website');

  var collection = [];
  var requiredObj = {};
  dataStream.onMessage(function(message) {
    collection.push(JSON.parse(message.data));
    angular.forEach(collection, function(valueArray, key) {
      angular.forEach(valueArray, function(value, key) {
        if(!requiredObj[value[0]]) {
          requiredObj[value[0]] = {};
          requiredObj[value[0]].oldValue = value[1];
          requiredObj[value[0]].newValue = value[1];
          requiredObj[value[0]].newTime = Date.now();
        } else {
          requiredObj[value[0]].oldValue = angular.copy(requiredObj[value[0]].newValue);
          requiredObj[value[0]].newValue = value[1];
          if(requiredObj[value[0]].oldValue !== requiredObj[value[0]].newValue) {
            requiredObj[value[0]].newTime = Date.now();
          }
        }
      });
    });
  });

  var methods = {
    requiredObj: requiredObj,
    get: function() {
      dataStream.send(JSON.stringify({ action: 'get' }));
    }
  };
  return methods;
})
.controller('MainController', function ($scope, MyData) {
  $scope.MyData = MyData;
  console.log($scope.MyData);
});
