describe('repository list service', function () {
    var repoListService;
    beforeEach(module('DockerDash'));
    beforeEach(inject(function (_repoListService_) {
        repoListService = _repoListService_;
    }));
    it('should exist', function () {
        expect(repoListService).toBeDefined();
    });
    it('should return a list of repositories from the getPage function', function () {
        var repos = repoListService.getPage(0, 'all');
        expect(repos.length).toBeGreaterThan(0);
    });
});