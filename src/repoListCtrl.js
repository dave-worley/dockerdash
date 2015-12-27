angular.module('DockerDash')
    .controller('repoListCtrl', function RepoListCtrl($scope, repoListService) {
        $scope.repos = repoListService.repos;
    });