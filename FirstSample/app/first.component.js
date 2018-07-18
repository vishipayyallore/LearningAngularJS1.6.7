'use strict';
// Register `phoneList` component, along with its associated controller and template
angular.
    module('firstPage').
    component('firstPage', {
    templateUrl: 'firstPage.template.html',
    controller: ['FirstController',
        function FirstController($scope) {
            this.firstName = 'Shiva';
        }
    ]
});
//# sourceMappingURL=first.component.js.map