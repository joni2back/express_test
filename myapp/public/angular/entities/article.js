(function(angular) {
    "use strict";
    angular.module('TestApp').factory('article', function() {

        var Article = function(model) {
            this.id = null;
            this.title = '';
            this.author = '';
            this.body = '';

            angular.extend(this, model);
        };

        return Article;
    });
})(angular);
