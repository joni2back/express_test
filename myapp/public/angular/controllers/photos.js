(function(angular) {
    "use strict";
    angular.module('TestApp').controller('PhotosCtrl', ['$scope', '$http', 'photo', function($scope, $http, Photo) {

        $scope.orderProp = ['id'];
        $scope.temp = new Photo();
        $scope.photos = [];
        $scope.requesting = false;

        $scope.listPhotos = function() {
            var data = {};
            $scope.photos = [];
            $scope.requesting = true;
            return $http.get('/api/photos.json', data).success(function(data) {
                angular.forEach(data, function(value, key) {
                    $scope.photos.push(new Photo(value));
                });
            }).error(function(data) {
            })['finally'](function() {
                $scope.requesting = false;
            });
        };

        $scope.$on('$routeChangeSuccess', function(next, current) {
            $scope.listPhotos();
        });
        
    }]);
})(angular);