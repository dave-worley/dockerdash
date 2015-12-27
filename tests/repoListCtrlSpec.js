describe('repoListCtrl', function () {
    beforeEach(module('DockerDash'));

    var $controller;

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    it('should have a list of repositories', function () {
        var $scope = {};
        var controller = $controller('repoListCtrl', { $scope: $scope });
        expect($scope.repos.length).toBeGreaterThan(0);
    });

});