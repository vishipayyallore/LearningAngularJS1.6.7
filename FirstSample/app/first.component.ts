"use strict";

// import * as angular from "angular";

// register `phoneList` component, along with its associated controller and template
angular.
  module("sampleApp").
  component("firstPage", {
    templateUrl: "firstPage.template.html",
    controller: ["FirstController",
      function FirstController() {
        this.firstName = "Shiva";
      }
    ]
  });