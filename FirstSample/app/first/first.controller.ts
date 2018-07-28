module app {

  "use strict";

  interface IFirstComponent {
    firstName: string;
    age: number;
  }

  export class FirstComponent implements IFirstComponent {
    firstName = "Shiva";
    age = 25;
    constructor() {
      this.firstName = "Sai";
    }

  }

  FirstComponent.$inject = ["$scope"];


  angular.module("firstModule", [])
    .controller("FirstComponent", FirstComponent);


}
