var sampleApp;
(function (sampleApp) {
    "use strict";
    var HelloController = /** @class */ (function () {
        function HelloController($scope) {
        }
        HelloController.$inject = ["$scope"];
        return HelloController;
    }());
    sampleApp.HelloController = HelloController;
    this.$scope.firstName = "Shiva";
    this.$scope.age = 25;
})(sampleApp || (sampleApp = {}));
var mainApp = angular.module("sampleApp", [])
    .controller("HelloController", HelloController);
//# sourceMappingURL=app.module.js.map