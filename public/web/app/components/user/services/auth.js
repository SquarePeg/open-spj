angular.module('authModule', [])

.factory('AuthService', ['$http', '$q', 'AuthToken', 'NavService', function($http, $q, AuthToken, NavService){
    
    // create a new object
    var authFactory = {};
    
    // handle login
    authFactory.login = function(email, password){
        return $http.post('/api/auth',{
            email: email,
            password: password
        })
        .success(function(data){
            AuthToken.setToken(data.token);
            // set the appropriate nav for Role
            NavService.get( data.role )
                .success( function( data ){
                    // below is already set in the NavService with .get method
                    //NavService.set( data.navigation );
                    return data;
                });
        });
    };
    
    // handle logout
    authFactory.logout = function(){
        AuthToken.setToken();
    };
    
    // check if a user is logged in
    authFactory.isLoggedIn = function(){
        if(AuthToken.getToken()){
            return true;
        }else{
            return false;
        }
    };
    
    // get the user info
    authFactory.getUser = function(){
        if( AuthToken.getToken() ){
            return $http.get( '/api/me', { cache: true } );
        } else {
            return $q.reject( { message : 'User has no token.' } );
        }
    };

    
    return authFactory;
}])
// inject $window to store token client-side
.factory('AuthToken', function($window){
    
    // create a new object
    var authTokenFactory = {};
    
    // get token
    authTokenFactory.getToken = function(){
        return $window.localStorage.getItem('token');
    };
    
    // set token
    authTokenFactory.setToken = function(token){
        if(token){
            $window.localStorage.setItem('token', token);
        } else {
            $window.localStorage.removeItem('token');
        }
    };

    return authTokenFactory;
})
// app config to integrate token into requests
.factory('AuthInterceptor', function($q, $location, AuthToken){
    
    // create a new object
    var interceptorFactory = {};
    
    // this will happen on all HTTP requests
    interceptorFactory.request = function(config){
        // grab the token
        var token = AuthToken.getToken();
        
        // if the token exists, add it to the header as x-access-token
        if( token ){
            config.headers['x-access-token'] = token;
        }
        
        return config;
    };
    
    // redirect if a token doesn't authenticate
    interceptorFactory.responseError = function(response){
        // if our server returns a 403 forbidden response
        if(response.status == 403){
            AuthToken.setToken();
            $location.path('/login');
        }
        return $q.reject(response);
    };

    return interceptorFactory;
});