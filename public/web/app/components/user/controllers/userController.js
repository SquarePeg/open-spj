app.controller('UserController', ['UserService', '$location',
function(UserService, $location) {

    var vm = this;
    
    // set a processing variable to show loading things
    vm.processing = true;
    
    // grab all the users at page load
    UserService.all()
        .success(function(data){
            
            // when all the users come back, remove the process
            vm.processing = false;
        
            // bind the users that back to vm.users
            vm.users = data;
        });
    
    vm.deleteUser = function(id){
        vm.type = 'delete';
        vm.processing = true;
        UserService.delete(id)
            .success(function(data){
                vm.processing = false;
                vm.users = data;
                $location.path('/users');
            });
    };
    
    vm.role = UserService.role;
    
}]);
