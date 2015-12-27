describe('routing', function () {
    beforeEach(module('DockerDash'));

    it('should use the repoListCtrl controller for /list route', function () {
        inject(function ($route) {
            expect($route.routes['/list'].controller).toBe('repoListCtrl');
            expect($route.routes['/list'].templateUrl).toEqual('/views/repo-list.html');
        });
    });

    it('should use the notImplementedCtrl for any other route', function () {
        inject(function ($route) {
            expect($route.routes[null].controller).toBe('notImplementedCtrl');
            expect($route.routes[null].templateUrl).toEqual('/views/not-implemented.html');
        });
    });


});