"use strict";

interface IFirstComponent {
  firstName: string;
  age: number;
}



class FirstComponent implements IFirstComponent {
  firstName = "Shiva";
  age = 25;
  constructor() {
    this.firstName = "Sai";
  }

}

FirstComponent.$inject = ["$scope"];

var app = angular.module("sampleApp", []);

app.controller("FirstComponent", FirstComponent);