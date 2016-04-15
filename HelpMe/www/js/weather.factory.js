(function()
{
    'use strict';

    angular.module('weather.services.forecast',['cordovaApp.factory.geolocation']).factory('forecastFactory',forecastFactory);
    forecastFactory.$inject=['geolocationFactory','$q','$http'];
    function forecastFactory(geolocationFactory,$q,$http)
    {
        var deferred= $q.defer();
        var lat,lng;

        return{
            getInfo: function() {
                geolocationFactory.getGeoLocation().then(function (resp) {
                    if (resp) {
                        lat = resp.coords.latitude;
                        lng = resp.coords.longitude;

                    }
                }, function (err) {
                    console.log(err);
                });
                if (lat && lng) {
                    $http.get('http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lng+'&APPID=727bbe284c6052de7b36551f444cce9d')
                        .success(function (data, status, headers, config) {
                            deferred.resolve(data);
                        }).error(function (data, status, headers) {
                        deferred.reject('error');
                    });
                }
                return deferred.promise;

            }
        };

    }

})();