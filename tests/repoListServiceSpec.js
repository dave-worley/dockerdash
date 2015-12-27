describe('repository list service', function () {
    var repoListService;
    beforeEach(module('DockerDash'));
    beforeEach(inject(function (_repoListService_) {
        repoListService = _repoListService_;
    }));
    it('should exist', function () {
        expect(repoListService).toBeDefined();
    });
    it('should have a list of repositories longer than 0', function () {
        expect(repoListService.repos.length).toBeGreaterThan(0);
    });
});