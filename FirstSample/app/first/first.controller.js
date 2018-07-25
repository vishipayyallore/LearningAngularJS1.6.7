"use strict";
var FirstComponent = /** @class */ (function () {
    function FirstComponent() {
        this.firstName = "Shiva";
        this.age = 25;
        this.firstName = "Sai";
    }
    return FirstComponent;
}());
FirstComponent.$inject = ["$scope"];
var app = angular.module("sampleApp", []);
app.controller("FirstComponent", FirstComponent);
//# sourceMappingURL=first.controller.js.map