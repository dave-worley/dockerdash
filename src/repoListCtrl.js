angular.module('DockerDash')
    .controller('repoListCtrl', function RepoListCtrl($scope) {
        $scope.repos = [];
        for (var i = 0; i < 100; i++) {
            $scope.repos.push({
                account: 'TestUser',
                name: 'a-cool-repo',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas condimentum neque ornare nulla consequat, sit amet sodales purus cursus. Donec sed suscipit augue.',
                private: false
            });
        }
    });