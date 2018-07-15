(function () {
    angular.module('app', [])
        .controller('HelloController', HelloController);
    HelloController.$inject = ['$scope'];
    function HelloController($scope) {
        $scope.name = 'World';
        $scope.student = {
            firstName: 'Shiva',
            lastName: 'Sai',
            getFullName: function () {
                return $scope.student.firstName + $scope.student.lastName;
            }
        };
    }
})();
