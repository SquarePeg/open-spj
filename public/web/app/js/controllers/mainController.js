app.controller('MainController', ['$scope','$rootScope','$location', 'AuthService', 'crap',
    function ($scope, $rootScope, $location, AuthService, crap) {
    
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
    
        
    // // // // // //        
    
    vm.message = "I like turtles!";
    vm.headerText = "SPJ Main Controller";
    
    crap.success(function(data){
        vm.crap = data;
    });

    vm.crappyData = {};
    
    vm.addCrap = function(){
        vm.crap.push({
            name: vm.crappyData.name,
            scent: vm.crappyData.scent,
            looks: vm.crappyData.looks        
        });
        
        vm.crappyData = {};
    };
    

}]);
