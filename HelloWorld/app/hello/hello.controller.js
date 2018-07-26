var application;
(function (application) {
    var HelloComponent;
    (function (HelloComponent_1) {
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
    })(HelloComponent = application.HelloComponent || (application.HelloComponent = {}));
})(application || (application = {}));
//# sourceMappingURL=hello.controller.js.map