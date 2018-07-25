"use strict";

angular.module("sampleApp", []);
  
module sampleApp {

  
  export class HelloController {

    public static $inject = ["$scope"];

    constructor($scope: ng.IScope) {
    }

    this.$scope.firstName = "Shiva";
    this.$scope.age = 25;

  }

  var mainApp = 
    .controller("HelloController", HelloController);
    
}



