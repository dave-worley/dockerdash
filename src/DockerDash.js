angular.module('DockerDash', ['ngRoute'])
    .run(function ($rootScope, $location) {
        $rootScope.isActive = function (loc) {
            return loc == $location.path();
        };
    })
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/list', {
                templateUrl: '/views/repo-list.html',
                controller: 'repoListCtrl'
            })
            .otherwise({
                templateUrl: '/views/not-implemented.html',
                controller: 'notImplementedCtrl'
            })
    }])