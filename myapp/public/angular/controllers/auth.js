(function(angular) {
    "use strict";
    angular.module('TestApp').controller('AuthCtrl', ['$scope', '$http', 'article', function($scope, $http) {

        $scope.form = {
            username: '',
            password: ''
        };

        $scope.tryLogin = function(name) {
            return $http.get('/articles.json', $scope.form).success(function(data) {
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