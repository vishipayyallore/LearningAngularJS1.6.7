"use strict";
var mainApp = angular.module("sampleApp", []);
// define the `phonecatApp` module
mainApp.controller('HelloController', HelloController);
HelloController.$inject = ['$scope'];
function HelloController($scope) {
    $scope.name = 'Shiva';
    $scope.student = {
        firstName: 'Shiva',
        lastName: 'Sai',
        getFullName: function () {
            return this.firstName + " " + this.lastName;
        }
    };
    $scope.getName = function () {
        return this.name;
    };
}
//# sourceMappingURL=app.module.js.map