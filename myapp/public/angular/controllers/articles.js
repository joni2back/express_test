(function(angular) {
    "use strict";
    angular.module('TestApp').controller('ArticlesCtrl', ['$scope', '$http', 'article', function($scope, $http, Article) {

        $scope.orderProp = ['id', 'title'];
        $scope.temp = new Article();
        $scope.articles = [];
        $scope.requesting = false;

        $scope.listArticles = function(name) {
            var data = {};
            $scope.articles = [];
            return $http.get('/articles.json', data).success(function(data) {
                angular.forEach(data, function(value, key) {
                    $scope.articles.push(new Article(value));
                });
            }).error(function(data) {
            })['finally'](function() {
            });
        };

        $scope.init = function() {
            $scope.listArticles();
        };

        $scope.init();
        
    }]);
})(angular);