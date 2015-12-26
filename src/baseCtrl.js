angular.module('app', [])
    .controller('baseCtrl', BaseCtrl);

function BaseCtrl ($scope) {
    $scope.repos = {};
}