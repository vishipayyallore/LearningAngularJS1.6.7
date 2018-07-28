var app;
(function (app) {
    "use strict";
    var FirstComponent = /** @class */ (function () {
        function FirstComponent() {
            this.firstName = "Shiva";
            this.age = 25;
            this.firstName = "Sai";
        }
        return FirstComponent;
    }());
    app.FirstComponent = FirstComponent;
    FirstComponent.$inject = ["$scope"];
    angular.module("firstModule", [])
        .controller("FirstComponent", FirstComponent);
})(app || (app = {}));
//# sourceMappingURL=first.controller.js.map