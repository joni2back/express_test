(function(angular) {
    "use strict";
    angular.module('TestApp').factory('photo', function() {

        var Photo = function(model) {
            this.id = null;
            this.alt = '';
            this.src = '';

            angular.extend(this, model);
        };

        return Photo;
    });
})(angular);
