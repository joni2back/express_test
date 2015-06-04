(function(angular) {
    "use strict";
    angular.module('TestApp').controller('AuthCtrl', ['$scope', '$http', 'article', function($scope, $http) {

        $scope.form = {
            username: '',
            password: ''
        };

        $scope.submitLoginForm = function(name) {
            return $http.post('/auth.json', $scope.form).success(function(data) {
                console.info(data);
            }).error(function(data) {
            })['finally'](function() {
            });
        };

        $scope.init = function() {
        };

        $scope.init();

    }]);
})(angular);