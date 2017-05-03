var userRouter = angular.module('userRoutes', ['ngRoute']);
    
userRouter.config(function($routeProvider, $locationProvider){
    $routeProvider
    
    .when('/users', {
        templateUrl: '/app/components/user/views/all.html',
        controller: 'UserController',
        controllerAs: 'userModel'
    })
    .when('/users/create', {
        templateUrl: '/app/components/user/views/single.html',
        controller: 'UserCreateController',
        controllerAs: 'userModel'
    })
    .when('/users/:user_id', {
        templateUrl: '/app/components/user/views/single.html',
        controller: 'UserEditController',
        controllerAs: 'userModel'
    })
    .when('/about', {
        templateUrl: '/views/pages/about.html',
        controller: 'AboutController',
        controllerAs: 'aboutModel'
    })
    .when('/contact', {
        templateUrl: '/views/pages/contact.html',
        controller: 'ContactController',
        controllerAs: 'contactModel'
    })
    .when('/', {
        templateUrl: '/views/pages/home.html',
        controller: 'MainController',
        controllerAs: 'homeModel'
    })
    .when('/login', {
        templateUrl: '/views/pages/login.html',
        controller: 'AuthController',
        controllerAs: 'loginModel'
    });
    // gets rid of the hash in the URL
    $locationProvider.html5Mode(true);
});