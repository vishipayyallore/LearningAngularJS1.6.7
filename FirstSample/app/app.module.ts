
module sampleApp {

  "use strict";

  export class HelloController {

    public static $inject = ["$scope"];

    constructor($scope: ng.IScope) {
    }

    this.$scope.firstName = "Shiva";
    this.$scope.age = 25;

  }

  var mainApp = angular.module("sampleApp", [])
    .controller("HelloController", HelloController);
    
}



