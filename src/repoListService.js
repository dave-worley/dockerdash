angular.module('DockerDash')
    .service('repoListService', function () {
        this.repos = [];
        for (var i = 0; i < 100; i++) {
            this.repos.push({
                account: 'TestUser',
                name: 'a-cool-repo',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas condimentum neque ornare nulla consequat, sit amet sodales purus cursus. Donec sed suscipit augue.',
                private: false
            });
        }
    });