app.controller('PublicNavController', ['$rootScope', 'NavService',
    function ($rootScope, NavService) {

    var vm = this;
      
    NavService.get('public').success(function(data){
        vm.logoText = data.logoText;
        vm.navLinks = data.navLinks;
    });
        
}]);
