(function(angular) {
    "use strict";
    angular.module('TestApp').factory('article', ['$http', function($http) {

        var Article = function(model) {
            this.id = null;
            this.title = '';
            this.author = '';
            this.body = '';

            angular.extend(this, model);
        };

        Article.prototype.save = function() {
            
        };

        return Article;
    }]);
})(angular);
