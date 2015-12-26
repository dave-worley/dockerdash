describe('baseCtrl', function () {
    beforeEach(module('app'));

    var $controller;

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    it('should have a list of repositories', function () {
        var $scope = {};
        var controller = $controller('baseCtrl', { $scope: $scope });
        expect($scope.repos).toBeDefined();
    });

});