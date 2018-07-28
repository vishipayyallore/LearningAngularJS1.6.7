var app;
(function (app) {
    "use strict";
    var StudentController = /** @class */ (function () {
        function StudentController() {
            this.firstName = "Shiva";
            this.rollNumber = 101;
        }
        StudentController.prototype.displayDetails = function () {
            console.log("Roll Number: " + this.rollNumber);
        };
        return StudentController;
    }());
    app.StudentController = StudentController;
    angular.module("studentModule", [])
        .controller("StudentController", StudentController);
})(app || (app = {}));
//# sourceMappingURL=student.controller.js.map