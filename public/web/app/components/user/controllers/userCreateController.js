app.controller('UserCreateController', ['UserService',
function(UserService) {

    var vm = this;
    
    vm.type = 'create';    
    
    vm.saveUser = function(){
        // set a processing variable to show loading things
        vm.processing = true;
        // clear the message
        vm.message = '';
        // use the create method in the user Service
        UserService.create(vm.userData)
            .success(function( data ){
                vm.processing = false;
                // clear the form
                vm.userData = {};
                vm.message = data.message;
            });
    };
}]);
