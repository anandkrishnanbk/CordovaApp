(function()
{
    angular.module('cordovaApp.controller.weather',['weather.services.forecast']).controller('weatherController',weatherController);
    weatherController.$inject=['$scope','forecastFactory'];

    function weatherController($scope,forecastFactory)
    {
        forecastFactory.getInfo().then(function(resp)
        {
            $scope.title=resp.name;
            $scope.description=resp.weather[0].description;

        });
    }

})();