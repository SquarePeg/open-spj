app.controller('AdminController', ['$rootScope', '$location', 'AuthService',
    function ($rootScope, $location, AuthService) {

    var vm = this;    
    
    vm.headerText = "Admin Controller";
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
        
    vm.doLogout = function(){
        AuthService.logout();
        // reset all user info
        vm.user = {};
        $location.path('/login');
    };

}]);
