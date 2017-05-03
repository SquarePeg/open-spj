var app = angular.module('spj',
[
    'ngRoute',
    'authModule'
    //'userModule'
    //'navModule'
]);

// application configuration to integrate token into requests
app.config( function($httpProvider){
    
    // attach our auth interceptor to the http requests
    $httpProvider.interceptors.push('AuthInterceptor');

});