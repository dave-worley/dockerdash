angular.module('DockerDash', ['ngRoute'])
    .run(function ($rootScope, $location) {
        $rootScope.isActive = function (loc) {
            var current = $location.path().split('/')[1];
            return loc == current;
        };
    })
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/list', {
                templateUrl: '/views/repo-list.html',
                controller: 'repoListCtrl'
            })
            .when('/list/:account/:page', {
                templateUrl: '/views/repo-list.html',
                controller: 'repoListCtrl'
            })
            .otherwise({
                templateUrl: '/views/not-implemented.html',
                controller: 'notImplementedCtrl'
            })
    }])