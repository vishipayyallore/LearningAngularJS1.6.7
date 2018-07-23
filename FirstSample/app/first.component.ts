import * as angular from "../node_modules/angular/angular";


export class StudentController {
  public studentName : string = "Ash";
}

angular.module("sampleApp", []).controller('StudentController', StudentController);
