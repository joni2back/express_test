(function(angular) {
    "use strict";
    var app = angular.module('TestApp', ['ngRoute', 'LocalStorageModule']);
    
    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.
        when('/login', {
            templateUrl: '/angular/views/login-form.html',
            controller: 'LoginCtrl',
            activeTab: 'login'
        }).
        when('/articles', {
            templateUrl: '/angular/views/articles-list.html',
            controller: 'ArticlesCtrl',
            activeTab: 'articles'
        }).
        when('/photos', {
            templateUrl: '/angular/views/photos-list.html',
            controller: 'PhotosCtrl',
            activeTab: 'photos'
        }).
        otherwise({
            templateUrl: '/angular/views/main.html',
            controller: 'MainCtrl',
            activeTab: 'main'
        });
    }]);

    app.config(['$httpProvider', function($httpProvider) {
        $httpProvider.interceptors.push('authInterceptorService');
    }]);
    app.run(['authService', function (authService) {
        authService.fillAuthData();
    }]);

})(angular);
