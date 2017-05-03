var companyRouter = angular.module('companyRouterModule', ['ngRoute']);
    
companyRouter.config(function($routeProvider, $locationProvider){
    $routeProvider
    
    .when('/', {
        templateUrl: '/views/company/dashboard/index.html',
        controller: 'CompanyController',
        controllerAs: 'companyModel'
    })
    .when('/login', {
        templateUrl: '/views/pages/login.html',
        controller: 'AuthController',
        controllerAs: 'loginModel'
    });
    // gets rid of the hash in the URL
    $locationProvider.html5Mode(true);
});