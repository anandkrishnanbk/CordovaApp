(function () {
    'use strict';

    angular.module('cordovaApp.controller.geolocation', ['cordovaApp.factory.geolocation']).
    controller('geolocationController',['$scope', 'geolocationFactory', function ($scope, geolocationFactory) {

        geolocationFactory.getGeoLocation().then(function(resp)
        {
            if(resp)
            {
                $scope.latitude = resp.coords.latitude;
                $scope.longitude=resp.coords.longitude;
            }

        });

    }]);


})();