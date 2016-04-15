(function()
{
    'use strict';
    angular.module('cordovaApp.factory.geolocation',[]).factory('geolocationFactory',['$q',function geolocationFactory($q)
    {
        var geolocationfactory={};
        var deferred=$q.defer();
        geolocationfactory.getGeoLocation= function() {
            navigator.geolocation.watchPosition(onSucess, onError, {timeout:30000
            });

            function onSucess(position) {

                deferred.resolve(position);
            }

            function onError(message)
            {
                deferred.reject('error-'+message);

            }
            return deferred.promise;
        }

        return geolocationfactory;

    }]);

})();
