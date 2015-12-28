angular.module('DockerDash')
    .service('repoListService', function () {

        /*

        This service would be replaced by actual API calls in production.

        */

        var makeRandomRepos, repos;

        makeRandomRepos = function () {
            var repoList = [];
            var random = function(min, max) { // borrowed from underscore
                if (max == null) {
                    max = min;
                    min = 0;
                }
                return min + Math.floor(Math.random() * (max - min + 1));
            };

            var description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas condimentum neque ornare nulla consequat, sit amet sodales purus cursus. Donec sed suscipit augue.';
            var accountNames = ['test-user', 'other-user', 'best-user', 'dave'];
            var repoNames = ['a-cool-repo', 'another-cool-repo', 'best-repo-evar', 'look-ma-more-code', 'never-updated-repo'];

            for (var i = 0; i < 100; i++) { // 100 total repositories
                repoList.push({
                    account: accountNames[random(0, accountNames.length - 1)],
                    name: repoNames[random(0, repoNames.length - 1)],
                    description: random(0,1) === 0 ? description : '', // 50% chance to have a description
                    private: random(1,10) <= 3 ? true : false // 30% chance to be private
                });
            }

            return repoList;
        };

        repos = makeRandomRepos();

        this.filterRepos = function (account) {
            if (account === 'all') {
                return repos;
            }
            return repos.filter(function (repo) {
                return repo.account === account;
            });
        };

        this.getPage = function (page, account) {
            return this.filterRepos(account).slice(page * 10, (page + 1) * 10);
        };

        this.getAccountNames = function () {
            var accountNames = {};
            repos.map(function (repo) {
                accountNames[repo.account] = true;
            });
            return Object.keys(accountNames);
        };

        this.totalPages = function (account) {
            return Math.ceil(this.filterRepos(account).length / 10);
        };

    });