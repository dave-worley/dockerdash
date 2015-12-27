angular.module('DockerDash')
    .service('repoListService', function () {
        var random = function(min, max) {
            if (max == null) {
                max = min;
                min = 0;
            }
            return min + Math.floor(Math.random() * (max - min + 1));
        };
        var repos = [];
        var description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas condimentum neque ornare nulla consequat, sit amet sodales purus cursus. Donec sed suscipit augue.';
        for (var i = 0; i < 100; i++) {
            repos.push({
                account: random(0,1) === 0 ? 'TestUser' : 'OtherUser',
                name: random(0,1) === 0 ? 'a-cool-repo' : 'another-cool-repo',
                description: random(0,1) === 0 ? description : '',
                private: random(0,1) === 0 ? false : true
            });
        }
        this.getPage = function (page) {
            return repos.slice(page * 10, (page + 1) * 10);
        };
        this.totalPages = Math.ceil(repos.length / 10);
    });