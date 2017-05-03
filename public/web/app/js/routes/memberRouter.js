var memberRouter = angular.module('memberRouterModule', ['ngRoute']);
    
memberRouter.config(function($routeProvider, $locationProvider){
    $routeProvider
    
    
    .when('/', {
        templateUrl: '/views/member/index.html',
        controller: 'MemberController',
        controllerAs: 'memberModel'
    })
    .when('/login', {
        templateUrl: '/views/pages/login.html',
        controller: 'AuthController',
        controllerAs: 'loginModel'
    });
    // gets rid of the hash in the URL
    $locationProvider.html5Mode(true);
});