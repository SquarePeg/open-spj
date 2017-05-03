app.controller('CompanyNavController', ['$rootScope', 'NavService',
    function ($rootScope, NavService) {

    var vm = this;
      
    NavService.get('company').success(function(data){
        vm.logoText = data.logoText;
        vm.navLinks = data.navLinks;
    });
        
}]);
