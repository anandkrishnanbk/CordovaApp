(function() {

    'use strict';

    angular.module('cordovaApp', ['ngRoute','cordovaApp.controller.photo']).config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/photo',
            {
                templateUrl: 'photo.html',
                controller: 'photoController'
            }).otherwise(
            {
                redirectTo: '/index.html'
            });
    }]).controller('toDoListController', ['$scope', function ($scope) {

    }]);

})();
