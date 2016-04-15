(function () {
    'use strict';

    angular.module('cordovaApp.controller.photo', ['cordovaApp.factory.photo']).
    controller('photoController',['$scope', 'photoFactory', function ($scope, photoFactory) {

        photoFactory.getPhoto().then(function(resp)
        {
            if(resp)
            {
                $scope.myImage = resp;
            }

        });

    }]);


})();