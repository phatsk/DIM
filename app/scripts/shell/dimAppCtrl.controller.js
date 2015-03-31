(function() {
  'use strict';

  angular.module('dimApp').controller('dimAppCtrl', DimApp);

  DimApp.$inject = ['$scope'];

  function DimApp($scope) {
    $scope.apple = null;
  }
})();
