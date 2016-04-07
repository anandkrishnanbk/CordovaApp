(function()
{
    'use strict';
    angular.module('cordovaApp.factory.photo',[]).factory('photoFactory',['$q',function photoFactory($q)
    {
        var photofactory={};
        var deferred=$q.defer();
        photofactory.getPhoto= function() {
            navigator.camera.getPicture(onSucess, onError, {
                quality: 50,
                saveToPhotoAlbum: true,
                destinationType: Camera.DestinationType.FILE_URI
            });

            function onSucess(imageURI) {

                deferred.resolve(imageURI);
            }

            function onError(message)
            {
                deferred.reject('error');

            }
            return deferred.promise;
        }

        return photofactory;

    }]);

})();
