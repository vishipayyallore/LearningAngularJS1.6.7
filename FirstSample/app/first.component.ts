"use strict";

// register `phoneList` component, along with its associated controller and template
angular.
  module("firstPage").
  component("firstPage", {
    templateUrl: "firstPage.template.html",
    controller: ["FirstController",
      function FirstController() {
        this.firstName = "Shiva";
      }
    ]
  });