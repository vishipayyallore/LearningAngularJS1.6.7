var mainApp = angular.module("sampleApp", []);

mainApp.controller('studentController', function($scope) {
  $scope.student = {
     firstName: "Mahesh",
     lastName: "Parashar",
     
     fullName: function() {
        var studentObject;
        studentObject = $scope.student;
        return studentObject.firstName + " " + studentObject.lastName;
     }
  };
});