"use strict";
var HelloComponent = /** @class */ (function () {
    function HelloComponent() {
        this.firstName = "Shiva";
        this.age = 25;
        this.firstName = "Sai";
    }
    return HelloComponent;
}());
var app = angular.module("sampleApp", []);
app.controller("HelloComponent", HelloComponent);
//# sourceMappingURL=hello.controller.js.map