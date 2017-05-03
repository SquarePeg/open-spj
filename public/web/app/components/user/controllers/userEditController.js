app.controller('UserEditController', ['$routeParams', 'UserService', '$location',
function($routeParams, UserService, $location) {

    var vm = this;
    
    vm.type = 'edit';    
    
    UserService.get($routeParams.user_id)
        .success(function(data){
            vm.userData = data;    
        });
    
    vm.saveUser = function(){
        // set a processing variable to show loading things
        vm.processing = true;
        // clear the message
        vm.message = '';
        // use the create method in the user Service
        UserService.update($routeParams.user_id, vm.userData)
            .success(function(data){
                vm.processing = false;
                // clear the form
                vm.userData = {};
                vm.message = data.message;
            });        
    };
}]);
