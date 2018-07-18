var app = angular.module("app", []);

app.controller("StudentController", StudentController);

StudentController.$inject = ['$scope'];

function StudentController($scope) {
    $scope.firstName = 'Shiva';


}

