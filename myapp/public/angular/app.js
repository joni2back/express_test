(function(angular) {
    "use strict";
    var app = angular.module('TestApp', ['ngRoute']);
    
    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.
        when('/login', {
            templateUrl: '/angular/views/login-form.html',
            controller: 'AuthCtrl'
        }).
        when('/articles', {
            templateUrl: '/angular/views/articles-list.html',
            controller: 'ArticlesCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
    }]);

})(angular);
