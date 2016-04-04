angular.module('cordovaApp', ['ngRoute']).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/photo',
        {
            templateUrl: 'views/photo.html',
            controller: 'photoController'
        }).otherwise(
        {redirectTo: 'index.html'});
}]).controller('toDoListController', ['$scope', function ($scope) {


}]);