var application;
(function (application) {
    var ProductsComponent;
    (function (ProductsComponent_1) {
        "use strict";
        var ProductsComponent = /** @class */ (function () {
            function ProductsComponent() {
                this.name = "Shiva";
                this.price = 25.98;
                this.date = "01-Aug-2018";
                this.name = "New TV";
            }
            return ProductsComponent;
        }());
        var app = angular.module("sampleApp", []);
        app.controller("ProductsComponent", ProductsComponent);
    })(ProductsComponent = application.ProductsComponent || (application.ProductsComponent = {}));
})(application || (application = {}));
