app.controller('AuthController', ['$window','$rootScope','$location','AuthService',
    function ($window, $rootScope, $location, AuthService) {
    
    // scope the View Model
    var vm = this;
    
    // get info if a person is logged in
    vm.loggedIn = AuthService.isLoggedIn(); 
    
    // check to see if a user is logged in on every request
    $rootScope.$on('$routeChangeStart', function(){
        vm.loggedIn = AuthService.isLoggedIn();
        
        // get user information on route changeList
        AuthService.getUser().then(function(data){
            vm.user = data;
        }, function( res ){
            vm.error = res.message;
            $location.path('/login');
        });  
            
    });
    
    // function to handle login form
    vm.doLogin = function(){
        
        vm.processing = true;
        vm.error = '';
        // call the Auth.login() function
        AuthService.login(vm.loginData.email, vm.loginData.password)
            .success( function(data){    
                if(data.success){
                    //vm.setNav( data.role );    
                    // if a user successfully logs in, redirect to users page                    
                    console.log("AuthController success");
                    $window.location.href = '/' + data.role + '/dashboard';
                    
                }else{
                    vm.error = data.message;
                }
            });
    };
    
        
    vm.doLogout = function(){
        AuthService.logout();
        // reset all user info
        vm.user = {};
        $location.path('/login');
    };

}]);
