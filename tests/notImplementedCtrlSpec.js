describe('notImplementedCtrl', function () {
    beforeEach(module('DockerDash'));

    var $controller;

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    it('should exist', function () {
        var $scope = {};
        var controller = $controller('notImplementedCtrl', { $scope: $scope });
        expect(controller).toBeDefined();
    });

    it('should have a message that says "Not Implemented"', function () {
        var $scope = {};
        var controller = $controller('notImplementedCtrl', { $scope: $scope });
        expect($scope.message).toEqual("Not Implemented");
    });

});