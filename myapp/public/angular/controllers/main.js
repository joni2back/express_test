(function(angular) {
    "use strict";
    angular.module('TestApp').controller('MainCtrl', ['$scope', '$http', function($scope, $http) {

        $scope.init = function() {
        };

        $scope.$on('$routeChangeStart', function(next, current) {
           console.info(next);
         });
         
        $scope.init();

    }]);
})(angular);