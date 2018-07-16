angular.module('app', [])
    .controller('StudentController', StudentController);
StudentController.$inject = ['$scope'];
function StudentController($scope) {
    $scope.firstName = 'Student Shiva';
    $scope.lastName = 'Shiva';
}
