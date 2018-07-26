"use strict";

interface IHelloComponent {
  firstName: string;
  age: number;
}



class HelloComponent implements IHelloComponent {
  firstName = "Shiva";
  age = 25;
  constructor() {
    this.firstName = "Sai";
  }

}

var app = angular.module("sampleApp", []);

app.controller("HelloComponent", HelloComponent);