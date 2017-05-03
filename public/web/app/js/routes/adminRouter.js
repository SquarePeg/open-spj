//var adminRouter = angular.module('adminRouterModule', ['ngRoute']);
    
app.config(function($routeProvider, $locationProvider){
    $routeProvider
    
    // ADMIN Routes
    .when('/admin/dashboard', {
        templateUrl: '/views/admin/index.html',
        controller: 'AdminController',
        controllerAs: 'superModel'
    })
    .when('/admin/users', {
        templateUrl: '/app/components/user/views/all.html',
        controller: 'UserController',
        controllerAs: 'userModel'
    })
    .when('/admin/users/create', {
        templateUrl: '/app/components/user/views/single.html',
        controller: 'UserCreateController',
        controllerAs: 'userModel'
    })
    .when('/admin/users/:user_id', {
        templateUrl: '/app/components/user/views/single.html',
        controller: 'UserEditController',
        controllerAs: 'userModel'
    });
    // gets rid of the hash in the URL
    $locationProvider.html5Mode(true);
});