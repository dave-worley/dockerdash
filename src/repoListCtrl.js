angular.module('DockerDash')
    .controller('repoListCtrl', function RepoListCtrl($scope, repoListService, $routeParams, $location) {
        var page, account;

        page = 0;
        if (typeof $routeParams.page !== 'undefined') {
            // user facing numbers are not zero indexed so we subtract
            page = parseInt($routeParams.page) - 1;
        }

        account = 'all';
        if (typeof $routeParams.account !== 'undefined') {
            account = $routeParams.account;
        }

        $scope.accountNames = repoListService.getAccountNames();
        $scope.accountNames.push('all');

        $scope.account = account;
        $scope.page = page;

        $scope.repos = repoListService.getPage(page, account);
        $scope.pages = new Array(repoListService.totalPages(account));

        $scope.updateAccount = function (newAccount) {
            $location.url('/list/' + newAccount + '/1');
        };

    });