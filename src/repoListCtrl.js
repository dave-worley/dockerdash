angular.module('DockerDash')
    .controller('repoListCtrl', function RepoListCtrl($scope, repoListService, $routeParams) {
        var page = 0;
        if (typeof $routeParams.page !== 'undefined') {
            // user facing numbers are not zero indexed so we subtract
            page = parseInt($routeParams.page) - 1;
        }
        $scope.repos = repoListService.getPage(page);
        $scope.pages = new Array(repoListService.totalPages);
        $scope.page = page;
    });