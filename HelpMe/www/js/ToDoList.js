(function () {

    'use strict';

    angular.module('cordovaApp', ['ngRoute', 'cordovaApp.controller.photo', 'cordovaApp.controller.geolocation','cordovaApp.controller.weather']).config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/photo',
            {
                templateUrl: 'photo.html',
                controller: 'photoController'
            }).when('/geolocation',
            {
                templateUrl: 'geoLocation.html',
                controller: 'geolocationController'
            }).when('/weather',
            {
                templateUrl: 'weather.html',
                controller: 'weatherController'
            }).otherwise(
            {
                redirectTo: '/index.html'
            });
    }]).controller('toDoListController', ['$scope', function ($scope) {

    }]);

})();
