(function () {

  angular.module('app', [])
    .controller('HelloController', HelloController)
    .controller('StudentController', StudentController);

  HelloController.$inject = ['$scope'];

  function HelloController($scope) {
    $scope.name = 'Shiva';

    $scope.student = {
      firstName: 'Shiva',
      lastName: 'Sai',

      getFullName: function () {
        return this.firstName + " " + this.lastName;
      }
    };

    $scope.getName = function () {
      return this.name;
    };

  }


    StudentController.$inject = ['$scope'];

    function StudentController($scope) {
        $scope.firstName = 'New Shiva';
        $scope.lastName = 'Shiva';

    }

})();