"use strict";

angular.module("sampleApp", []).controller('PersonController', PersonController);

PersonController.$inject = ['$scope'];

function PersonController($scope) {
  $scope.age = '25';

}