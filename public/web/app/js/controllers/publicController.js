app.controller('PublicController', ['$rootScope', '$location', 'AuthService',
    function ($rootScope, $location, AuthService) {
    
    // scope the View Model
    var vm = this;
        
    vm.message = "I like turtles!";
    vm.headerText = "SPJ Public Controller";
    
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
    
}]);
