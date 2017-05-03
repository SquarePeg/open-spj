app.controller('NavController', ['$rootScope','NavService',
    function ($rootScope, NavService) {

    var vm = this;
    
    NavService.navigation.logoText = 'SPJ loading...';
    
    vm.setNav = function(role){
        vm.processing = true;
        console.log('NavController/setNav');
        NavService.get( role )
            .success( function( data ){
                vm.processing = false;
                NavService.navigation = data.navigation;
            });
    };
        
    vm.logoText = NavService.navigation.logoText;
    vm.navLinks = NavService.navigation.navLinks;

}]);
