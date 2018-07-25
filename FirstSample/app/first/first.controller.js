"use strict";
var FirstComponent = /** @class */ (function () {
    function FirstComponent($scope) {
        this.firstName = "Shiva";
        this.age = 25;
    }
    return FirstComponent;
}());
FirstComponent.$inject = ["$scope"];
var app = angular.module("sampleApp", []);
app.controller("FirstComponent", FirstComponent);
//# sourceMappingURL=first.controller.js.map