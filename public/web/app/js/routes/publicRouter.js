//var publicRouter = angular.module('publicRouterModule', ['ngRoute']);
    
app.config(function($routeProvider, $locationProvider){
    $routeProvider
    
    .when('/', {
        templateUrl: '/views/pages/home.html',
        controller: 'PublicController',
        controllerAs: 'publicVM'
    })
    .when('/login', {
        templateUrl: '/views/pages/login.html',
        controller: 'AuthController',
        controllerAs: 'loginVM'
    });
    // gets rid of the hash in the URL
    $locationProvider.html5Mode(true);
});