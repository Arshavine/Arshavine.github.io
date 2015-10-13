/**
 * Created by ls on 2015/10/13.
 */
var ablogControllers = angular.module('ablogControllers', []);

function navController($scope) {
    $scope.menuItems = [
        {
            'name': 'Home',
            'path': 'index.html#/home'
        },
        {
            'name': 'Life',
            'path': 'index.html#/life'
        },
        {
            'name': 'About',
            'path': 'index.html#/about'
        }
    ];
}
navController.$inject = ['$scope'];
ablogControllers.controller('navController', navController);