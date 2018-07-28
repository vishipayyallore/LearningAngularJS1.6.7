module app {


    "use strict";

    interface IStudent {
        firstName: string;
        rollNumber: number;

        displayDetails(): void;
    }

    export class StudentController implements IStudent {
        firstName: string;
        rollNumber: number;

        constructor() {
            this.firstName = "Shiva";
            this.rollNumber = 101;
        }

        displayDetails(): void {
            console.log("Roll Number: " + this.rollNumber);
        }
    }


    angular.module("studentModule", [])
        .controller("StudentController", StudentController);


}