module application.ProductsComponent {
    "use strict";
  
    interface IProductsComponent {
      name: string;
      price: number;
    }
  
    class ProductsComponent implements IProductsComponent {
      name = "Shiva";
      price = 25.98;
      date = "01-Aug-2018";

      constructor() {
        this.name = "New TV";
      }
  
    }
  
    var app = angular.module("sampleApp", []);
  
    app.controller("ProductsComponent", ProductsComponent);
  }
