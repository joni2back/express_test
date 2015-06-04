(function(angular) {
    "use strict";
    angular.module('TestApp').controller('LoginCtrl', ['$scope', '$location', 'authService', function($scope, $location, authService) {

        $scope.messages = '';
        $scope.form = {
            username: '',
            password: ''
        };
        
        $scope.submitLoginForm = function() {
            authService.login($scope.form).then(function (response) {
                $location.path('/orders');
            }, function (response) {
                $scope.message = response.message;
            });
        };

    }]);
})(angular);