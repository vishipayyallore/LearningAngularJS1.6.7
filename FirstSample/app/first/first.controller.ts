"use strict";

interface IFirstComponent {
  firstName: string;
  age: number;
}



class FirstComponent implements IFirstComponent {

  constructor($scope) {
  }

  $scope.firstName = "Shiva";
  $scope.age = 25;

}

FirstComponent.$inject = ["$scope"];

var app = angular.module("sampleApp", []);

app.controller("FirstComponent", FirstComponent);