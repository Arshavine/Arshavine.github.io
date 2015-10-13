/**
 * Created by ls on 2015/10/13.
 */
var ablogApp = angular.module('ablogApp', ['ngRoute', 'ablogControllers']);

ablogApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.when ('/home', {
            templateUrl: 'templates/home.html'
        }).when ('/life', {
            templateUrl: 'templates/life.html'
        }).when ('/about', {
            templateUrl: 'templates/about.html'
        }).otherwise({
            redirectTo: '/home'
        });
    }
]);